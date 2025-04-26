import { Interfaces } from '@/riotentity';

/**
 * Class InfoDTO_v5
 *
 * @namespace Match
 * @version v5
 * @name IInfoDTO
 */
export class InfoDTO_v5 implements Interfaces.IInfoDTO_v5 {
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
    participants!: Interfaces.IParticipantDTO_v5[];
    platformId!: string;
    queueId!: number;
    teams!: Interfaces.ITeamDTO_v5[];
    tournamentCode!: string;
}
