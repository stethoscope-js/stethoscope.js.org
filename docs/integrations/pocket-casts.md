---
title: Pocket Casts
---

The Pocket Casts API is used to track your podcast listening history and track library. Add the key `pocketCasts` under `daily` to fetch this data every day:

```yaml title=".stethoscoperc.yml"
daily:
  - pocket-casts
```

## Data points

The following data points are available for this integration:

| Data point | Description       |
| ---------- | ----------------- |
| `history`  | Listening history |
| `library`  | Podcast library   |

```yaml title=".stethoscoperc.yml"
integrations:
  pocket-casts:
    history: true
    library: true
```

If you want to enable all data points, you can simply use `all` instead:

```yaml title=".stethoscoperc.yml"
integrations:
  pocket-casts:
    all: true
```

## Authentication

:::warning
This service does not support API key or OAuth authentication and requires your password.
:::

You need to provide your Pocket Casts email address and password to access your data. The npm package [pocketcasts](https://www.npmjs.com/package/pocketcasts) is used to fetch your library and listening history. The package, in turn, sends HTTP requests simulating a login to the web app and uses the generated token to access your data ([see source](https://github.com/coughlanio/pocketcasts/blob/master/src/index.js)).

## Environment variables

| Environment variable    | Description |
| ----------------------- | ----------- |
| `POCKET_CASTS_USERNAME` | Username    |
| `POCKET_CASTS_PASSWORD` | Password    |

<a href="/docs/integrations/pocket-casts"><img class="logos" alt="Pocket Casts" src="https://stethoscope.js.org/branding/integrations/pocket-casts.png" /></a>
