/* eslint-disable max-len */
/* eslint-disable no-shadow */

export enum State {
    /**
     * DISABLED - not visible and not calculated
     */
    DISABLED = 0,
    /**
     *  HIDDEN - not visible, but calculated,
     */
    HIDDEN = 1,
    /**
     * ENABLED - visible and calculated,
     */
    ENABLED = 2,
    /**
     * ARCHIVED - visible, but not calculated
     */
    ARCHIVED = 3
}

export enum Tracking {
    /**
     * LIFETIME - stats are incremented without reset
     */
    LIFETIME = 0,
    /**
     * SEASON - stats are accumulated by season and reset at the beginning of new season
     */
    SEASON = 1
}

export enum KaynChampionTransform {
    None = 0,
    Slayer = 1,
    Assassin = 2
}

export enum ClashPosition {
    UNSELECTED = "UNSELECTED",
    AUTO_FILL = "FILL",
    TOP = "TOP",
    JUNGLE = "JUNGLE",
    MIDDLE = "MIDDLE",
    BOTTOM = "BOTTOM",
    SUPPORT = "UTILITY"
}

export enum ClashRole {
    CAPTAIN = "CAPTAIN",
    MEMBER = "MEMBER"
}

//  0 NONE, 1 IRON, 2 BRONZE, 3 SILVER, 4 GOLD, 5 PLATINUM, 6 DIAMOND, 7 MASTER, 8 GRANDMASTER, 9 CHALLENGER
export enum Level {
    NONE = 0,
    IRON = 1,
    BRONZE = 2,
    SILVER = 3,
    GOLD = 4,
    PLATINUM = 5,
    DIAMOND = 6,
    MASTER = 7,
    GRANDMASTER = 8,
    CHALLENGER = 9
}

export enum MaintenanceStatus {
    SCHEDULED = "scheduled",
    IN_PROGRESS = "in_progress",
    COMPLETE = "complete"
}

export enum IncidentSeverity {
    INFO = "info",
    WARNING = "warning", 
    CRITICAL = "critical"
}

export enum Platforms {
    WINDOWS = "windows", 
    MACOS = "macos", 
    ANDROID = "android", 
    IOS = "ios", 
    PS4 = "ps4", 
    XBOX_ONE = "xbone", 
    SWITCH= "switch"
}

export enum PublishLocations {
    RIOT_CLIENT = "riotclient", 
    RIOT_STATUS = "riotstatus", 
    GAME = "game"
}

export enum GameMode {
    CLASSIC = "CLASSIC", 
    ODIN = "ODIN", 
    ARAM ="ARAM", 
    TUTORIAL = "TUTORIAL", 
    ONEFORALL ="ONEFORALL", 
    ASCENSION="ASCENSION", 
    FIRSTBLOOD="FIRSTBLOOD", 
    KINGPORO ="KINGPORO"
}

export enum GameType {
    CUSTOM_GAME = "CUSTOM_GAME", 
    MATCHED_GAME = "MATCHED_GAME", 
    TUTORIAL_GAME = "TUTORIAL_GAME"
}

export enum TraitStyle {
    NO_STYLE = 0,
    BRONZE = 1,
    SILVER = 2,
    GOLD = 3,
    CHROMATIC = 4
}