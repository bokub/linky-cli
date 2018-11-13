# Linky CLI

[![Version][version-src]][version-href]
[![Build Status][build-src]][build-href]
[![Engines][engine-src]][engine-href]

> A CLI tool to retrieve your Linky power consumption

#### If you are looking for a Node.js module, check out  [@bokub/linky](https://github.com/bokub/linky)


## Install

```
$ npm i -g linky-cli
```


## Usage

```sh
# Basic usage
linky (hour|day|month|year) -u <email> -p <password>

# Save data to file with -o
linky (hour|day|month|year) -u <email> -p <password> [-o <path>]

# Custom time period with -s (start) and -e (end)
linky (hour|day|month|year) -u <email> -p <password> [-s <DD/MM/YYYY>] [-e <DD/MM/YYYY>]

# Show help and examples
linky --help
```

### `linky hour [options]`

Retrieve power consumption with a step of 30 minutes

Default time period: *Yesterday*

### `linky week [options]`

Retrieve power consumption with a step of 1 day
You **cannot** retrieve more than 31 days at once

Default time period: *Last 31 days*

### `linky month [options]`

Retrieve power consumption with a step of 1 month
You **cannot** retrieve more than 12 months at once

Default time period: *Last 12 months*

### `linky year [options]`

Retrieve **all** your power consumption with a step of 1 year

You cannot use a custom time period

[build-src]: https://flat.badgen.net/travis/bokub/linky-cli
[build-href]: https://travis-ci.org/bokub/linky-cli
[version-src]: https://flat.badgen.net/npm/v/linky-cli
[version-href]: https://www.npmjs.com/package/linky-cli
[engine-src]: https://flat.badgen.net/npm/node/linky-cli
[engine-href]: https://www.npmjs.com/package/linky-cli
