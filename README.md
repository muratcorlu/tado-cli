# Tado CLI [WIP]

[![Build Status](https://travis-ci.org/muratcorlu/tado-cli.svg?branch=master)](https://travis-ci.org/muratcorlu/tado-cli) [![npm version](https://badge.fury.io/js/tado-cli.svg)](https://www.npmjs.com/package/tado-cli) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Tado CLI is a command line applicationt to read your data(mostly to read historical statistics) from Tado Smart Heating System.

## Installation

```bash
$ npm i -g tado-cli
```

## Usage

First you need to set your Tado user credentials as env variables.

```bash
export TADO_USERNAME=your@email.com
export TADO_PASSWORD=YourAwesomePassword
```

Then you can see a list of possible command with `tado -h`.

```bash
$ tado -h
Usage: index [options] [command]

Unofficial Tado CLI

Options:
  -V, --version                    output the version number
  -h, --help                       display help for command

Commands:
  homes                            List Homes
  zones <homeid>                   List Zones for given Home ID
  report <homeid> <zoneid> <date>  Get Report for given date
  help [command]                   display help for command
```
