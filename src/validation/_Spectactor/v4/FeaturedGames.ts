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