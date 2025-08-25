import { Interfaces, Validators } from './index';

// L'import via ALIAS ne fonctionne pas, car le fichier est « Exclude » dans tsconfig.json
// import { Interfaces, Validators } from '@/riotentity';

import '../scripts/logger';
import { logType } from '../scripts/logger';

const interfaceByInterface: Interfaces.IAccountDTO = {
    gameName: 'gameName',
    puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
    tagLine: 'tag',
};

const interfaceByVersion: Interfaces.IAccountDTO_v1 = {
    gameName: 'gameName',
    puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
    tagLine: 'ver1',
};

// const fullpathInterface: Interfaces.IAccountDTO_v1 = {
//     gameName: 'interface by full namespace',
//     puuid: 'abc',
//     tagLine: 'tag',
// };

// const leagueSummonerInterface: Interfaces.ISummonerDTO_v4 = {
//     accountId: '111a',
//     id: 'avavaa',
//     profileIconId: 1,
//     summonerLevel: 1,
//     puuid: 'abc',
//     revisionDate: 111,
// };

// const invalidObj = {
//     gameName: 'interface by full namespace',
//     puuid: 'abc',
//     tagLine: 'tag',
//     test: 'test',
// };

// // const accEntity: Entities.Account.v1.AccountDTO = new Entities.Account.v1.AccountDTO();
// // accEntity.gameName = 'a';
// // accEntity.puuid = 'b';
// // accEntity.tagLine = 'c';

// // const accSummoner: Entities.ISummonerDTO_v4 = new Entities.Summoner.v4.SummonerDTO();
// // accSummoner.accountId = '111a';
// // accSummoner.id = 'avavaa';
// // accSummoner.profileIconId = 1;
// // accSummoner.summonerLevel = 1;
// // accSummoner.puuid = 'abc';
// // accSummoner.revisionDate = 111;

// // console.log(`accEntity : ${JSON.stringify(accEntity)}`);
// // console.log(`accEntity has AccountDTO : ${Validator.Account.v1.isIAccountDTO(accEntity)}`);
// // console.log('');

console.log(`interfaceByInterface : ${JSON.stringify(interfaceByInterface)}`);
let result = Validators.AccountValidator.validate(interfaceByInterface);
console.log(logType.TEST, `interfaceByInterface has AccountDTO : ${result.success ? result.success : (result.success + ' => ' + result.error)}`);
console.log('');

console.log(`interfaceByVersion : ${JSON.stringify(interfaceByVersion)}`);
result = Validators.AccountValidator.validate(interfaceByVersion);
console.log(logType.TEST, `interfaceByFolder has AccountDTO : ${result.success ? result.success : (result.success + ' => ' + result.error)}`);
console.log('');

// console.log(`fullpathInterface : ${JSON.stringify(fullpathInterface)}`);
// console.log(`fullpathInterface has AccountDTO : ${Validator.Account.v1.isIAccountDTO(fullpathInterface)}`);
// console.log('');

// console.log(`invalidObj : ${JSON.stringify(invalidObj)}`);
// console.log(`invalidObj has AccountDTO : ${Validator.Account.v1.isIAccountDTO(invalidObj)}`);
// console.log('');

// console.log(`accSummoner : ${JSON.stringify(accSummoner)}`);
// console.log(`accSummoner has SummonerDTO : ${Validator.Summoner.v4.isISummonerDTO(accSummoner)}`);
// console.log('');

// console.log(`leagueSummonerInterface : ${JSON.stringify(leagueSummonerInterface)}`);
// console.log(`leagueSummonerInterface has SummonerDTO : ${Validator.Summoner.v4.isISummonerDTO(leagueSummonerInterface)}`);
// console.log('');
// // leagueSummonerInterface
