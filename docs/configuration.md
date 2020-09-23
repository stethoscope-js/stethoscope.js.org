---
title: Configuration
---

The `.stethoscoperc.yml` file is used as the central configuration store. In that file, you can specify which services you want to connect to using [Integrations](/docs/integrations).

## Integrations

Enter the name (slugified) of each services you intend to use. In the following example, we have enabled all tracking data points for four integrations, all fetching the data every day:

```yaml title=".stethoscoperc.yml"
integrations:
  rescuetime:
    frequency: "daily"
    all: true
  last-fm:
    frequency: "daily"
    all: true
```

## Frequency

Currently, all data is fetched every day. You can control that by setting the `frequency` of each integration.

Only `daily` is supported at present.
