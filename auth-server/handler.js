'use strict';


// eslint-disable-next-line no-undef
const { google } = require("googleapis");
const calendar = google.calendar("v3");
const SCOPES = ["https://www.googleapis.com/auth/calendar.events.public.readonly"];
// eslint-disable-next-line no-undef
const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env;
const redirect_uris = [
 "https://meet-eosin-eight.vercel.app"
];


const oAuth2Client = new google.auth.OAuth2(
 CLIENT_ID,
 CLIENT_SECRET,
 redirect_uris[0]
);

// Get the auth URL

// eslint-disable-next-line no-undef
module.exports.getAuthURL = async () => { 
 const authUrl = oAuth2Client.generateAuthUrl({
   access_type: "offline",
   scope: SCOPES,
 });

 return {
   statusCode: 200,
   headers: {
     'Access-Control-Allow-Origin': '*',
     'Access-Control-Allow-Credentials': true,
   },
   body: JSON.stringify({
     authUrl,
   }),
 };
 }

// Get the access token

// eslint-disable-next-line no-undef
    module.exports.getAccessToken = async (event) => {
    const code = decodeURIComponent(`${event.pathParameters.code}`);

    return new Promise((resolve, reject) => {
      oAuth2Client.getToken(code, (error, token) => {
        if (error) {
          return reject(error);
        }
        oAuth2Client.setCredentials(token);
        return resolve(token);
      });
    })
    .then((results) => {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
        },
        body: JSON.stringify(results),
      };
    })
    .catch((error) => {
      // Handle error
      return {
        statusCode: 500,
        body: JSON.stringify(error),
      };
    });
  }

  // eslint-disable-next-line no-undef
  export async function getCalendarEvents(event) {
	const access_token = decodeURIComponent(
		`${event.pathParameters.access_token}`
	);
	oAuth2Client.setCredentials({ access_token });

	return new Promise((resolve, reject) => {
		calendar.events.list(
			{
				calendarId: CALENDAR_ID,
				auth: oAuth2Client,
				timeMin: new Date().toISOString(),
				singleEvents: true,
				orderBy: 'startTime',
			},
			(error, response) => {
				if (error) {
					return reject(error);
				}
				return resolve(response);
			}
		);
	})
		.then((results) => {
			return {
				statusCode: 200,
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Credentials': true,
				},
				body: JSON.stringify({ events: results.data.items }),
			};
		})
		.catch((error) => {
			// Handle error
			return {
				statusCode: 500,
				body: JSON.stringify(error),
			};
		});
}