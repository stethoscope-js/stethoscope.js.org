---
title: Stethoscope Embeds
slug: /embed
---

:::note
Embeds only work on public repositories, not private ones.
:::

## URLs

An example embed URL for the RescueTime service is:

```
https://stethoscope.js.org/embed/?repo=AnandChowdhary%2Flife&api=rescuetime-time-tracking&latest=top-overview.weeks
```

The part of this URL are:

- https://stethoscope.js.org/embed/, the base URL
- `?repo=AnandChowdhary%2Flife`, your GitHub repository (with the `/` URL-encoded)
- `&api=rescuetime-time-tracking`, name of the integration data point
- `&latest=top-overview.weeks`, name of the key and time parameter

The above URL will show you a graph of overview data from RescueTime for the latest week from the `AnandChowdhary/life` repository on GitHub. You can [try this URL](https://stethoscope.js.org/embed/?repo=AnandChowdhary%2Flife&api=rescuetime-time-tracking&latest=top-overview.weeks).

For integrations that don't have keys, you can just input `weeks`, `years`, `days` or `months` as the value for the query parameter `latest`.

## Embedding

You can use HTML `<iframe>` elements to embed this URL. For example:

```html
<iframe
  title="RescueTime overview"
  src="https://stethoscope.js.org/embed/?repo=AnandChowdhary%2Flife&api=rescuetime-time-tracking&latest=top-overview.weeks"
></iframe>
```

With some styling, this renders to:

<iframe title="RescueTime overview" src="https://stethoscope.js.org/embed/?repo=AnandChowdhary%2Flife&api=rescuetime-time-tracking&latest=top-overview.weeks"></iframe>

## Customization

You can customize features like colors and chart style.

### Colors

Change the color of the chart to `#16a085` by adding `&color=%2316a085` to the end (note that `#` URL-encoded is `%23`):

```html
<iframe
  title="Wakatime overview"
  src="https://stethoscope.js.org/embed/?repo=AnandChowdhary%2Flife&api=wakatime-time-tracking&latest=days&color=%2316a085"
></iframe>
```

<iframe title="Wakatime overview" src="https://stethoscope.js.org/embed/?repo=AnandChowdhary%2Flife&api=wakatime-time-tracking&latest=days&color=%2316a085"></iframe>

### Chart type

You can select either `line` or `bar` chart. Change the above chart to line by adding `&chart=line` to the end:

```html
<iframe
  title="Wakatime overview"
  src="https://stethoscope.js.org/embed/?repo=AnandChowdhary%2Flife&api=wakatime-time-tracking&latest=days&color=%2316a085&chart=line"
></iframe>
```

<iframe title="Wakatime overview" src="https://stethoscope.js.org/embed/?repo=AnandChowdhary%2Flife&api=wakatime-time-tracking&latest=days&color=%2316a085&chart=line"></iframe>
