import { describe, expect, test } from '@jest/globals';
import { Interfaces, Validator } from '../src/index';

import '../scripts/logger';
import { logType } from '../scripts/logger';

// const intByUnionType: Interfaces.IAccountDTO = {
//     gameName: 'gameName',
//     puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
//     tagLine: 'tag',
// };

// const intBySpecificVersion: Interfaces.IAccountDTO_v1 = {
//     gameName: 'gameName',
//     puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
//     tagLine: 'ver1',
// };


describe('Account validator', () => {
    test('Using JSON object is valid', () => {
        const jsonObject = {
            gameName: 'gameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
            tagLine: 'tag',
        };

        let result : any = Validator.AccountValidator.validate(jsonObject);
        // console.log(logType.TEST, `has AccountDTO : ${result.success ? result.success : (result.success + ' => ' + result.error)}`);
        if (result && !result.success) {
            console.error(logType.TEST, result.error);
        }
        
        expect(result).not.toBeNull;
        expect(result.success).toBe(true);

    });

    test('Using union type, is valid', () => {
        const intByUnionType: Interfaces.IAccountDTO = {
            gameName: 'gameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
            tagLine: 'tag',
        };

        let result : any = Validator.AccountValidator.validate(intByUnionType);
        // console.log(logType.TEST, `has AccountDTO : ${result.success ? result.success : (result.success + ' => ' + result.error)}`);
        if (result && !result.success) {
            console.error(logType.TEST, result.error);
        }
        
        expect(result).not.toBeNull;
        expect(result.success).toBe(true);

    });

    test('Using interface version, is valid', () => {
        const intBySpecificVersion: Interfaces.IAccountDTO_v1 = {
            gameName: 'gameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
            tagLine: 'tag',
        };

        let result : any = Validator.AccountValidator.validate(intBySpecificVersion);
        // console.log(logType.TEST, `has AccountDTO : ${result.success ? result.success : (result.success + ' => ' + result.error)}`);
        if (result && !result.success) {
            console.error(logType.TEST, result.error);
        }
        
        expect(result).not.toBeNull;
        expect(result.success).toBe(true);
    });

    test('Using union type, invalid tagLine', () => {
        const shortTagLink: Interfaces.IAccountDTO = {
            gameName: 'gameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
            tagLine: 't',
        };

        let result = Validator.AccountValidator.validate(shortTagLink);
        expect(result).not.toBeNull;
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull;
        expect(result.error?.message).toContain('Must be 3 or more characters long');

        
        const tooLongTagLine: Interfaces.IAccountDTO = {
            gameName: 'gameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
            tagLine: 'tagggg',
        };

        result = Validator.AccountValidator.validate(tooLongTagLine);
        expect(result).toBeDefined();
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull;
        expect(result.error?.message).toContain('Must be 5 or fewer characters long')
    });

    test('Using union type, invalid gameName', () => {
        const shortGameName: Interfaces.IAccountDTO = {
            gameName: 'ga',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
            tagLine: 'tagL',
        };

        let result = Validator.AccountValidator.validate(shortGameName);
        expect(result).not.toBeNull;
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull;
        expect(result.error?.message).toContain('Must be 3 or more characters long');

        
        const tooLongGameName: Interfaces.IAccountDTO = {
            gameName: 'ThisIsAnInvalidGameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jg',
            tagLine: 'tagggg',
        };

        result = Validator.AccountValidator.validate(tooLongGameName);
        expect(result).toBeDefined();
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull;
        expect(result.error?.message).toContain('Must be 16 or fewer characters long')
    });

    test('Using union type, invalid puuid', () => {
        const shortPuuid: Interfaces.IAccountDTO = {
            gameName: 'gameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc',
            tagLine: 'tagL',
        };

        let result = Validator.AccountValidator.validate(shortPuuid);
        expect(result).not.toBeNull;
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull;
        expect(result.error?.message).toContain('Must be 78 characters long');

        
        const tooLongPuid: Interfaces.IAccountDTO = {
            gameName: 'ThisIsAnInvalidGameName',
            puuid: 'pDxMtQ0DTUZAxSu3WZz9itOTPphTc-9b9uTIrQXsQGFXxhgnaIIhyfY9NEaoZZGdKD-qgYbMPK42jgg',
            tagLine: 'tagggg',
        };

        result = Validator.AccountValidator.validate(tooLongPuid);
        expect(result).toBeDefined();
        expect(result.success).toBe(false);
        expect(result.error).not.toBeNull;
        expect(result.error?.message).toContain('Must be 16 or fewer characters long')
    });

});