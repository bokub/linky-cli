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

```
$ linky --help

    Usage
      $ linky <hour|day|month|year> -u <email> -p <password>

    Options
      --user        -u    Linky client area e-mail
      --password    -p    Linky client area password
      --start       -s    Start of the custom time period (DD/MM/YYYY)
      --end         -e    End of the custom time period (DD/MM/YYYY)

    Examples
      $ linky month -u me@example.com -p password123
      $ linky day -u me@example.com -p password123 -s 24/08/2018 -e 06/09/2018

```

[build-src]: https://flat.badgen.net/travis/bokub/linky-cli
[build-href]: https://travis-ci.org/bokub/linky-cli
[version-src]: https://flat.badgen.net/npm/v/linky-cli
[version-href]: https://www.npmjs.com/package/linky-cli
[engine-src]: https://flat.badgen.net/npm/node/linky-cli
[engine-href]: https://www.npmjs.com/package/linky-cli
