// import { Validator, Interfaces, Entities } from '@/riotentity'; // Validator,
// import { IAccountDTO } from '@/src/interface';
// Validator.Account.v1.AccountChecker.isIAccountDTO
import { Validator, Interfaces, Entities } from './index'; // Validator,
import { IAccountDTO } from './interface';

const interfaceByInterface: Interfaces.IAccountDTO = {
    gameName: 'interface by short namespace',
    puuid: 'abc',
    tagLine: 'tag',
};

const interfaceByFolder: IAccountDTO = {
    gameName: 'interface by folder',
    puuid: 'abc',
    tagLine: 'tag',
};
const fullpathInterface: Interfaces.Account.v1.IAccountDTO = {
    gameName: 'interface by full namespace',
    puuid: 'abc',
    tagLine: 'tag',
};

const leagueSummonerInterface: Interfaces.Summoner.v4.ISummonerDTO = {
    accountId: '111a',
    id: 'avavaa',
    profileIconId: 1,
    summonerLevel: 1,
    puuid: 'abc',
    revisionDate: 111
};

const invalidObj = {
    gameName: 'interface by full namespace',
    puuid: 'abc',
    tagLine: 'tag',
    test: 'test',
};

const accEntity: Entities.Account.v1.AccountDTO = new Entities.Account.v1.AccountDTO();
accEntity.gameName = 'a';
accEntity.puuid = 'b';
accEntity.tagLine = 'c';

const accSummoner: Entities.Summoner.v4.SummonerDTO = new Entities.Summoner.v4.SummonerDTO();
accSummoner.accountId= '111a';
accSummoner.id= 'avavaa';
accSummoner.profileIconId= 1;
accSummoner.summonerLevel= 1;
accSummoner.puuid= 'abc';
accSummoner.revisionDate = 111;

console.log(`accEntity : ${JSON.stringify(accEntity)}`);
console.log(`accEntity has AccountDTO : ${Validator.Account.v1.isIAccountDTO(accEntity)}`);
console.log('');

console.log(`interfaceByInterface : ${JSON.stringify(interfaceByInterface)}`);
console.log(`interfaceByInterface has AccountDTO : ${Validator.Account.v1.isIAccountDTO(interfaceByInterface)}`);
console.log('');

console.log(`interfaceByFolder : ${JSON.stringify(interfaceByFolder)}`);
console.log(`interfaceByFolder has AccountDTO : ${Validator.Account.v1.isIAccountDTO(interfaceByFolder)}`);
console.log('');

console.log(`fullpathInterface : ${JSON.stringify(fullpathInterface)}`);
console.log(`fullpathInterface has AccountDTO : ${Validator.Account.v1.isIAccountDTO(fullpathInterface)}`);
console.log('');

console.log(`invalidObj : ${JSON.stringify(invalidObj)}`);
console.log(`invalidObj has AccountDTO : ${Validator.Account.v1.isIAccountDTO(invalidObj)}`);
console.log('');

console.log(`accSummoner : ${JSON.stringify(accSummoner)}`);
console.log(`accSummoner has SummonerDTO : ${Validator.Summoner.v4.isISummonerDTO(accSummoner)}`);
console.log('');

console.log(`leagueSummonerInterface : ${JSON.stringify(leagueSummonerInterface)}`);
console.log(`leagueSummonerInterface has SummonerDTO : ${Validator.Summoner.v4.isISummonerDTO(leagueSummonerInterface)}`);
console.log('');
// leagueSummonerInterface
