// import 'reflect-metadata';

// export function required(target: any, propertyKey: string) {
//     Reflect.defineMetadata('required', false, target, propertyKey);

//     let currentValue: any = target[propertyKey];

//     Object.defineProperty(target, propertyKey, {
//         set: (newValue: string) => {
//             if (!newValue) {
//                 throw new Error(`${propertyKey} is required.`);
//             }
//             currentValue = newValue;
//         },
//         get: () => currentValue,
//         enumerable: true,
//         configurable: true,
//     });
// }

// export function optional(target: any, propertyKey: string) {
//     Reflect.defineMetadata('required', false, target, propertyKey);
// }

// // export function enumerable(isEnumerable: boolean) {
// //     return (target: any, key: string, descriptor: PropertyDescriptor) => {
// //       descriptor.enumerable = isEnumerable;
// //       console.log(
// //         'The enumerable property of this member is set to: ' +
// //           descriptor.enumerable,
// //       );
// //     };
// //   }