---
title: Stethoscope Integrations
slug: /integrations
---

## Before enabling an integration

RescueTime, WakaTime, Clockify, Spotify, Last.fm, and Oura have current fixture-backed adapter coverage. This tests their request/output contracts without claiming that your own credentials or every provider response will work. Inspect the latest [run manifest](/docs/understanding-data) for `succeeded`, `skipped`, or `failed` per adapter; the scheduled workflow can finish successfully even when one adapter fails.

**Legacy / not recommended for new setups:** Google Fit (its REST API is [being deprecated in 2026](https://developers.google.com/fit) and new developer sign-ups closed in May 2024), Pocket Casts ([no public API](https://support.pocketcasts.com/knowledge-base/pocket-casts-api); the adapter uses a password-backed unofficial login), Goodreads ([no new public API keys](https://www.goodreads.com/topic/show/21788520-api-deprecation); the current adapter writes no Stethoscope records), and Twitter/X (the adapter still calls [v1.1 endpoints](https://github.com/stethoscope-js/integrations/blob/master/src/api/twitter.ts); current access is unverified). Existing `data/**` remains readable; these labels do not disable existing configurations or delete historical data.

## Time tracking

<a href="/docs/integrations/rescuetime"><img class="logos" alt="RescueTime" src="https://stethoscope.js.org/branding/integrations/rescuetime.png" /></a>

<a href="/docs/integrations/wakatime"><img class="logos" alt="Wakatime" src="https://stethoscope.js.org/branding/integrations/wakatime.png" /></a>

<a href="/docs/integrations/clockify"><img class="logos" alt="Clockify" src="https://stethoscope.js.org/branding/integrations/clockify.png" /></a>

## Health

<a href="/docs/integrations/oura-ring"><img class="logos" alt="Oura-Ring" src="https://stethoscope.js.org/branding/integrations/oura-ring.png" /></a>

<a href="/docs/integrations/apple-health"><img class="logos" alt="Apple Health" src="https://stethoscope.js.org/branding/integrations/apple-health.png" /></a>

## Lifestyle

<a href="/docs/integrations/spotify"><img class="logos" alt="Spotify" src="https://stethoscope.js.org/branding/integrations/spotify.png" /></a>

<a href="/docs/integrations/last-fm"><img class="logos" alt="Last.fm" src="https://stethoscope.js.org/branding/integrations/last-fm.png" /></a>

## Legacy integration reference

Historical data and configuration notes remain available for [Google Fit](/docs/integrations/google-fit), [Pocket Casts](/docs/integrations/pocket-casts), [Goodreads](/docs/integrations/goodreads), and [Twitter/X](/docs/integrations/twitter). Do not interpret their presence as a recommendation to create new credentials.

## Ideas

If you have an idea for a new integration, share it with us here: [stethoscope-js/stethoscope#1](https://github.com/stethoscope-js/stethoscope/issues/1).
