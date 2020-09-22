---
title: Last.fm
---

The Last.fm API is used to track your music listening history. It is recommended over Spotify because you can scrobble tracks from multiple services. Add the key `lastFm` under `daily` to fetch this data every day:

```yaml title=".stethoscoperc.yml"
daily:
  - last-fm
```

## Data points

The following data points are available for this integration:

| Data point    | Description       |
| ------------- | ----------------- |
| `history`     | Listening history |
| `top-albums`  | Top albums        |
| `top-tracks`  | Top tracks        |
| `top-artists` | Top artists       |

```yaml title=".stethoscoperc.yml"
config:
  last-fm:
    history: true
    top-albums: true
    top-tracks: true
    top-artists: true
```

If you want to enable all data points, you can simply use `all` instead:

```yaml title=".stethoscoperc.yml"
config:
  last-fm:
    all: true
```

## Authentication

You'll have to create an API account on https://www.last.fm/api/account/create. Since we don't require any tokens, you can add the default URL http://localhost:3000/callback under "Callback URL" in your Last.fm API account. When completed, you'll receive an API key and a shared secret.

## Environment variables

| Environment variable   | Description   |
| ---------------------- | ------------- |
| `LASTFM_API_KEY`       | API key       |
| `LASTFM_SHARED_SECRET` | Shared secret |

<a href="/docs/integrations/last-fm"><img class="logos" alt="Last.fm" src="https://stethoscope.js.org/branding/integrations/last-fm.png" /></a>
