# Simple Quake 3 Server

## Pre-requisites

Before using this repository, you are supposed to own an official copy of Quake 3 Arena.

## Overview

The purpose of this repository is to provide a plug'n play Quake 3 server including the following features:

- A Quake 3 dedicated server
- Custom maps
- Custom maps auto-download
- A Web UI to manage the Quake 3 server
- An authentication to access the Web UI

This server is wrapped into a Docker image using Alpine.

## Usage

### Basic usage

To start the server in order to play on a local network or online, you have to define the server IP or host with the `FRONTEND_URL` variable:

```shell script
docker run \
  -it \
  --name q3server \
  -p 27960:27960/udp \
  -p 80:8080 \
  -e FRONTEND_URL=http://192.168.1.20 \
  tractr/simple-quake-3-server
```

If you are running this server in order to be online (i.e. `FRONTEND_URL=http://quake.example.com`), make sure that ports `UDP 27960` and `TCP 80` are forwarded to the machine.

By default `FRONTEND_URL=http://localhost`

#### Web UI & Maps downloading

The web interface is accessible with the URL provided in `FRONTEND_URL`.
The same URL is used to expose `pk3` files (map files). This will be used by the Quake 3 game in order to automatically download custom maps.

### Full configuration example

This command uses all available configuration.

```shell script
docker run \
  -it \
  --name q3server \
  -p 27960:27960/udp \
  -p 80:8080 \
  -e FRONTEND_URL=http://quake.example.com \
  -e API_AUTH_USER=quaker \
  -e API_AUTH_PASSWORD=q3passwd \
  -e PASSWORD=mypassword \
  -e RCON_PASSWORD=custompwd \
  -e SERVER_NAME=Quakr \
  -e SERVER_MOTD="Welcome to a Simple Quake 3 Server" \
  -e BOT_SKILLS=3 \
  -e MIN_PLAYERS=3 \
  -e MAX_CLIENTS=24 \
  -e TIME_LIMIT=10 \
  -e FRAG_LIMIT=20 \
  -e CAPTURE_LIMIT=8 \
  -e MAPS_LIST="overkill,13place,q3dm17,pro-q3tourney2,13tomb,pro-q3dm6,pro-q3dm13,eadm6" \
  -e SLACK_TOKEN=XXXXXXXXXXXXXX \
  -e SLACK_CHANNEL=ABCDEABCDC \
  -e DISCORD_TOKEN=XXXXXXXXXXXXXX \
  -e DISCORD_WEBHOOK=ABCDEABCDC \
  tractr/simple-quake-3-server
```

#### Protect Web UI with basic auth

You can define an user and a password to access the Web UI using variables `API_AUTH_USER` and `API_AUTH_PASSWORD`:

#### Game password

If you want to restrict access to the game server, you can use `PASSWORD` variable.

In Quake III, before you can connect to the server, you'll have to pull the console down and type: `/password "mypassword"`

#### RCON server password

When you start the server, a random password is generated for the RCON server.
This password is used by the backend (behind the Web UI) to interact with the RCON server.
If you want to choose this password, use the variable `RCON_PASSWORD`:

This allows you to open the console during the game and interact with the server.
For more information about RCON server:

- https://www.quakearea.com/site/index.php/all-articles/15-tips-and-tricks/59-quake-server-commands
- http://www.joz3d.net/html/q3console.html
- http://manual.freeshell.org/lokigames/quake3arena-Help/DedicatedServer.html

#### Edit maps list

The variable `MAPS_LIST` let you choose the automatic maps sequence that the server will run on startup.
This is a list of comma separated maps id.
Refer to this file: `maps/get-maps.js` to get the available maps.

#### Get notifications on Slack

First, you have to create a bot on Slack: https://api.slack.com/bot-users
Then, use variables `SLACK_TOKEN` and  `SLACK_CHANNEL` to setup Slack.

Don't forget to invite the bot on the channel.

#### Get notifications on Discord

First, you have to create a webhook on Discord: https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks
Extract the webhook's id and token from URL: `https://discord.com/api/webhooks/{ID}/{TOKEN}`
Then, use variables `DISCORD_WEBHOOK` and `DISCORD_TOKEN` to setup Discord.

You must use a text channel.

#### Other environment variables

##### Quake 3 server's name

`SERVER_NAME`: Default `Quakr`.

##### Quake 3 server's welcome message

`SERVER_MOTD`: Default `Welcome to a Simple Quake 3 Server`.

##### Bot skills

`BOT_SKILLS`: `1` to `5`. Default `3`.

##### Min players (filled with bots)

`MIN_PLAYERS`: Default `3`.

##### Max connected clients

`MAX_CLIENTS`: Default `24`.

##### Match time limit

`TIME_LIMIT`: Default `10`.

##### Match frag limit

`FRAG_LIMIT`: Default `20`.

##### Match capture limit (Capture the flag mode)

`CAPTURE_LIMIT`: Default `8`.

## Play the game

This section helps you to install and configure Quake 3 on your machine.

### Installation

#### macOS

Run this command: `curl -L https://git.io/ioq3mac | sh`.

Based on https://github.com/diegoulloao/ioquake3-mac-install

#### Linux

Coming soon...

#### Windows

Coming soon...

### Configuration

Once you have installed the game, you need to enable automatic download.
Go to **Setup** -> **Game Options** -> **Automatic Download** (yes).

### Play

To start a game, go to **Multiplayer**, click on **Specify**, enter the domain or IP of your machine (e.g. `quake.example.com` or `192.168.1.20`) and click **Fight**.

Enjoy!

## Credits

This repository is based on the following repositories:

- https://github.com/jberrenberg/docker-quake3
- https://github.com/kalik1/q3-server-docker-webUI-angular
- https://github.com/kalik1/q3-server-docker-rest-api
- https://github.com/kalik1/q3-server-docker-webUI
