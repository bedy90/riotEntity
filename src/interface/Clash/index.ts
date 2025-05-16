import { IPlayerDTO_v1 as IClash_PlayerDTO_v1 } from './v1/IPlayerDTO';
import { ITeamDTO_v1 as IClash_TeamDTO_v1 } from './v1/ITeamDTO';
import { ITournamentDTO_v1 as IClash_TournamentDTO_v1 } from './v1/ITournamentDTO';
import { ITournamentPhaseDTO_v1 as IClash_TournamentPhaseDTO_v1 } from './v1/ITournamentPhaseDTO';

export type {
	IClash_PlayerDTO_v1, IClash_TeamDTO_v1, IClash_TournamentDTO_v1,
	IClash_TournamentPhaseDTO_v1,
};

export type IClash_PlayerDTO = IClash_PlayerDTO_v1;
export type IClash_TeamDTO = IClash_TeamDTO_v1;
export type IClash_TournamentDTO = IClash_TournamentDTO_v1;
export type IClash_TournamentPhaseDTO = IClash_TournamentPhaseDTO_v1;