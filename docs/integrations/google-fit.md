---
title: Google Fit
---

The Google Fit API is used to track your health and activity information. Add the key `google-fit` under `daily` to fetch this data every day:

```yaml title=".stethoscoperc.yml"
daily:
  - google-fit
```

## Data points

The following data points are available for this integration:

| Data point                         | Description              |
| ---------------------------------- | ------------------------ |
| `aerobics`                         | Aerobics                 |
| `archery`                          | Archery                  |
| `badminton`                        | Badminton                |
| `baseball`                         | Baseball                 |
| `basketball`                       | Basketball               |
| `biathlon`                         | Biathlon                 |
| `biking`                           | Biking                   |
| `biking-hand`                      | Biking (hand)            |
| `biking-mountain`                  | Biking (mountain)        |
| `biking-road`                      | Biking (road)            |
| `biking-spinning`                  | Biking (spinning)        |
| `biking-stationary`                | Biking (stationary)      |
| `biking-utility`                   | Biking (utility)         |
| `boxing`                           | Boxing                   |
| `calisthenics`                     | Calisthenics             |
| `circuit-training`                 | Circuit training         |
| `cricket`                          | Cricket                  |
| `crossfit`                         | Crossfit                 |
| `curling`                          | Curling                  |
| `dancing`                          | Dancing                  |
| `diving`                           | Diving                   |
| `elevator`                         | Elevator                 |
| `elliptical`                       | Elliptical               |
| `ergometer`                        | Ergometer                |
| `escalator`                        | Escalator                |
| `extra-status`                     | Extra status             |
| `fencing`                          | Fencing                  |
| `football-american`                | Football (American)      |
| `football-australian`              | Football (Australian)    |
| `football-soccer`                  | Football (soccer)        |
| `frisbee-disc`                     | Frisbee disc             |
| `gardening`                        | Gardening                |
| `golf`                             | Golf                     |
| `guided-breathing`                 | Guided breathing         |
| `gymnastics`                       | Gymnastics               |
| `handball`                         | Handball                 |
| `high-intensity-interval-training` | HIIT                     |
| `hiking`                           | Hiking                   |
| `hockey`                           | Hockey                   |
| `horseback-riding`                 | Horseback riding         |
| `housework`                        | Housework                |
| `ice-skating`                      | Ice skating              |
| `interval-training`                | Interval training        |
| `in-vehicle`                       | In vehicle               |
| `jump-rope`                        | Jump rope                |
| `kayaking`                         | Kayaking                 |
| `kettlebell-training`              | Kettlebell training      |
| `kickboxing`                       | Kickboxing               |
| `kick-scooter`                     | Kick scooter             |
| `kitesurfing`                      | Kitesurfing              |
| `martial-arts`                     | Martial arts             |
| `meditation`                       | Meditation               |
| `mime-type-prefix`                 | Mime type prefix         |
| `mixed-martial-arts`               | Mixed martial arts       |
| `on-foot`                          | On foot                  |
| `other`                            | Other                    |
| `p90x`                             | P90x                     |
| `paragliding`                      | Paragliding              |
| `pilates`                          | Pilates                  |
| `polo`                             | Polo                     |
| `racquetball`                      | Racquetball              |
| `rock-climbing`                    | Rock climbing            |
| `rowing`                           | Rowing                   |
| `rowing-machine`                   | Rowing machine           |
| `rugby`                            | Rugby                    |
| `running`                          | Running                  |
| `running-jogging`                  | Running (jogging)        |
| `running-sand`                     | Running (sand)           |
| `running-treadmill`                | Running (treadmill)      |
| `sailing`                          | Sailing                  |
| `scuba-diving`                     | Scuba diving             |
| `skateboarding`                    | Skateboarding            |
| `skating`                          | Skating                  |
| `skating-cross`                    | Skating (cross)          |
| `skating-indoor`                   | Skating (indoor)         |
| `skating-inline`                   | Skating (inline)         |
| `skiing`                           | Skiing                   |
| `skiing-back-country`              | Skiing (back country)    |
| `skiing-cross-country`             | Skiing (cross country)   |
| `skiing-downhill`                  | Skiing (downhill)        |
| `skiing-kite`                      | Skiing (kite)            |
| `skiing-roller`                    | Skiing (roller)          |
| `sledding`                         | Sledding                 |
| `sleep`                            | Sleep                    |
| `sleep-awake`                      | Sleep awake              |
| `sleep-deep`                       | Sleep deep               |
| `sleep-light`                      | Sleep light              |
| `sleep-rem`                        | Sleep rem                |
| `snowboarding`                     | Snowboarding             |
| `snowmobile`                       | Snowmobile               |
| `snowshoeing`                      | Snowshoeing              |
| `softball`                         | Softball                 |
| `squash`                           | Squash                   |
| `stair-climbing`                   | Stair climbing           |
| `stair-climbing-machine`           | Stair climbing (machine) |
| `standup-paddleboarding`           | Standup paddleboarding   |
| `status-active`                    | Status active            |
| `status-completed`                 | Status completed         |
| `still`                            | Still                    |
| `strength-training`                | Strength training        |
| `surfing`                          | Surfing                  |
| `swimming`                         | Swimming                 |
| `swimming-open-water`              | Swimming (open water)    |
| `swimming-pool`                    | Swimming (pool)          |
| `table-tennis`                     | Table tennis             |
| `team-sports`                      | Team sports              |
| `tennis`                           | Tennis                   |
| `tilting`                          | Tilting                  |
| `treadmill`                        | Treadmill                |
| `unknown`                          | Unknown                  |
| `volleyball`                       | Volleyball               |
| `volleyball-beach`                 | Volleyball (beach)       |
| `volleyball-indoor`                | Volleyball (indoor)      |
| `wakeboarding`                     | Wakeboarding             |
| `walking`                          | Walking                  |
| `walking-fitness`                  | Walking (fitness)        |
| `walking-nordic`                   | Walking (nordic)         |
| `walking-stroller`                 | Walking (stroller)       |
| `walking-treadmill`                | Walking (treadmill)      |
| `water-polo`                       | Water polo               |
| `weightlifting`                    | Weightlifting            |
| `wheelchair`                       | Wheelchair               |
| `windsurfing`                      | Windsurfing              |
| `yoga`                             | Yoga                     |
| `zumba`                            | Zumba                    |

```yaml title=".stethoscoperc.yml"
integrations:
  google-fit:
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

If you want to enable all data points, you can simply use `all` instead:

```yaml title=".stethoscoperc.yml"
integrations:
  google-fit:
    all: true
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
