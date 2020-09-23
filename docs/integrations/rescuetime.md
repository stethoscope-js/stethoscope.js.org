---
title: RescueTime
---

## Intro

The RescueTime API is used to track your screen time from all your devices.

## Data points

The following data points are available for this integration:

| Data point       | Description                           |
| ---------------- | ------------------------------------- |
| `top-categories` | Top categories                        |
| `top-activities` | Top activities (websites, apps, etc.) |
| `overview`       | Productivity overview                 |

```yaml title=".stethoscoperc.yml"
integrations:
  rescuetime:
    frequency: "daily"
    top-categories: true
    top-activities: true
    overview: true
```

:::note
If you enable `top-activities`, it will track and commit a list of all your activities, including domains of websites you have visited and name of apps you have used.
:::

If you want to enable all data points, you can simply use `all` instead:

```yaml title=".stethoscoperc.yml"
integrations:
  rescue-time:
    frequency: "daily"
    all: true
```

## Authentication

You need to provide your Rescue Time API key, which is available on your [API key management](https://www.rescuetime.com/anapi/manage) page on the Rescue Time website.

To generate a new API key, scroll to "Create a new API key" and enter a description under "Reference label". Click on "Activate this key" and copy the API key.

## Environment variables

| Environment variable | Description |
| -------------------- | ----------- |
| `RESCUETIME_API_KEY` | API key     |

<a href="/docs/integrations/rescuetime"><img class="logos" alt="RescueTime" src="https://stethoscope.js.org/branding/integrations/rescuetime.png" /></a>
