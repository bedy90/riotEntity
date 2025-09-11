# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

where:

* `YEAR` = `MAJOR` : represents the major version, incremented every year
* `MONTH` = `MINOR` : represents the minor version, incremented every month
* `PATCH` : represents the patch version, incremented for each bug fix or minor change

This approach allows us to track changes and updates to the project over time.

<details>
  <summary><strong>Guiding Principles</strong></summary>
- Changelogs are for humans, not machines.
- There should be an entry for every single version.
- The same types of changes should be grouped.
- Versions and sections should be linkable.
- The latest version comes first.
- The release date of each versions is displayed.
- Mention whether you follow Semantic Versioning.

</details>

<details>
  <summary><strong>Types of changes</strong></summary>
Changelog entries are classified using the following labels _(from [keep-a-changelog](http://keepachangelog.com/)_):

- `Added` for new features.
- `Changed` for changes in existing functionality.
- `Deprecated` for soon-to-be removed features.
- `Removed` for now removed features.
- `Fixed` for any bug fixes.
- `Security` in case of vulnerabilities.

</details>

<details>
  <summary><strong>Unreleased</strong></summary>

  ### Upcoming
  - Zod schema
  - Zod validator
  - Missing interface
</details>

## [2025.1.3] - 2025-09-11
<details>
  <summary>Version 2025.1.3</summary>

### Added
- GitHub composite action
- Audit template / script process

### Changed
- Explanation of how `Semantic Versioning` works in YYYY.MM.patch

### Fixed
- Automatic publishing on release
- Manual publishing of alpha package

</details>

## [2025.1.2] - 2025-09-01
<details>
  <summary>Version 2025.1.2</summary>

### Added
 - Jest test
 - Add Schema and validator for Summoner, League, Account, Champion and ChampionMastery

### Changed
- Revision of interface structures on September 9

### Fixed
 - PROD adjustment for Github deployment action.

 ### Removed

</details>

## [2025.1.1] - 2025-04-21
<details>
  <summary>Version 2025.1.1</summary>

### Added
- Prepare zod system for schema and validator

### Changed
- Update dependencies
- Revision of interface structures on May 25
- Eslint config file

### Fixed
 - Adjustment in the Github deployment action.
 - Transform project in Node modules ESM

</details>

## [2024.6.1] - 2024-06-15
<details>
  <summary>Version 2024.6.1</summary>

### Added

- JDOC header added to interfaces
- Global interface added for interface inheritance
- Index generator by namespace/version added for interfaces.
- Added a namespace/version-based entity class generator based on the interface structure.
- Added a namespace/version index generator for entity classes.

### Changed
- Revision of interface structures on May 25

### Fixed
- Adjustment in the Github deployment action.
</details>

## [2024.5.2] - 2024-05-20
<details>
  <summary>Version 2024.5.2 alpha</summary>

### Added
- Fix Interface name, Class name, Validation Name

### Changed
 - Package compilation for remove « build » folder on tarball archives

### Fixed
- ESLINT added to clean up code
</details>


## [2024.2.1] - 2024-02-11
<details>
  <summary>Version 2024.2.1 alpha</summary>

### Added
- Implementation of a namespace system
- Separation of files into 3 distinct groupings (Interface, Entities, Validator)

### Fixed
- ESLINT added to clean up code

## [2024.1.1] - 2024-01-21
- Project starting, first commit
- All league of legend dans Teamfight Tactics DTO.
  
**Breaking Changes**
- Add interface for AccountDTO, SummonerDTO and LeagueEntryDTO

**Non-breaking changes**

</details>