---
title: Goodreads (legacy)
---

:::warning No new setup
Goodreads [stopped issuing new public developer API keys](https://www.goodreads.com/topic/show/21788520-api-deprecation). The current Stethoscope adapter fetches and logs shelf results but does **not** write Stethoscope data files. Do not add this service expecting a new reading-history feed.
:::

This documentation change does not remove the adapter or any existing repository files. The old credential and configuration notes remain in the [historical documentation in Git](https://github.com/stethoscope-js/stethoscope.js.org/blob/0b06584c4f2c1a0cd1acdd347678c8f099de67f2/docs/integrations/goodreads.md), but are not a supported onboarding path. See the [adapter implementation](https://github.com/stethoscope-js/integrations/blob/master/src/api/goodreads.ts) for the current behavior.
