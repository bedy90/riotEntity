import { describe, expect, test } from '@jest/globals';
import { Interfaces, Validators } from '../src/index';

// import '../scripts/logger';
// import { logType } from '../scripts/logger';

describe('Has a valid AccountDTO - Validate using validator', () => {

    test('Using JSON object is valid', () => {
        const jsonObject = {
            gameName: 'gameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
            tagLine: 'tag',
        };

        let result: any = Validators.AccountValidator.validate(jsonObject);

        expect(result).not.toBeNull();
        expect(result.success).toBe(true);

    });

    test('Using union type, is valid', () => {
        const intByUnionType: Interfaces.IAccountDTO = {
            gameName: 'gameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
            tagLine: 'tag',
        };

        let result: any = Validators.AccountValidator.validate(intByUnionType);

        expect(result).not.toBeNull();
        expect(result.success).toBe(true);
    });

    test('Using interface version, is valid', () => {
        const intBySpecificVersion: Interfaces.IAccountDTO_v1 = {
            gameName: 'gameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
            tagLine: 'tag',
        };

        let result: any = Validators.AccountValidator.validate(intBySpecificVersion);

        expect(result).not.toBeNull();
        expect(result.success).toBe(true);
    });

});

describe('Has a invalid AccountDTO - Validate using validator', () => {

    test('Using a another interface, invalid data', () => {
        const summoner: Interfaces.ISummonerDTO_v4 = {
            profileIconId: 1,
            revisionDate: 1n,
            summonerLevel: 55n,
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg'
        };

        let result = Validators.AccountValidator.validate(summoner);
        // console.dir(result?.error?.errors)
        // console.log(logType.TEST, `\n\n\n\t Error message : ${result.success ? '' : result.error.message}`);

        expect(result).not.toBeNull();
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull();
    });

    test('Using a another JSON Object struct, invalid data', () => {
        const jsonObject = {
            id: 'abc',
            summonerLevel: 55,
        };

        let result = Validators.AccountValidator.validate(jsonObject);

        expect(result).not.toBeNull();
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull();
    });

    test('Using a incomplete JSON Object, invalid data', () => {
        const jsonObject = {
            gameName: 'gameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg'
        };

        let result = Validators.AccountValidator.validate(jsonObject);

        expect(result).not.toBeNull();
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull();
        expect(result.error?.message).toContain('tagLine is required');
    });


    test('Using union type, invalid tagLine', () => {
        const shortTagLink: Interfaces.IAccountDTO = {
            gameName: 'gameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
            tagLine: 't',
        };

        let result = Validators.AccountValidator.validate(shortTagLink);

        expect(result).not.toBeNull();
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull();
        expect(result.error?.message).toContain('Must be 3 or more characters long');


        const tooLongTagLine: Interfaces.IAccountDTO = {
            gameName: 'gameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
            tagLine: 'tagggg',
        };

        result = Validators.AccountValidator.validate(tooLongTagLine);

        expect(result).toBeDefined();
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull();
        expect(result.error?.message).toContain('Must be 5 or fewer characters long')
    });

    test('Using union type, invalid gameName', () => {
        const shortGameName: Interfaces.IAccountDTO = {
            gameName: 'ga',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
            tagLine: 'tagL',
        };

        let result = Validators.AccountValidator.validate(shortGameName);

        expect(result).not.toBeNull();
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull();
        expect(result.error?.message).toContain('Must be 3 or more characters long');

        const tooLongGameName: Interfaces.IAccountDTO = {
            gameName: 'ThisIsAnInvalidGameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
            tagLine: 'tagggg',
        };

        result = Validators.AccountValidator.validate(tooLongGameName);

        expect(result).toBeDefined();
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull();
        expect(result.error?.message).toContain('Must be 16 or fewer characters long')
    });

    test('Using union type, invalid puuid', () => {
        const shortPuuid: Interfaces.IAccountDTO = {
            gameName: 'gameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc',
            tagLine: 'tagL',
        };

        let result = Validators.AccountValidator.validate(shortPuuid);

        expect(result).not.toBeNull();
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull();
        expect(result.error?.message).toContain('Must be 78 characters long');


        const tooLongPuid: Interfaces.IAccountDTO = {
            gameName: 'ThisIsAnInvalidGameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jgg',
            tagLine: 'tagggg',
        };

        result = Validators.AccountValidator.validate(tooLongPuid);

        expect(result).toBeDefined();
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull();
        expect(result.error?.message).toContain('Must be 16 or fewer characters long')
    });

});