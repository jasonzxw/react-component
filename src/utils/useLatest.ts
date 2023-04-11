/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-04-10 14:08:30
 * @FilePath: \react-component\src\utils\useLatest.ts
 */
import { useRef } from 'react'

const useLatest = function<T>(value: T) {
    const ref = useRef(value);
    ref.current =value

    return ref;
}

export default useLatest;