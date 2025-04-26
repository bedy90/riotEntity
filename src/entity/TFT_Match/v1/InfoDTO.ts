import { Interfaces } from '@/riotentity';

/**
 * Class InfoDTO_v1
 *
 * @namespace TFT_Match
 * @version v1
 * @name IInfoDTO
 */
export class InfoDTO_v1 implements Interfaces.TFT_IInfoDTO_v1 {
    game_datetime!: number;
    game_length!: number;
    game_variation!: string;
    game_version!: string;
    participants!: Interfaces.TFT_IParticipantDTO_v1[];
    queueId!: number;
    tft_set_number!: number;
}
