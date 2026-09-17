---
title: Understanding your data
---

Stethoscope stores your data as versioned files in your repository. The files are the durable product: you can inspect their history with Git, read them directly from the repository, or publish selected data through GitHub Pages.

## The v2 data contract

Existing integrations write provider-shaped JSON below `data/`. Typical paths include:

```
data/<category>/daily/YYYY/MM/DD/<resource>.json
data/<category>/summary/<resource>/days/YYYY/MM.json
data/<category>/summary/<resource>/weeks/YYYY/<week>.json
data/<category>/summary/<resource>/months/YYYY.json
data/<category>/summary/<resource>/years.json
```

The exact files depend on the integration and enabled data points. Payloads remain provider-shaped rather than being forced into one universal schema.

When a category has generated summaries, `data/<category>/api.json` indexes the available summary files. This index is optional: a category with only raw or daily data can legitimately have no `api.json`. Existing v2 paths remain the compatibility boundary for current consumers and embeds.

## The v3 run manifest

After producing the ordinary v2 files and indexes, the action writes:

```
data/.stethoscope/manifest.v3.json
```

The manifest makes the latest run inspectable without changing v2 paths or payloads. It records:

- the manifest format and generation time
- the action and integrations versions plus the source commit
- a `succeeded`, `skipped`, or `failed` outcome for each adapter
- the relative paths and SHA-256 hashes of v2 files whose final contents changed during the run

It intentionally excludes credentials, provider error messages, provider response bodies, and account identifiers. The manifest is replaced on each run; use Git history if you need earlier manifests.

## Public and private data

Every integration and data point is opt-in, but enabled data is committed to the repository. A public repository exposes its Git history, while enabling GitHub Pages publishes the generated data as a website and static JSON endpoints.

Use a private repository with Pages disabled for private tracking. If you want public embeds or endpoints, use a separate public repository containing only the data you deliberately want to share. See [Repository setup](./) before publishing and [API endpoints](./api) for the URL structure.
