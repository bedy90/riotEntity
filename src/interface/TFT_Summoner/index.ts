// export * from './v4/ISummonerDTO';
import * as SummonerInterface from './v1/ISummonerDTO';

export namespace Summoner {
    export namespace v1 {
        export import ISummonerDTO = SummonerInterface.ISummonerDTO;
    }
}