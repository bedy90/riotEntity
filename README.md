# Bedy90 - Riot entity
![GitHub package.json version (subfolder of monorepo)](https://img.shields.io/github/package-json/v/bedy90/riotEntity)

A simple library for obtaining entities related to the use of Riot's League of Legend API. 

![GitHub last commit (branch)](https://img.shields.io/github/last-commit/bedy90/riotEntity/dev)
![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/bedy90/riotEntity?label=Last%20Release)

# Table of Contents
- [Bedy90 - Riot entity](#bedy90---riot-entity)
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Installation](#installation)
- [Login to Github registry package](#login-to-github-registry-package)
- [How to use](#how-to-use)
  - [Exemple Javascript](#exemple-javascript)
  - [Exemple Typescript](#exemple-typescript)
- [League of Legends API](#league-of-legends-api)
  - [API Versions](#api-versions)
- [Authors](#authors)

# Features
- Riot Developper API - Entity
- Entity Checker

# Installation
This is a **Node.js** module available through the npm registry.

Before installing, download and install **Node.js**. 
Node.js 18.0 or higher is required.

If this is a brand new project, make sure to create a package.json first with the `npm init` command.

# Login to Github registry package
Require PAT *(Personal access token)* for publish and using the package

1. Create `.npmrc` and add link with github registry
```
@Bedy90:registry=https://npm.pkg.github.com/:_authToken={YOUR PAT}
```

2. Log on the registry
```bash
npm login --scope=@bedy90 --registry=https://npm.pkg.github.com
```
The username is main account username and the password is the PAT.

3. Install the package
Installation is done using the **npm install** command:
```bash
npm install @bedy90/riotEntity
```

# How to use

1. Install the module
2. Use exemple for using it
   
## Exemple Javascript

Import the module and try it
```js
const RiotEntity = require('@bedy90/riotentity');

// AccountChecker
const myObj = {
  puuid: "test",
  gameName: "test",
  tagLine: "#TEST"
}

RiotEntity.AccountChecker.isAccountDTO(myObj) // Return true

// SummonerChecker
const myObj2 = {
  accountId: "test",
  profileIconId: 1,
  revisionDate: 1,
  name: "test",
  id: "test",
  puuid: "test",
  summonerLevel: 10
}

RiotEntity.SummonerChecker.isSummonerDTO(myObj2) // Return true
```

## Exemple Typescript

Import the module and try it
```ts
import { IAccountDTO, AccountChecker, ISummonerDTO, SummonerChecker } from '@bedy90/riotentity';

// Create IAccount DTO
let myObj: IAccountDTO = {
    gameName : "test",
    puuid: "test",
    tagLine: "#NA"
}

// AccountChecker
let isAccount: boolean = false;
isAccount = AccountChecker.isAccountDTO(myObj);

// Create ISummonerDTO DTO
let myObj2: ISummonerDTO = {
    accountId: "test",
    profileIconId: 1,
    revisionDate: 1,
    name: "test",
    id: "test",
    puuid: "test",
    summonerLevel: 10
}

// AccountChecker
let isSummoner: boolean = false;
isSummoner = SummonerChecker.isSummonerDTO(myObj2);

```

# League of Legends API
For more information about Riot's Developer API, please consult the official API access. : [link](https://developer.riotgames.com/apis)

## API Versions
| Route | Status |
|--|--|
| Account | ![Static Badge](https://img.shields.io/badge/implemented-v1-blue?style=for-the-badge&label=implemented&labelColor=grey) |
| Champion | ![Static Badge](https://img.shields.io/badge/implemented-v3-blue?style=for-the-badge&label=implemented&labelColor=grey) |
| Champion-Mastery | ![Static Badge](https://img.shields.io/badge/implemented-v4-blue?style=for-the-badge&label=implemented&labelColor=grey) |
| League | ![Static Badge](https://img.shields.io/badge/implemented-v4-blue?style=for-the-badge&label=implemented&labelColor=grey) |
| Summoner | ![Static Badge](https://img.shields.io/badge/implemented-v4-blue?style=for-the-badge&label=implemented&labelColor=grey) |
| TFTLeague* | ![Static Badge](https://img.shields.io/badge/implemented-v1-blue?style=for-the-badge&label=implemented&labelColor=grey) |
| TFTSummoner* | ![Static Badge](https://img.shields.io/badge/implemented-v1-blue?style=for-the-badge&label=implemented&labelColor=grey) |

> *The TFT entity used for summoner and league information is the same as that used for League of Legend.


# Authors

- [@MBelangerB](https://www.github.com/MBelangerB)
- [@Bedy90](https://www.github.com/Bedy90)

