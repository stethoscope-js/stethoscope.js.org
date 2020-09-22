---
title: API endpoints
---

:::note
Having publicly-visible API endpoints is optional. API endpoints only work after you have enabled GitHub Pages and have a public repository or a private repository with a Pro plan.
:::

## Base URL

The commits with your data also summarize it for easy consumption through an API. The `data` directory contains a list of integrations, and each of them has a `api.json` file.

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

## Rate limits

Since we're using GitHub Pages to publish your API, you have to respect their usage limits. In most cases, you will not have a problem, but it's good to know ([source](https://docs.github.com/en/github/working-with-github-pages/about-github-pages#usage-limits)):

- **There are no rate limits** on using these JSON endpoints
- Published site may be no larger than 1 GB in size
- Soft bandwidth limit of 100 GB per month
- Soft limit of 10 builds per hour
