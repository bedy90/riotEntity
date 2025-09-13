import { describe, expect, test } from '@jest/globals';
import { Interfaces, Validators } from '../src/index';


// import '../scripts/logger';
// import { logType } from '../scripts/logger';

describe('Has a valid SummonerDTO - Validate using Validators', () => {

    test('Using JSON object is valid', () => {
        const jsonObject = {
            puuid: "pDxMtQ0DTUoaxSu3WUz9itOTZphTc-9b9uTIrQXsQGFXxhgjjIIhyfY9NEaoZZGdKD-qgYbMPK42jg",
            profileIconId: 1433,
            revisionDate: 1745890069000n,
            summonerLevel: 351n
        };

        let result: any = Validators.SummonerValidator.validate(jsonObject);

        if (!result.success) {
            console.log(result.error);
        }

        expect(result).not.toBeNull;
        expect(result.success).toBe(true);
    });

    test('Using union type, is valid', () => {
        const intByUnionType: Interfaces.ISummonerDTO = {
            puuid: "pDxMtQ0DTUoaxSu3WUz9itOTZphTc-9b9uTIrQXsQGFXxhgjjIIhyfY9NEaoZZGdKD-qgYbMPK42jg",
            profileIconId: 1433,
            revisionDate: 1745890069000n,
            summonerLevel: 351n
        };

        let result: any = Validators.SummonerValidator.validate(intByUnionType);

        expect(result).not.toBeNull;
        expect(result.success).toBe(true);
    });

    test('Using interface version, is valid', () => {
        const intBySpecificVersion: Interfaces.ISummonerDTO_v4 = {
            puuid: "pDxMtQ0DTUoaxSu3WUz9itOTZphTc-9b9uTIrQXsQGFXxhgjjIIhyfY9NEaoZZGdKD-qgYbMPK42jg",
            profileIconId: 1433,
            revisionDate: 1745890069000n,
            summonerLevel: 351n
        };

        let result: any = Validators.SummonerValidator.validate(intBySpecificVersion);

        expect(result).not.toBeNull;
        expect(result.success).toBe(true);
    });

});

describe('Has a invalid SummonerDTO - Validate using Validators', () => {

    test('Using a another JSON Object interface, invalid data', () => {
        const jsonObject = {
            gameName: 'gameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
            tagLine: 'tag',
        };

        let result = Validators.SummonerValidator.validate(jsonObject);

        expect(result).not.toBeNull;
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull;
    });

    test('Using a JSON Object interface, id is too long', () => {
        const jsonObject = {
            puuid: "pDxMtQ0DTUoaxSu3WUz9itOTZphTc-9b9uTIrQXsQGFXxhgjjIIhyfY9NEaoZZGdKD-qgYbMPK42jg",
            profileIconId: 1433,
            revisionDate: 1745890069000,
            summonerLevel: 351
        };

        let result = Validators.SummonerValidator.validate(jsonObject); 
        // console.dir(result?.error?.errors)
        // console.log(logType.TEST, `\n\n\n\t Error message : ${result.success ? '' : result.error.message}`);

        expect(result).not.toBeNull;
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull;
    });

    test('Using a JSON Object interface, accountId is too long', () => {
        const jsonObject = {
            puuid: "pDxMtQ0DTUoaxSu3WUz9itOTZphTc-9b9uTIrQXsQGFXxhgjjIIhyfY9NEaoZZGdKD-qgYbMPK42jg",
            profileIconId: 1433,
            revisionDate: 1745890069000,
            summonerLevel: 351
        };

        let result = Validators.SummonerValidator.validate(jsonObject);
        // console.dir(result?.error?.errors)
        // console.log(logType.TEST, `\n\n\n\t Error message : ${result.success ? '' : result.error.message}`);

        expect(result).not.toBeNull;
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull;
    });

    test('Using a JSON Object interface, puuid is invalid', () => {
        // Too short puuid
        const shortPuuid_jsonObject = {
            puuid: "pDxMtQ0DTUoaxSu3WUz9itOTZphTc-9b9uTIrQXsQGFXxhgjjIIhyfY9NEaoZZGdKD",
            profileIconId: 1433,
            revisionDate: 1745890069000,
            summonerLevel: 351
        };

        const tooLongPuuid_jsonObject = {
            puuid: "pDxMtQ0DTUoaxSu3WUz9itOTZphTc-9b9uTIrQXsQGFXxhgjjIIhyfY9NEaoZZGdKD-qgYbMPK42jg-qgYbMPK42jg",
            profileIconId: 1433,
            revisionDate: 1745890069000,
            summonerLevel: 351
        };

        let shortResult = Validators.SummonerValidator.validate(shortPuuid_jsonObject);
        // console.dir(shortResult?.error?.errors)
        // console.log(logType.TEST, `\n\n\n\t Error message : ${shortResult.success ? '' : shortResult.error.message}`);

        expect(shortResult).not.toBeNull;
        expect(shortResult.success).toBe(false);
        expect(shortResult.error).not.toBeNull;

        let longResult = Validators.SummonerValidator.validate(tooLongPuuid_jsonObject);

        expect(longResult).not.toBeNull;
        expect(longResult.success).toBe(false);
        expect(longResult.error).not.toBeNull;
    });

    test('Using a JSON Object with invalid schema, invalid data', () => {
        const jsonObject = {
            accountId: "3FSDP47jnDNDlbshophTrGYKvVnGK-TGHCtSVDuP3noLPV8",
            profileIconId: 1433,
            summonerLevel: 351
        };

        let result = Validators.SummonerValidator.validate(jsonObject);

        expect(result).not.toBeNull;
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull;
    });

    test('Using a incomplete JSON Object, invalid data', () => {
        const jsonObject = {
            gameName: 'gameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg'
        };

        let result = Validators.SummonerValidator.validate(jsonObject);

        expect(result).not.toBeNull;
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull;
    });

    test('Using union type, invalid puuid', () => {
        const tooLongPuuid: Interfaces.ISummonerDTO = {
            puuid: "pDxMtQ0DTUoaxSu3WUz9itOTZphTc-9b9uTIrQXsQGFXxhgjjIIhyfY9NEaoZZGdKD-qgYbMPK42jg-qgYbMPK42jg",
            profileIconId: 1433,
            revisionDate: 1745890069000n,
            summonerLevel: 351n
        };

        let result = Validators.SummonerValidator.validate(tooLongPuuid);

        expect(result).not.toBeNull;
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull;
        expect(result.error?.message).toContain('puuid : Must be 78 characters long');


        const emptyPuuid: Interfaces.ISummonerDTO = {
            puuid: "",
            profileIconId: 1433,
            revisionDate: 1745890069000n,
            summonerLevel: 351n
        };

        result = Validators.SummonerValidator.validate(emptyPuuid);

        expect(result).toBeDefined();
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull;
        expect(result.error?.message).toContain('puuid is required')
    });

});