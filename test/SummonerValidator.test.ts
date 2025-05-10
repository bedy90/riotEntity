import { describe, expect, test } from '@jest/globals';
import { Interfaces, Validators } from '../src/index';


import '../scripts/logger';
import { logType } from '../scripts/logger';

describe('Has a valid SummonerDTO - Validate using Validators', () => {

    test('Using JSON object is valid', () => {
        const jsonObject = {
            id: "ugo6n4jo5MC4lq28xdh7m4TFNvq3kspmoG2CdNir9eZi8oA",
            accountId: "3FSDP47jnDNDlbshophTrGYKvVnGK-TGHCtSVDuP3noLPV8",
            puuid: "pDxMtQ0DTUoaxSu3WUz9itOTZphTc-9b9uTIrQXsQGFXxhgjjIIhyfY9NEaoZZGdKD-qgYbMPK42jg",
            profileIconId: 1433,
            revisionDate: 1745890069000,
            summonerLevel: 351
        };

        let result: any = Validators.SummonerValidator.validate(jsonObject);
        
        expect(result).not.toBeNull;
        expect(result.success).toBe(true);

    });

    test('Using union type, is valid', () => {
        const intByUnionType: Interfaces.ISummonerDTO = {
            id: "ugo6n4jo5MC4lq28xdh7m4TFNvq3kspmoG2CdNir9eZi8oA",
            accountId: "3FSDP47jnDNDlbshophTrGYKvVnGK-TGHCtSVDuP3noLPV8",
            puuid: "pDxMtQ0DTUoaxSu3WUz9itOTZphTc-9b9uTIrQXsQGFXxhgjjIIhyfY9NEaoZZGdKD-qgYbMPK42jg",
            profileIconId: 1433,
            revisionDate: 1745890069000,
            summonerLevel: 351
        };

        let result: any = Validators.SummonerValidator.validate(intByUnionType);

        expect(result).not.toBeNull;
        expect(result.success).toBe(true);
    });

    test('Using interface version, is valid', () => {
        const intBySpecificVersion: Interfaces.ISummonerDTO_v4 = {
            id: "ugo6n4jo5MC4lq28xdh7m4TFNvq3kspmoG2CdNir9eZi8oA",
            accountId: "3FSDP47jnDNDlbshophTrGYKvVnGK-TGHCtSVDuP3noLPV8",
            puuid: "pDxMtQ0DTUoaxSu3WUz9itOTZphTc-9b9uTIrQXsQGFXxhgjjIIhyfY9NEaoZZGdKD-qgYbMPK42jg",
            profileIconId: 1433,
            revisionDate: 1745890069000,
            summonerLevel: 351
        };

        let result: any = Validators.SummonerValidator.validate(intBySpecificVersion);

        expect(result).not.toBeNull;
        expect(result.success).toBe(true);
    });

});

// describe('Has a invalid SummonerDTO - Validate using Validators', () => {

//     test('Using a another interface, invalid data', () => {
//         const summoner: Interfaces.ISummonerDTO_v4 = {
//             accountId: 'abcde',
//             profileIconId: 1,
//             revisionDate: 1,
//             id: 'abc',
//             summonerLevel: 55,
//             puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg'
//         };

//         let result = Validators.AccountValidators.validate(summoner);
//         // console.dir(result?.error?.errors)
//         // console.log(logType.TEST, `\n\n\n\t Error message : ${result.success ? '' : result.error.message}`);

//         expect(result).not.toBeNull;
//         expect(result.success).toBe(false);
//         expect(result.error).not.toBeNull;
//     });

//     test('Using a another JSON Object struct, invalid data', () => {
//         const jsonObject = {
//             id: 'abc',
//             summonerLevel: 55,
//         };

//         let result = Validators.AccountValidators.validate(jsonObject);

//         expect(result).not.toBeNull;
//         expect(result.success).toBe(false);
//         expect(result.error).not.toBeNull;
//     });

//     test('Using a incomplete JSON Object, invalid data', () => {
//         const jsonObject = {
//             gameName: 'gameName',
//             puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg'
//         };

//         let result = Validators.AccountValidators.validate(jsonObject);

//         expect(result).not.toBeNull;
//         expect(result.success).toBe(false);
//         expect(result.error).not.toBeNull;
//     });


//     test('Using union type, invalid tagLine', () => {
//         const shortTagLink: Interfaces.IAccountDTO = {
//             gameName: 'gameName',
//             puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
//             tagLine: 't',
//         };

//         let result = Validators.AccountValidators.validate(shortTagLink);

//         expect(result).not.toBeNull;
//         expect(result.success).toBe(false);
//         expect(result.error).not.toBeNull;
//         expect(result.error?.message).toContain('Must be 3 or more characters long');


//         const tooLongTagLine: Interfaces.IAccountDTO = {
//             gameName: 'gameName',
//             puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
//             tagLine: 'tagggg',
//         };

//         result = Validators.AccountValidators.validate(tooLongTagLine);

//         expect(result).toBeDefined();
//         expect(result.success).toBe(false);
//         expect(result.error).not.toBeNull;
//         expect(result.error?.message).toContain('Must be 5 or fewer characters long')
//     });

//     test('Using union type, invalid gameName', () => {
//         const shortGameName: Interfaces.IAccountDTO = {
//             gameName: 'ga',
//             puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
//             tagLine: 'tagL',
//         };

//         let result = Validators.AccountValidators.validate(shortGameName);

//         expect(result).not.toBeNull;
//         expect(result.success).toBe(false);
//         expect(result.error).not.toBeNull;
//         expect(result.error?.message).toContain('Must be 3 or more characters long');

//         const tooLongGameName: Interfaces.IAccountDTO = {
//             gameName: 'ThisIsAnInvalidGameName',
//             puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
//             tagLine: 'tagggg',
//         };

//         result = Validators.AccountValidators.validate(tooLongGameName);

//         expect(result).toBeDefined();
//         expect(result.success).toBe(false);
//         expect(result.error).not.toBeNull;
//         expect(result.error?.message).toContain('Must be 16 or fewer characters long')
//     });

//     test('Using union type, invalid puuid', () => {
//         const shortPuuid: Interfaces.IAccountDTO = {
//             gameName: 'gameName',
//             puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc',
//             tagLine: 'tagL',
//         };

//         let result = Validators.AccountValidators.validate(shortPuuid);

//         expect(result).not.toBeNull;
//         expect(result.success).toBe(false);
//         expect(result.error).not.toBeNull;
//         expect(result.error?.message).toContain('Must be 78 characters long');


//         const tooLongPuid: Interfaces.IAccountDTO = {
//             gameName: 'ThisIsAnInvalidGameName',
//             puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jgg',
//             tagLine: 'tagggg',
//         };

//         result = Validators.AccountValidators.validate(tooLongPuid);

//         expect(result).toBeDefined();
//         expect(result.success).toBe(false);
//         expect(result.error).not.toBeNull;
//         expect(result.error?.message).toContain('Must be 16 or fewer characters long')
//     });

// });