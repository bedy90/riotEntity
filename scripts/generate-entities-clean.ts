import { Project, PropertySignature } from 'ts-morph';
import * as fs from 'fs-extra';
import * as path from 'path';

import './logger';
import { logType } from './logger';

import { InterfaceData } from './entities/interfaceData-clean';
import { NamespaceIndexTypes, ValidationTypes } from './common';
import { GenerateIndex } from './index/generate-index';
import { InterfaceParser } from './interface-parser';
import { GenerateValidator } from './index/generate-validator';


export class Generator {

  project: Project;

  /**
   * Struct : <[namespace], <[version], [InterfaceData]>
   * Ex : <Account, v1, InterfaceData[]>
   *    InterfaceData[] => IAccountDTO, IActiveShardDTO
   */
  entitiesData: Record<string, Record<string, InterfaceData[]>>;

  intParser: InterfaceParser | null = null;

  constructor() {
    this.project = new Project({
      // tsConfigFilePath: path.resolve('tsconfig.json'),
    });
    this.entitiesData = {};
  }

  // ****************************************
  //  Process function
  // ****************************************

  /**
   * Generate Index files from interfaces or classes
   * @param filesFolderPath 
   * @param type 
   */
  processIndexNamespace(filesFolderPath: string[], type: NamespaceIndexTypes) {
    this.#initializeInterfaceParser(filesFolderPath, type);

    let generator: GenerateIndex = new GenerateIndex(this.entitiesData);
    generator.processIndexNamespace(type);
  }

  /**
   * Generate Validator files from interface
   * @param filesFolderPath 
   * @param type 
   */
  processValidator(filesFolderPath: string[], type: NamespaceIndexTypes) {
    this.#initializeInterfaceParser(filesFolderPath, type);

    let generator: GenerateValidator = new GenerateValidator(this.entitiesData);
    generator.processValidatorFiles(NamespaceIndexTypes.VALIDATOR);
  }

  /**
   * Initialise the InterfaceParser and parse all interface files
   * @param folderPath 
   * @param namespaceType 
   * @param initialParse 
   */
  #initializeInterfaceParser(folderPath: string[], namespaceType: NamespaceIndexTypes) : void {
    this.intParser = new InterfaceParser(this.project, namespaceType, this.entitiesData);
    this.intParser.ParseFiles(folderPath);
  }
}


const mainGenerator: Generator = new Generator();
// console.log('Arguments passés:', process.argv.slice(2));

const firstArgs: string = process.argv[2];
switch (firstArgs) {
  case '2':
  case 'interfaceIndex':
  case 'intIndex':
    console.log(logType.INDEX, 'Generation of interface indexes from main interfaces.');
    mainGenerator.processIndexNamespace(['src/interface/**/*.ts', '!src/interface/**/index.ts'], NamespaceIndexTypes.INTERFACE);
    console.log(logType.INDEX, 'Generation of interface indexes from interfaces is now complete');
    break;

  case '4':
  case 'validator':
    console.log(logType.VALIDATOR, 'Generation of validations classes from main interfaces.');
    // console.warn(logType.CLASS, 'The process has been deactivated.');
    mainGenerator.processValidator(['src/interface/**/*.ts', '!src/interface/**/index.ts'], NamespaceIndexTypes.VALIDATOR);
    console.log(logType.VALIDATOR, 'Generation of validations classes from interfaces is now complete');
    break;

  case '5':
  case 'test':
    break;

  default:
    console.log(logType.INFORMATION, `Invalid parameters : "${firstArgs}"`);
    break;
}
