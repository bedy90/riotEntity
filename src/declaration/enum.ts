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