import { Interfaces } from '@/riotentity';

/**
 * Class InfoDTO
 *
 * @namespace TFT_Match
 * @version v1
 * @name IInfoDTO
 */
export class InfoDTO implements Interfaces.TFT_Match.v1.IInfoDTO {
    game_datetime!: number;
    game_length!: number;
    game_variation!: string;
    game_version!: string;
    participants!: Interfaces.TFT_Match.v1.IParticipantDTO[];
    queueId!: number;
    tft_set_number!: number;
}
