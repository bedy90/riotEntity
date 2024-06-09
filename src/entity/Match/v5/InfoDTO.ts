import { Interfaces } from '@/riotentity';

/**
 * Class InfoDTO
 *
 * @namespace Match
 * @version v5
 * @name IInfoDTO
 */
export class InfoDTO implements Interfaces.Match.v5.IInfoDTO {
    gameCreation!: number;
    gameDuration!: number;
    gameEndTimestamp!: number;
    gameId!: number;
    gameMode!: string;
    gameName!: string;
    gameStartTimestamp!: number;
    gameType!: string;
    gameVersion!: string;
    mapId!: number;
    participants!: Interfaces.Match.v5.IParticipantDTO[];
    platformId!: string;
    queueId!: number;
    teams!: Interfaces.Match.v5.ITeamDTO[];
    tournamentCode!: string;
}
