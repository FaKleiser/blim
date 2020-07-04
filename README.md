# blim

![npm](https://img.shields.io/npm/v/blim?style=flat-square)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/FaKeller/blim/Build%20Blim?style=flat-square)

Blazing fast image optimization for blog post images.

`blim` helps you optimize images from the command line to be used on blogs.
Typically, `blim` is within the context of statically generated pages.
Current features include:

- Resize and shrink images to a target width/height.
- Crop images automagically if the original image has a different aspect ratio than the desired output resolution.
- Compress images to reduce file size. Usually way better than what other tools do.

Table of contents:

<!-- toc -->
* [blim](#blim)
* [Usage](#usage)
* [Commands](#commands)
* [Contributing](#contributing)
* [[Change Log](CHANGELOG.md)](#change-logchangelogmd)
* [[License](LICENSE)](#licenselicense)
<!-- tocstop -->


# Usage
<!-- usage -->
```sh-session
$ npm install -g blim
$ blim COMMAND
running command...
$ blim (-v|--version|version)
blim/0.0.2 darwin-x64 node-v10.17.0
$ blim --help [COMMAND]
USAGE
  $ blim COMMAND
...
```
<!-- usagestop -->


# Commands
<!-- commands -->
* [`blim help [COMMAND]`](#blim-help-command)
* [`blim optimize [FILE]`](#blim-optimize-file)

## `blim help [COMMAND]`

display help for blim

```
USAGE
  $ blim help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.1.0/src/commands/help.ts)_

## `blim optimize [FILE]`

Optimize an image

```
USAGE
  $ blim optimize [FILE]

OPTIONS
  -f, --fit=cover|contain|fill|inside|outside
      How to fit the width and height

  -h, --height=height
      The target height to resize to

  -p, --position=top|right top|right|right bottom|bottom|left bottom|left|left 
  top|north|northeast|east|southeast|south|southwest|west|northwest|center|entropy|attention
      When using a fit of cover or contain, use this flag to adjust where to crop

  -w, --width=width
      The target width to resize to
```
<!-- commandsstop -->

# Contributing

Open a PR :-)


# [Change Log](CHANGELOG.md)

See all changes made to this project in the [change log](CHANGELOG.md). This project follows [semantic versioning](http://semver.org/).


# [License](LICENSE)

This project is licensed under the terms of the [MIT license](LICENSE).


---

Project created and maintained by [Fabian Keller](https://www.fabian-keller.de).
