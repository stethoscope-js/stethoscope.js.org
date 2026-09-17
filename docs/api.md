---
title: API endpoints
---

:::note
Publishing data endpoints is optional. Enabling GitHub Pages makes the generated site public, so publish only a repository whose tracked data you intend to share. For private tracking, leave Pages disabled and keep the repository private.
:::

## Base URL

The commits with your data can also include summaries for easy consumption through static JSON endpoints. Data is stored below `data/`. A category has an `api.json` index only when Stethoscope generated summaries for that category; raw-only and daily-only categories can legitimately have no `api.json`.

After you have enabled publishing to GitHub Pages, your repository will be available at https://username.github.io/repo/ where `username` is your GitHub username and `repo` is the name of your repository. This is your base URL.

### Custom domain

You can also enable custom domains on your GitHub repository. To enable publishing with a custom domain:

1. Create a new `CNAME` file in your repository root
2. Enter your domain name in the file and commit it
3. Set GitHub Pages' DNS records for your domain

For more information, including a list of DNS records, read the following article on the GitHub website: [Configuring a custom domain for your GitHub Pages site](https://docs.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site).

## API

Each integration has its own API. For example, time tracking from RescueTime is available at https://username.github.io/repo/data/rescuetime-time-tracking/api.json. As an example, the template repository's RescueTime data is available at https://stethoscope-js.github.io/stethoscope/data/rescuetime-time-tracking/api.json.

The JSON response of this endpoint is:

```json
{
  "top-overview": {
    "days": {
      "2020": ["01.json", "02.json", "03.json", "04.json"]
    },
    "months": ["2020.json"],
    "weeks": {
      "2020": ["1.json", "2.json", "3.json"]
    },
    "years": "years.json"
  }
}
```

In this example, RescueTime has tracked the top categories for the months 01 to 04 in 2020 (January to April), and the week numbers 1 to 3.

## Fetching data

In the above example, the keys under `top-overview` are `days`, `months`, `weeks`, and `years`. If you want to access a yearly summary, you have to visit `years.json` like so:

```
https://stethoscope-js.github.io/stethoscope/data/rescuetime-time-tracking/summary/top-overview/years.json
```

The structure of this URL is, after your base URL:

- `data` (the directory for data)
- `rescuetime-time-tracking` (the name of the integration data point)
- `summary`
- `top-overview` (the name of the key to access)
- `years.json` (the endpoint to access)

The response for this URL will be the yearly RescueTime top activities:

```json
{
  "2020": {
    "Entertainment": 692010,
    "Software Development": 3236714,
    "Utilities": 311808,
    "News & Opinion": 89289,
    "Reference & Learning": 475160,
    "Uncategorized": 386005,
    "Communication & Scheduling": 1008616,
    "Business": 313264,
    "Social Networking": 188427,
    "Design & Composition": 497182,
    "Shopping": 92128
  }
}
```

[Test this endpoint →](https://stethoscope-js.github.io/stethoscope/data/rescuetime-time-tracking/summary/top-overview/years.json)

Similarly, each integration data point has its own summary for all the time periods — years, months, weeks, and days.

Some integrations that don't have multiple keys don't require that additional parameter in the URL. For example, the URL for the Wakatime API is https://stethoscope-js.github.io/stethoscope/data/wakatime-time-tracking/api.json. Its response does not have any additional keys, just the time periods:

```json
{
  "days": {
    "2020": ["01.json"]
  },
  "months": ["2020.json"],
  "weeks": {
    "2020": ["1.json", "2.json", "3.json", "4.json"]
  },
  "years": "years.json"
}
```

Likewise, its `years.json` endpoint is https://stethoscope-js.github.io/stethoscope/data/wakatime-time-tracking/summary/years.json. The response is:

```json
{
  "2019": 761539.7373129998,
  "2020": 2864267.981469
}
```

## Latest-run manifest

The current Stethoscope action also writes an additive v3 run manifest at:

```
data/.stethoscope/manifest.v3.json
```

When GitHub Pages is enabled, its public URL is:

```
https://username.github.io/repo/data/.stethoscope/manifest.v3.json
```

This file describes the latest action run. It contains:

- `format`, currently `3`
- `generatedAt`, the run timestamp
- `generator`, with the action version, integrations version, and source commit
- `adapters`, with a `succeeded`, `skipped`, or `failed` outcome for every adapter
- `v2Files`, a map of v2 files changed by that run to their SHA-256 hashes

The manifest is an audit aid, not a replacement for existing v2 data URLs. It does not contain provider error messages, credentials, response bodies, or account identifiers, and it is overwritten by the next run rather than kept as a historical log.

:::note
The manifest lives in a dot-prefixed directory. Repositories created from the current template include an empty `.nojekyll` file so GitHub Pages publishes that path. Existing repositories should add the same empty file at the repository root if the manifest URL returns `404` while non-dot `data/` URLs work.
:::

## Rate limits

Since we're using GitHub Pages to publish your API, you have to respect their usage limits. In most cases, you will not have a problem, but it's good to know ([source](https://docs.github.com/en/github/working-with-github-pages/about-github-pages#usage-limits)):

- **There are no rate limits** on using these JSON endpoints
- Published site may be no larger than 1 GB in size
- Soft bandwidth limit of 100 GB per month
- Soft limit of 10 builds per hour
