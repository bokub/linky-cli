# Linky CLI

[![Version][version-src]][version-href]
[![Build Status][build-src]][build-href]
[![Engines][engine-src]][engine-href]
![Code style][style-src]

> A CLI tool to retrieve your Linky power consumption

| This tool is deprecated and does not work anymore. You can use [linky](https://github.com/bokub/linky) instead |
| --- |

| Cet outil ne fonctionne plus et n'est plus maintenu. Utilisez plutôt [linky](https://github.com/bokub/linky) ! |
| --- |

_____

![Screenshot](https://i.imgur.com/Ma925qB.png)


## Install

```
$ npm i -g linky-cli
```


## Usage

```sh
# Basic usage (interactive)
linky

# Basic usage (no questions asked)
linky (hour|day|month|year) -u <email> -p <password>

# Save data to JSON file with -o
linky -o <path>

# Custom time period with -s (start) and -e (end)
linky -s <DD/MM/YYYY> -e <DD/MM/YYYY>

# Show help and more examples
linky --help
```

#### `linky hour [options]`

Retrieve power consumption with a step of 30 minutes

Default time period: *Yesterday*

#### `linky day [options]`

Retrieve power consumption with a step of 1 day

You **cannot** retrieve more than 31 days at once

Default time period: *Last 31 days*

#### `linky month [options]`

Retrieve power consumption with a step of 1 month

You **cannot** retrieve more than 12 months at once

Default time period: *Last 12 months*

#### `linky year [options]`

Retrieve **all** your power consumption with a step of 1 year

You cannot use a custom time period

[build-src]: https://flat.badgen.net/travis/bokub/linky-cli
[build-href]: https://travis-ci.org/bokub/linky-cli
[version-src]: https://flat.badgen.net/npm/v/linky-cli?color=cyan
[version-href]: https://www.npmjs.com/package/linky-cli
[engine-src]: https://flat.badgen.net/badge/node/%3E=%207.6.0?color=orange
[engine-href]: https://www.npmjs.com/package/linky-cli
[style-src]: https://flat.badgen.net/badge/code%20style/XO?color=5ED9C7
