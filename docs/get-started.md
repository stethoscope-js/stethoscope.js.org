---
title: Repository
slug: /
---

To use Stethoscope to track your health and life data, you start by creating a repository using the template on GitHub.

## Create a repository from the template

You can click on the following link to generate a repository using the template: [Create a new repository from stethoscope-js/stethoscope](https://github.com/stethoscope-js/stethoscope/generate). Alternately, you can follow these steps:

1. Visit the Stethoscope repository on GitHub: https://github.com/stethoscope-js/stethoscope
2. Click on the "Use this template" button on the top-right
3. Enter a name for your new repository
4. Click on "Create repository from template"

For more details on how to create repositories using template, read the article on the GitHub website: [Creating a repository from a template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

## After creating your repository

The following steps apply to your new repository, not the [stethoscope-js/stethoscope](https://github.com/stethoscope-js/stethoscope) template repository.

### Enable publishing

To access your [API endpoints](./api), you have to enable publishing using GitHub Pages:

1. Go to your repository settings page
2. Scroll to "GitHub Pages" settings
3. Under "Source", change "None" to "master"
4. Click on "Save"

After saving, you will see confirmation text "Your site is ready to be published at...". For more information on enabling GitHub Pages, see the article on the GitHub website: [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

If you don't want to have a publicly-available API, you don't have to enable publishing. If that is the case, you should also choose to keep your repository private (see [Setting repository visibility](https://docs.github.com/en/github/administering-a-repository/setting-repository-visibility)).

### Deleting sample data

There is sample data available in the `data` directory. You have to start by **deleting the `data` directory** in your new repository. To delete the directory, perform the following steps ([source](https://github.community/t/how-to-delete-multiples-files-in-github/702/3)):

1. Clone your newly created repository (see [Cloning a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository))
2. Enter the directory (`cd stethoscope`) in a terminal window
3. Ensure you are in the default branch: `git checkout master`
4. Recursively remove the folder: `git rm -r data`
5. Commit the change: `git commit -m ":fire: Remove sample data"`
6. Push the change to your remote repository: `git push origin master`

### Update configuration

The `.stethoscoperc.yml` file is used as the central configuration store. In that file, you can specify which services you want to connect to using [Integrations](/docs/integrations).

Enter the camel-cased names of all services you intend to use, for example:

```yaml
daily:
  - rescueTime
  - lastFm
  - pocketCasts
  - googleFit
```

### Add tracking details

All data points are **opt-in**, so you have to individually enable which items to track for each Integration.

For example, if you have enabled the [RescueTime](/docs/integrations/rescuetime) integration, you can track your overview, top categories, and top activities. In this example, we are enabling the overview and top categories, but not top activities in the `.stethoscoperc.yml` file. A sample file is available in the repository: [`.stethoscoperc.yml`](https://github.com/stethoscope-js/stethoscope/blob/master/.stethoscoperc.yml).

```yaml
config:
  rescueTime:
    overview: true
    categories: true
    activities: false
```

Detailed documentation about which tracking details are available for each service is present in [Integrations](/docs/integrations).

### Add repository secrets

All sensitive information required, such as API keys, are provided as environment variables. These are stored as GitHub repository secrets (see [Creating and storing encrypted secrets](https://docs.github.com/en/actions/configuring-and-managing-workflows/creating-and-storing-encrypted-secrets)).

For example, if you have enabled the [RescueTime](/docs/integrations/rescuetime) integration, you need to provide the API key. Specify the environment variable `RESCUETIME_API_KEY` by adding it as a repository secret.

Detailed documentation about which environment variables are required for each service are available in [Integrations](/docs/integrations).

### Next steps

1. Start tracking data by performing a [manual trigger](./manual-triggers).
1. Optionally, add older data from your integrations using by [migrating old data](./migrating-old-data)
1. Create [embeds](/docs/embed) to add visualization to your website
