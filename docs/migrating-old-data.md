---
title: Migrating old data
---

To migrate your old data (from the time before Stethoscope started tracking your data), you can migrate it using the Stethoscope Integrations CLI.

Before proceeding with this guide, make sure you have Node.js and git installed. You can visit the [Node.js website](https://nodejs.org/en/download/) and the [Git website](https://git-scm.com) for instructions for downloading and installing Node.js and git respectively.

First, clone your repository and set your working directory as the repository

1. Clone your repository (see [Cloning a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository))
2. Enter the directory (`cd stethoscope`) in a terminal window

Add all required environment variables, which you have added as GitHub repository secrets, to a `.env` file. Detailed documentation about which environment variables are required for each service are available in [Integrations](/docs/integrations):

```env title=".env"
RESCUETIME_API_KEY = "example-api-key"
```

Then, we will run the Stethoscope Integrations CLI using [npx](https://github.com/npm/npx). Select which integration's data you want to migrate. For example, to migrate your RescueTime data from January 26, 2020:

```bash
npx @stethoscope-js/integrations migrate rescuetime 2020-01-26
```

In the above shell command, the parts are:

1. `npx` is the package runner for Node.js
2. `@stethoscope-js/integrations` is the Stethoscope Integrations and CLI package
3. `migrate` is the CLI command used for performing data migrations
4. `rescuetime` is the name of the service
5. `2020-01-26` is the date to start from in the YYYY-MM-DD format

Once completed all service migrations, commit your data and push your changes.
