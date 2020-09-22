---
title: Google Fit
---

The Google Fit API is used to track your health and activity information. Add the key `googleFit` under `daily` to fetch this data every day:

```yaml title=".stethoscoperc.yml"
daily:
  - googleFit
```

## Data points

The following data points are available for this integration:

| Data point                         | Description |
| ---------------------------------- | ----------- |
| `aerobics`                         | OK          |
| `archery`                          | OK          |
| `badminton`                        | OK          |
| `baseball`                         | OK          |
| `basketball`                       | OK          |
| `biathlon`                         | OK          |
| `biking`                           | OK          |
| `biking-hand`                      | OK          |
| `biking-mountain`                  | OK          |
| `biking-road`                      | OK          |
| `biking-spinning`                  | OK          |
| `biking-stationary`                | OK          |
| `biking-utility`                   | OK          |
| `boxing`                           | OK          |
| `calisthenics`                     | OK          |
| `circuit-training`                 | OK          |
| `cricket`                          | OK          |
| `crossfit`                         | OK          |
| `curling`                          | OK          |
| `dancing`                          | OK          |
| `diving`                           | OK          |
| `elevator`                         | OK          |
| `elliptical`                       | OK          |
| `ergometer`                        | OK          |
| `escalator`                        | OK          |
| `extra-status`                     | OK          |
| `fencing`                          | OK          |
| `football-american`                | OK          |
| `football-australian`              | OK          |
| `football-soccer`                  | OK          |
| `frisbee-disc`                     | OK          |
| `gardening`                        | OK          |
| `golf`                             | OK          |
| `guided-breathing`                 | OK          |
| `gymnastics`                       | OK          |
| `handball`                         | OK          |
| `high-intensity-interval-training` | OK          |
| `hiking`                           | OK          |
| `hockey`                           | OK          |
| `horseback-riding`                 | OK          |
| `housework`                        | OK          |
| `ice-skating`                      | OK          |
| `interval-training`                | OK          |
| `in-vehicle`                       | OK          |
| `jump-rope`                        | OK          |
| `kayaking`                         | OK          |
| `kettlebell-training`              | OK          |
| `kickboxing`                       | OK          |
| `kick-scooter`                     | OK          |
| `kitesurfing`                      | OK          |
| `martial-arts`                     | OK          |
| `meditation`                       | OK          |
| `mime-type-prefix`                 | OK          |
| `mixed-martial-arts`               | OK          |
| `on-foot`                          | OK          |
| `other`                            | OK          |
| `p90x`                             | OK          |
| `paragliding`                      | OK          |
| `pilates`                          | OK          |
| `polo`                             | OK          |
| `racquetball`                      | OK          |
| `rock-climbing`                    | OK          |
| `rowing`                           | OK          |
| `rowing-machine`                   | OK          |
| `rugby`                            | OK          |
| `running`                          | OK          |
| `running-jogging`                  | OK          |
| `running-sand`                     | OK          |
| `running-treadmill`                | OK          |
| `sailing`                          | OK          |
| `scuba-diving`                     | OK          |
| `skateboarding`                    | OK          |
| `skating`                          | OK          |
| `skating-cross`                    | OK          |
| `skating-indoor`                   | OK          |
| `skating-inline`                   | OK          |
| `skiing`                           | OK          |
| `skiing-back-country`              | OK          |
| `skiing-cross-country`             | OK          |
| `skiing-downhill`                  | OK          |
| `skiing-kite`                      | OK          |
| `skiing-roller`                    | OK          |
| `sledding`                         | OK          |
| `sleep`                            | OK          |
| `sleep-awake`                      | OK          |
| `sleep-deep`                       | OK          |
| `sleep-light`                      | OK          |
| `sleep-rem`                        | OK          |
| `snowboarding`                     | OK          |
| `snowmobile`                       | OK          |
| `snowshoeing`                      | OK          |
| `softball`                         | OK          |
| `squash`                           | OK          |
| `stair-climbing`                   | OK          |
| `stair-climbing-machine`           | OK          |
| `standup-paddleboarding`           | OK          |
| `status-active`                    | OK          |
| `status-completed`                 | OK          |
| `still`                            | OK          |
| `strength-training`                | OK          |
| `surfing`                          | OK          |
| `swimming`                         | OK          |
| `swimming-open-water`              | OK          |
| `swimming-pool`                    | OK          |
| `table-tennis`                     | OK          |
| `team-sports`                      | OK          |
| `tennis`                           | OK          |
| `tilting`                          | OK          |
| `treadmill`                        | OK          |
| `unknown`                          | OK          |
| `volleyball`                       | OK          |
| `volleyball-beach`                 | OK          |
| `volleyball-indoor`                | OK          |
| `wakeboarding`                     | OK          |
| `walking`                          | OK          |
| `walking-fitness`                  | OK          |
| `walking-nordic`                   | OK          |
| `walking-stroller`                 | OK          |
| `walking-treadmill`                | OK          |
| `water-polo`                       | OK          |
| `weightlifting`                    | OK          |
| `wheelchair`                       | OK          |
| `windsurfing`                      | OK          |
| `yoga`                             | OK          |
| `zumba`                            | OK          |

