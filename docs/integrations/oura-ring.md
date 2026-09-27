---
title: Oura Ring
---

## Intro

The Oura API is used to track your daily sleep and activity.

## Data points

The following data points are available for this integration:

| Data point  | Description                      |
| ----------- | -------------------------------- |
| `weight`    | Weight                           |
| `sleep`     | Sleep time and quality           |
| `readiness` | Readiness score                  |
| `activity`  | Activity (steps, calories, etc.) |

```yaml title=".stethoscoperc.yml"
integrations:
  oura-ring:
    frequency: "daily"
    weight: true
    sleep: true
    readiness: true
    activity: true
```

If you want to enable all data points, you can simply use `all` instead:

```yaml title=".stethoscoperc.yml"
integrations:
  oura-ring:
    frequency: "daily"
    all: true
```

## Authentication

**New unattended setups are not supported yet.** Oura [deprecated personal access tokens in December 2025](https://cloud.ouraring.com/v2/docs#section/Authentication); V2 requires an OAuth2 bearer access token. The integration can read an OAuth access token, but the template workflow still forwards only the old personal-access-token secret. It does not authorize an OAuth application, refresh expiring access tokens, or persist rotated refresh tokens. Do not create a personal access token or assume that a successful scheduled workflow means Oura data was updated. Check the [latest run manifest](/docs/understanding-data) for the Oura result.

An OAuth-backed setup needs user consent and a safe token-refresh/rotation path before it can run unattended. Oura's [authorization guide](https://cloud.ouraring.com/docs/authentication) describes the authorization-code flow and single-use refresh tokens; granting access and managing those credentials is a separate, opt-in step. Existing `data/oura-*/` files remain readable even when new updates fail.

## Environment variables

| Environment variable         | Status |
| ---------------------------- | ------ |
| `OURA_PERSONAL_ACCESS_TOKEN` | Legacy template input; personal access tokens are no longer available. Do not use for new setups. |
| `OURA_ACCESS_TOKEN` | OAuth bearer token accepted by the adapter, but not forwarded by the current template or automatically refreshed. Not a durable unattended setup. |

<a href="/docs/integrations/oura-ring"><img class="logos" alt="Oura-Ring" src="https://stethoscope.js.org/branding/integrations/oura-ring.png" /></a>
