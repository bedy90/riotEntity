// // --------------------------------------
// // Interface
// // --------------------------------------
// export interface IFeaturedGames {
//     /**
//      * The list of featured games
//      */
//     gameList: Array<IFeaturedGameInfo>;
//     /**
//      * 	The suggested interval to wait before requesting FeaturedGames again
//      */
//     clientRefreshInterval: number;
// }

// export interface IFeaturedGameInfo {
//     /**
//      * The game mode (Legal values: CLASSIC, ODIN, ARAM, TUTORIAL, ONEFORALL, ASCENSION, FIRSTBLOOD, KINGPORO)
//      */
//     gameMode: string;
//     /**
//      * The amount of time in seconds that has passed since the game started
//      */
//     gameLength: number;
//     /**
//      * The ID of the map
//      */
//     mapId: number;
//     /**
//      * The game type (Legal values: CUSTOM_GAME, MATCHED_GAME, TUTORIAL_GAME)
//      */
//     gameType: string;
//     /**
//      * Banned champion information
//      */
//     bannedChampions: Array<IBannedChampion>;
//     /**
//      * The ID of the game
//      */
//     gameId: number;
//     /**
//      * The observer information
//      */
//     observers: IObserver;
//     /**
//      * The queue type (queue types are documented on the Game Constants page)
//      */
//     gameQueueConfigId: number;
//     /**
//      * The game start time represented in epoch milliseconds
//      */
//     gameStartTime: number;
//     /**
//      * 	The participant information
//      */
//     participants: Array<IParticipant>;
//     /**
//      * The ID of the platform on which the game is being played
//      */
//     platformId: string;
// }

// export interface IBannedChampion {
//     /**
//      * 	The turn during which the champion was banned
//      */
//     pickTurn: number;
//     /**
//      * The ID of the banned champion
//      */
//     championId: number;
//     /**
//      * The ID of the team that banned the champion
//      */
//     teamId: number;
// }

// export interface IObserver {
//     /**
//      * Key used to decrypt the spectator grid game data for playback
//      */
//     encryptionKey: string;
// }

// export interface IParticipant {
//     /**
//      * Flag indicating whether or not this participant is a bot
//      */
//     bot: boolean;
//     /**
//      * The ID of the second summoner spell used by this participant
//      */
//     spell2Id: number;
//     /**
//      * The ID of the profile icon used by this participant
//      */
//     profileIconId: number;
//     /**
//      * The summoner name of this participant
//      */
//     summonerName: string;
//     /**
//      * The ID of the champion played by this participant
//      */
//     championId: number;
//     /**
//      * The team ID of this participant, indicating the participant's team
//      */
//     teamId: number;
//     /**
//      * The ID of the first summoner spell used by this participant
//      */
//     spell1Id: number;
// }

// // --------------------------------------
// // Class
// // --------------------------------------
// export class FeaturedGames implements IFeaturedGames {
//     gameList!: IFeaturedGameInfo[];
//     clientRefreshInterval!: number;
// }

// export class FeaturedGameInfo implements IFeaturedGameInfo {
//     gameMode!: string;
//     gameLength!: number;
//     mapId!: number;
//     gameType!: string;
//     bannedChampions!: IBannedChampion[];
//     gameId!: number;
//     observers!: IObserver;
//     gameQueueConfigId!: number;
//     gameStartTime!: number;
//     participants!: IParticipant[];
//     platformId!: string;
// }

// export class BannedChampion implements IBannedChampion {
//     pickTurn!: number;
//     championId!: number;
//     teamId!: number;
// }

// export class Observer implements IObserver {
//     encryptionKey!: string;
// }

// export class Participant implements IParticipant {
//     bot!: boolean;
//     spell2Id!: number;
//     profileIconId!: number;
//     summonerName!: string;
//     championId!: number;
//     teamId!: number;
//     spell1Id!: number;
// }

// // --------------------------------------
// // Checker
// // --------------------------------------
// export class SpectactorChecker {
//     static isFeaturedGames(obj: any): obj is IFeaturedGames {
//         return (obj.gameList && Array.isArray(obj.gameList) && obj.clientRefreshInterval !== undefined);
//     }

//     static isFeaturedGameInfo(obj: any): obj is IFeaturedGameInfo {
//         return (obj.gameMode !== undefined && typeof obj.gameMode === 'string' &&
//             obj.gameLength !== undefined && typeof obj.gameLength === 'number' &&
//             obj.mapId !== undefined && typeof obj.mapId === 'number' &&
//             obj.gameType !== undefined && typeof obj.gameType === 'string' &&
//             obj.bannedChampions && Array.isArray(obj.bannedChampions) &&
//             obj.gameId !== undefined && typeof obj.gameId === 'number' &&
//             obj.observers !== undefined && this.isObserver(obj.observers) &&
//             obj.gameQueueConfigId !== undefined && typeof obj.gameQueueConfigId === 'number' &&
//             obj.gameStartTime !== undefined && typeof obj.gameStartTime === 'number' &&
//             obj.participants && Array.isArray(obj.participants) &&
//             obj.platformId !== undefined && typeof obj.platformId === 'string');
//     }

//     static isBannedChampion(obj: any): obj is IBannedChampion {
//         return (
//             typeof obj.pickTurn === 'number' &&
//             typeof obj.championId === 'number' &&
//             typeof obj.teamId === 'number'
//         );
//     }

//     static isObserver(obj: any): obj is IObserver {
//         return typeof obj.encryptionKey === 'string';
//     }

//     static isParticipant(obj: any): obj is IParticipant {
//         return (
//             typeof obj.bot === 'boolean' &&
//             typeof obj.spell2Id === 'number' &&
//             typeof obj.profileIconId === 'number' &&
//             typeof obj.summonerName === 'string' &&
//             typeof obj.championId === 'number' &&
//             typeof obj.teamId === 'number' &&
//             typeof obj.spell1Id === 'number'
//         );
//     }
// }


// /*
// est-ce que tu peux me générer une classe « Checker » qui vérifie si un paramètre est une instance des interface suivante

// ou

// Je voudrais une classe de « Checker » en typescript comprenant des fonctions qui valident si la variable passé en paramètre est d'une instance des interfaces suivantes.
// Les fonction du checker doivent être valide compatible avec du JS une fois compiler.
// */