---
title: Oura Ring
---

The Oura API is used to track your daily sleep and activity. Add the key `ouraRing` under `daily` to fetch this data every day:

```yaml title=".stethoscoperc.yml"
daily:
  - oura-ring
```

## Data points

The following data points are available for this integration:

| Data point  | Description                      |
| ----------- | -------------------------------- |
| `weight`    | Weight                           |
| `sleep`     | Sleep time and quality           |
| `readiness` | Readiness score                  |
| `activity`  | Activity (steps, calories, etc.) |

```yaml title=".stethoscoperc.yml"
config:
  oura-ring:
    weight: true
    sleep: true
    readiness: true
    activity: true
```

If you want to enable all data points, you can simply use `all` instead:

```yaml title=".stethoscoperc.yml"
config:
  oura-ring:
    all: true
```

## Authentication

The Oura API requires a Personal Access Token which can be generated on the [Personal Access Tokens](https://cloud.ouraring.com/personal-access-tokens) page on the Oura website. Click on the "Create A New Personal Access Token" button and enter a note for the token. Then, copy the generate token.

## Environment variables

| Environment variable         | Description           |
| ---------------------------- | --------------------- |
| `OURA_PERSONAL_ACCESS_TOKEN` | Personal Access Token |

<a href="/docs/integrations/oura-ring"><img class="logos" alt="Oura-Ring" src="https://stethoscope.js.org/branding/integrations/oura-ring.png" /></a>
