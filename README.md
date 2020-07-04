# blim

Blazing fast image optimization for blog post images.

<!-- toc -->
* [blim](#blim)
* [Usage](#usage)
* [Commands](#commands)
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