```yaml title=".stethoscoperc.yml"
config:
  googleFit:
    aerobics: true
    archery: true
    badminton: true
    baseball: true
    basketball: true
    biathlon: true
    biking: true
    biking-hand: true
    biking-mountain: true
    biking-road: true
    biking-spinning: true
    biking-stationary: true
    biking-utility: true
    boxing: true
    calisthenics: true
    circuit-training: true
    cricket: true
    crossfit: true
    curling: true
    dancing: true
    diving: true
    elevator: true
    elliptical: true
    ergometer: true
    escalator: true
    extra-status: true
    fencing: true
    football-american: true
    football-australian: true
    football-soccer: true
    frisbee-disc: true
    gardening: true
    golf: true
    guided-breathing: true
    gymnastics: true
    handball: true
    high-intensity-interval-training: true
    hiking: true
    hockey: true
    horseback-riding: true
    housework: true
    ice-skating: true
    interval-training: true
    in-vehicle: true
    jump-rope: true
    kayaking: true
    kettlebell-training: true
    kickboxing: true
    kick-scooter: true
    kitesurfing: true
    martial-arts: true
    meditation: true
    mime-type-prefix: true
    mixed-martial-arts: true
    on-foot: true
    other: true
    p90x: true
    paragliding: true
    pilates: true
    polo: true
    racquetball: true
    rock-climbing: true
    rowing: true
    rowing-machine: true
    rugby: true
    running: true
    running-jogging: true
    running-sand: true
    running-treadmill: true
    sailing: true
    scuba-diving: true
    skateboarding: true
    skating: true
    skating-cross: true
    skating-indoor: true
    skating-inline: true
    skiing: true
    skiing-back-country: true
    skiing-cross-country: true
    skiing-downhill: true
    skiing-kite: true
    skiing-roller: true
    sledding: true
    sleep: true
    sleep-awake: true
    sleep-deep: true
    sleep-light: true
    sleep-rem: true
    snowboarding: true
    snowmobile: true
    snowshoeing: true
    softball: true
    squash: true
    stair-climbing: true
    stair-climbing-machine: true
    standup-paddleboarding: true
    status-active: true
    status-completed: true
    still: true
    strength-training: true
    surfing: true
    swimming: true
    swimming-open-water: true
    swimming-pool: true
    table-tennis: true
    team-sports: true
    tennis: true
    tilting: true
    treadmill: true
    unknown: true
    volleyball: true
    volleyball-beach: true
    volleyball-indoor: true
    wakeboarding: true
    walking: true
    walking-fitness: true
    walking-nordic: true
    walking-stroller: true
    walking-treadmill: true
    water-polo: true
    weightlifting: true
    wheelchair: true
    windsurfing: true
    yoga: true
    zumba: true
```

## Authentication

To fetch your health data from Google Fit, you have to create a Google Cloud application. Head to https://console.cloud.google.com and create an application, then enable the Fitness API (https://console.cloud.google.com/apis/api/fitness.googleapis.com/overview).

After enabling the Fitness API, generate OAuth 2.0 credentials (see [Using OAuth 2.0 to Access Google APIs](https://developers.google.com/identity/protocols/oauth2)). Under "Authorized redirect URIs", enter https://developers.google.com/oauthplayground. You will generate a client ID and a client secret.

Then, head to the [OAuth 2.0 Playground](https://developers.google.com/oauthplayground/) and click on the configuration icon on the top-right. Check the "Use your own OAuth credentials" checkbox and your client ID and client secret, then press "Close". Under "Select & authorize APIs", click on "Fitness API v1" and select all scopes. Click on the "Authorize APIs" button, then click on "Exchange authorization code for tokens". Finally, copy the generated access token and refresh token.

## Environment variables

| Environment variable       | Description   |
| -------------------------- | ------------- |
| `GOOGLE_FIT_CLIENT_ID`     | Client ID     |
| `GOOGLE_FIT_CLIENT_SECRET` | Client secret |
| `GOOGLE_FIT_ACCESS_TOKEN`  | Access token  |
| `GOOGLE_FIT_REFRESH_TOKEN` | Refresh token |

<a href="/docs/integrations/google-fit"><img class="logos" alt="Google Fit" src="https://stethoscope.js.org/branding/integrations/google-fit.png" /></a>
