import { Interfaces } from '@/index';

export class CurrentGameInfo implements Interfaces.Spectactor.v4.ICurrentGameInfo {
    gameId!: number;
    gameType!: string;
    gameStartTime!: number;
    mapId!: number;
    gameLength!: number;
    platformId!: string;
    gameMode!: string;
    bannedChampions!: Interfaces.Spectactor.v4.IBannedChampion[];
    gameQueueConfigId!: number;
    observers!: Interfaces.Spectactor.v4.IObserver;
    participants!: Interfaces.Spectactor.v4.ICurrentGameParticipant[];

}

export class CurrentGameParticipant implements Interfaces.Spectactor.v4.ICurrentGameParticipant {
    championId!: number;
    perks!: Interfaces.Spectactor.v4.IPerks;
    profileIconId!: number;
    bot!: boolean;
    teamId!: number;
    summonerName!: string;
    summonerId!: string;
    spell1Id!: number;
    spell2Id!: number;
    gameCustomizationObjects!: Interfaces.Spectactor.v4.IGameCustomizationObject[];

}

export class Perks implements Interfaces.Spectactor.v4.IPerks {
    perkIds!: number[];
    perkStyle!: number;
    perkSubStyle!: number;
}

export class GameCustomizationObject implements Interfaces.Spectactor.v4.IGameCustomizationObject {
    category!: string;
    content!: string;

}
