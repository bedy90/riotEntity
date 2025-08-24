import { Project, InterfaceDeclaration, PropertySignature, TypeAliasDeclaration, ClassDeclaration } from 'ts-morph';
import * as glob from 'glob';
import * as fs from 'fs-extra';
import * as path from 'path';

import './logger';
import { logType } from '../logger';

import { InterfaceData, HeaderInfo } from '../entities/interfaceData';

export class GenerateClasses {

    constructor(public entitiesData: Record<string, Record<string, InterfaceData[]>>) {
    }


}