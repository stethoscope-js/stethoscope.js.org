---
title: Google Fit
---

The Google Fit API is used to track your health and activity information. Add the key `googleFit` under `daily` to fetch this data every day.

## Authentication

To fetch your health data from Google Fit, you have to create a Google Cloud application. Head to https://console.cloud.google.com and create an application, then enable the Fitness API (https://console.cloud.google.com/apis/api/fitness.googleapis.com/overview).

After enabling the Fitness API, generate OAuth 2.0 credentials (see [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2)). Under "Authorized redirect URIs", enter https://developers.google.com/oauthplayground. You will generate a client ID and a client secret.

Then, head to the [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/) and click on the configuration icon on the top-right. Check the "Use your own OAuth credentials" checkbox and your client ID and client secret, then press "Close". Under "Select & authorize APIs", click on "Fitness API v1" and select all scopes. Click on the "Authorize APIs" button, then click on "Exchange authorization code for tokens". Finally, copy the generated access token and refresh token.

## Environment variables

| Environment variable       | Description   |
| -------------------------- | ------------- |
| `GOOGLE_FIT_CLIENT_ID`     | Client ID     |
| `GOOGLE_FIT_CLIENT_SECRET` | Client secret |
| `GOOGLE_FIT_ACCESS_TOKEN`  | Access token  |
| `GOOGLE_FIT_REFRESH_TOKEN` | Refresh token |

<a href="/docs/integrations/google-fit"><img class="logos" alt="Google Fit" src="https://stethoscope.js.org/branding/integrations/google-fit.png" /></a>
