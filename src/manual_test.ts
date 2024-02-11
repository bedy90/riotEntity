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

const interfaceByFolder : IAccountDTO = {
    gameName: 'interface by folder',
    puuid: 'abc',
    tagLine: 'tag',
};
const fullpathInterface : Interfaces.Account.v1.IAccountDTO = {
    gameName: 'interface by full namespace',
    puuid: 'abc',
    tagLine: 'tag',
};

const invalidObj = {
    gameName: 'interface by full namespace',
    puuid: 'abc',
    tagLine: 'tag',
    test: 'test',
};

const accEntity : Entities.Account.v1.AccountDTO = new Entities.Account.v1.AccountDTO();
accEntity.gameName = 'a';
accEntity.puuid = 'b';
accEntity.tagLine = 'c';


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