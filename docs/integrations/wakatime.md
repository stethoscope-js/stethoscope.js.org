---
title: Wakatime
---

The Wakatime API is used to track your programming time and top languages. Add the key `wakatime` under `daily` to fetch this data every day:

```yaml title=".stethoscoperc.yml"
daily:
  - wakatime
```

## Data points

The following data points are available for this integration:

| Data point | Description                       |
| ---------- | --------------------------------- |
| `summary`  | Summary of languages and duration |

```yaml title=".stethoscoperc.yml"
config:
  wakatime:
    summary: true
```

If you want to enable all data points, you can simply use `all` instead:

```yaml title=".stethoscoperc.yml"
config:
  wakatime:
    all: true
```

## Authentication

You need to provide your WakaTime API key, which is available on the [Settings](https://wakatime.com/settings/account) page on the WakaTime website. Under "API key", click on "[click to show]" to view the API key and copy it.

## Environment variables

| Environment variable | Description |
| -------------------- | ----------- |
| `WAKATIME_API_KEY`   | API key     |

<a href="/docs/integrations/wakatime"><img class="logos" alt="Wakatime" src="https://stethoscope.js.org/branding/integrations/wakatime.png" /></a>
