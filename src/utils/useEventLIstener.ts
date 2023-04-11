/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-04-10 14:28:13
 * @FilePath: \react-component\src\utils\useEventLIstener.ts
 */
import { useEffect } from "react";
import useLatest from "./useLatest";
import { getTargetElement } from "./domTarget";
import type { BasicTarget } from "./domTarget";


type noop = (...p: any) => void ;

export type Target = BasicTarget<HTMLElement | Element | Window | Document>;

type Options<T extends Target = Target> ={
    target?: T;
    capture?: boolean;
    once?: boolean;
    passive?: boolean;
}


const useEventListener = (eventName: string , handler: noop , options: Options = {}) => {

    const handlerRef = useLatest(handler);

    useEffect(() => {

        //todo 强制转换element type
        const targetElement = getTargetElement(options.target,window) as HTMLElement | Element | Window | Document;

        const eventListener = (event: Event) => {
            return handlerRef.current(event);
        }

        targetElement.addEventListener(eventName,eventListener,{
            passive: options.passive,
            capture: options.capture,
            once: options.once
        })

        return targetElement.removeEventListener(eventName,eventListener,{
            capture: options.capture,
        })

    },[eventName,options.capture,options.once,options.passive])
}

export default useEventListener;