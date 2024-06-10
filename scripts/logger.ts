import moment from 'moment';
import chalk from 'chalk';
import util from 'node:util';

/* eslint-disable-next-line no-shadow */
export enum logType {
    VERBOSE = 1,
    DEBUG,
    INFORMATION,
    WARNING,
    ERROR,
    CLASS,
    INTERFACE,
    INDEX,
    VALIDATOR
}

const showPrefix = (process.env.showPrefix || true);
const showDateTime = (process.env.showDateTime || true);

const fontColor = {
    chalkDebug: chalk.hex('##FFB52E'),
    chalkDateTime: chalk.hex('#ADD8E6'),
    chalkGreen: chalk.hex('#47ff51'),
};

const logPrefix = {
    verbose: chalk.white('[VERBOSE]'.padEnd(12, ' ')),
    debug: fontColor.chalkDebug('[DEBUG]'.padEnd(12, ' ')),
    info: chalk.blueBright('[INFO]'.padEnd(12, ' ')),
    warning: chalk.yellow('[WARN]'.padEnd(12, ' ')),
    error: chalk.red('[ERROR]'.padEnd(12, ' ')),
    class: fontColor.chalkGreen('[CLASS]'.padEnd(12, ' ')),
    interface: fontColor.chalkGreen('[INTERFACE]'.padEnd(12, ' ')),
    index: chalk.magenta('[INDEX]'.padEnd(12, ' ')),
    validator: chalk.magenta('[VALIDATOR]'.padEnd(12, ' ')),
};

const getCurrentDateFormat = () : string => {
    if (showDateTime) {
        return fontColor.chalkDateTime(moment().format('YYYY-MM-DD HH:mm:ss:SSS') + ' : ');
    }
    return '';
};

const formatString = (message: string) : string => {
    const boldRegex = new RegExp('([*]{2})', 'gd');
    const matches = message.match(boldRegex);

    if (matches && matches.length > 0) {
        const nbMatch = matches.length / 2;
        let currentMatch = 0;

        let newMessage = '';
        let idx = 0;
        let isComplete = false;

        while (!isComplete) {
            const firstIndex = message.indexOf('**', idx);
            const lastIndex = message.indexOf('**', firstIndex + 1);
            if (firstIndex < 0) {
                break;
            }

            newMessage += message.substring(idx, firstIndex - idx);
            newMessage += chalk.bold(message.substring(firstIndex + 2, (lastIndex - (firstIndex + 2))));

            currentMatch += 1;
            if (currentMatch == nbMatch) {
                newMessage += message.substring(lastIndex + 2);
                isComplete = true;
            } else {
                newMessage += message.substring(lastIndex + 2, 0);
                idx = lastIndex + 2;
                isComplete = idx < message.length ? false : true;
            }
        }

        return newMessage;
    }

    return message;
};

// Step 1 : Format orignal string
/* eslint-disable @typescript-eslint/no-explicit-any */
const formatOrignalString = (message: string, params: any[]) : string => {
    let newMessage = message;
    if (params && params.length > 0) {
        for (let index = 0; index < params.length; index++) {
            newMessage = util.format(newMessage, params[index]);
        }
    }
    return newMessage;
};

// Step 2 : Add PREFIX + DateTime
const prefixMessage = function (prefix: string, message: string) {
    if (showPrefix) {
        const currentDateTime = getCurrentDateFormat();
        const newArgs : string[] = [];

        if (typeof message === 'string') {
            newArgs.unshift(formatString(message));
            newArgs.unshift(currentDateTime);
            newArgs.unshift(prefix);
        } else {
            // This handles console.log( object )
            newArgs.unshift(util.inspect(message, { showHidden: false, depth: null, colors: false }));
            newArgs.unshift(currentDateTime);
            newArgs.unshift(prefix);
        }

        const search = ',';
        const searchRegExp = new RegExp(search, 'gi'); // Throws SyntaxError
        const replaceWith = '';

        return newArgs.toString().replace(searchRegExp, replaceWith);
    }
    return '';
};

// Get original logger
const exLog = console.log;
const exDebug = console.debug;
const exError = console.error;
const exInfo = console.info;
const exWarning = console.warn;

/* eslint-disable @typescript-eslint/no-explicit-any */
console.log = function (type: logType, message?: any, ...params: any[]) {
    switch (type) {
        case logType.VERBOSE: {
            exLog.apply(this, [prefixMessage(logPrefix.verbose, formatOrignalString(message, params))]);
            break;
        }
        case logType.DEBUG: {
            exDebug.apply(this, [prefixMessage(logPrefix.debug, formatOrignalString(message, params))]);
            break;
        }
        case logType.INFORMATION: {
            exInfo.apply(this, [prefixMessage(logPrefix.info, formatOrignalString(message, params))]);
            break;
        }
        case logType.WARNING: {
            exWarning.apply(this, [prefixMessage(logPrefix.warning, formatOrignalString(message, params))]);
            break;
        }
        case logType.ERROR: {
            exError.apply(this, [prefixMessage(logPrefix.error, formatOrignalString(message, params))]);
            break;
        }

        case logType.CLASS: {
            exLog.apply(this, [prefixMessage(logPrefix.class, formatOrignalString(message, params))]);
            break;
        }
        case logType.INDEX: {
            exLog.apply(this, [prefixMessage(logPrefix.index, formatOrignalString(message, params))]);
            break;
        }
        case logType.INTERFACE: {
            exLog.apply(this, [prefixMessage(logPrefix.interface, formatOrignalString(message, params))]);
            break;
        }

        case logType.VALIDATOR: {
            exLog.apply(this, [prefixMessage(logPrefix.validator, formatOrignalString(message, params))]);
            break;
        }

        default: {
            if (typeof(type) == "string") {
                exLog.apply(this, [prefixMessage(logPrefix.verbose, formatOrignalString(type, message))]);
            } else {
                exLog.apply(this, [prefixMessage(logPrefix.verbose, formatOrignalString(message, params))]);
            }
            break;
        }
    }
};

/* eslint-disable @typescript-eslint/no-explicit-any */
console.debug = function (message?: any, ...params: any[]) {
    exDebug.apply(this, [prefixMessage(logPrefix.debug, formatOrignalString(message, params))]);
};

/* eslint-disable @typescript-eslint/no-explicit-any */
console.info = function (message?: any, ...params: any[]) {
    exInfo.apply(this, [prefixMessage(logPrefix.info, formatOrignalString(message, params))]);
};

/* eslint-disable @typescript-eslint/no-explicit-any */
console.warn = function (message?: any, ...params: any[]) {
    exWarning.apply(this, [prefixMessage(logPrefix.warning, formatOrignalString(message, params))]);
};

/* eslint-disable @typescript-eslint/no-explicit-any */
console.error = function (message?: any, ...params: any[]) {
    exError.apply(this, [prefixMessage(logPrefix.error, formatOrignalString(message, params))]);
};

// declare global {
//     interface Console {
//         api: (message?: any, ...params: any[]) => void
//     }
// }

/* eslint-disable @typescript-eslint/no-explicit-any */
// console.api = function (message?: any, ...params: any[]) {
//     exLog.apply(this, [prefixMessage(logPrefix.api, formatOrignalString(message, params))]);
// };

module.exports.log = console.log;
module.exports.debug = console.debug;
module.exports.warn = console.warn;
module.exports.info = console.info;
module.exports.error = console.error;

// module.exports.api = console.api;

