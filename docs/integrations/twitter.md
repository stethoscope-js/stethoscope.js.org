---
title: Twitter
---

## Intro

You can track all your tweets (including retweets) and likes using the Twitter integration.

## Data points

The following data points are available for this integration:

| Data point | Description  |
| ---------- | ------------ |
| `tweets`   | Tweets       |
| `likes`    | Liked tweets |

```yaml title=".stethoscoperc.yml"
integrations:
  spotify:
    frequency: "daily"
    tweets: true
    likes: true
```

If you want to enable all data points, you can simply use `all` instead:

```yaml title=".stethoscoperc.yml"
integrations:
  spotify:
    frequency: "daily"
    all: true
```

## Authorization

First, create a new Twitter application on https://developer.twitter.com/en/apps/create. Then, copy its API key and API secret key.

After that, head to the "Keys and tokens" tab and under "Access token & access token secret", click on "Generate". Copy the Access Token and Access Token Secret.

## Environment variables

When the tokens are generated, you can set the following environment variables:

| Environment variable          | Description         |
| ----------------------------- | ------------------- |
| `TWITTER_API_KEY`             | API key             |
| `TWITTER_API_SECRET_KEY`      | API secret key      |
| `TWITTER_ACCESS_TOKEN`        | Access token        |
| `TWITTER_ACCESS_TOKEN_SECRET` | Access token secret |
| `TWITTER_SCREEN_NAME`         | Twitter username    |

<a href="/docs/integrations/twitter"><img class="logos" alt="Twitter" src="https://stethoscope.js.org/branding/integrations/twitter.png" /></a>
