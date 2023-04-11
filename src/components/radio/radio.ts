/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-04-10 14:40:30
 * @FilePath: \react-component\src\components\radio\radio.ts
 */
export interface radio {
    value: string | boolean | number ;
    name: string
    update: (val : string | boolean | number) => void ;
    label: string | boolean | number ;
}