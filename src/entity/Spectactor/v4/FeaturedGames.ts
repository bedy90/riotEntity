import { Interfaces } from '@/riotentity';

export class FeaturedGames implements Interfaces.Spectactor.v4.IFeaturedGames {
    gameList!: Interfaces.Spectactor.v4.IFeaturedGameInfo[];
    clientRefreshInterval!: number;
}

export class FeaturedGameInfo implements Interfaces.Spectactor.v4.IFeaturedGameInfo {
    gameMode!: string;
    gameLength!: number;
    mapId!: number;
    gameType!: string;
    bannedChampions!: Interfaces.Spectactor.v4.IBannedChampion[];
    gameId!: number;
    observers!: Interfaces.Spectactor.v4.IObserver;
    gameQueueConfigId!: number;
    gameStartTime!: number;
    participants!: Interfaces.Spectactor.v4.IParticipant[];
    platformId!: string;
}

export class BannedChampion implements Interfaces.Spectactor.v4.IBannedChampion {
    pickTurn!: number;
    championId!: number;
    teamId!: number;
}

export class Observer implements Interfaces.Spectactor.v4.IObserver {
    encryptionKey!: string;
}

export class Participant implements Interfaces.Spectactor.v4.IParticipant {
    bot!: boolean;
    spell2Id!: number;
    profileIconId!: number;
    summonerName!: string;
    championId!: number;
    teamId!: number;
    spell1Id!: number;
}
