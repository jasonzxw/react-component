/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-04-13 16:57:55
 * @FilePath: \react-component\src\components\dragTab\index.tsx
 */
import { useEffect, useRef } from 'react'
import './index.css'

import useEventListener from '../../utils/useEventLIstener';

const JDragTab = (props: any) => {
    const {
        options
    } = props

    const containerRef = useRef<HTMLDivElement>(null);

    let dragRef : HTMLElement ;

    let dropRef : HTMLElement ;

    const dragStart = (e: DragEvent) =>{
        dragRef = e.target as HTMLElement;
    }

    const dragOver = (e: DragEvent) => {
        e.preventDefault();
        dropRef = e.target as HTMLElement ;

        if(elPosition(dragRef) < elPosition(dropRef)){
            (containerRef.current as HTMLElement).insertBefore(dragRef,dropRef.nextElementSibling);
        }else{
            (containerRef.current as HTMLElement).insertBefore(dragRef,dropRef);
        }
    }

    // useEffect(() => {
    //     containerRef.current?.addEventListener('dragstart',dragStart);
    //     containerRef.current?.addEventListener('dragover',dragOver);
    //     return () => {
    //         containerRef.current?.removeEventListener('dragstart',dragStart);
    //         containerRef.current?.removeEventListener('dragover',dragOver);
    //     }
    // },[])
    useEventListener('dragstart',dragStart,{target: containerRef});
    useEventListener('dragover',dragOver,{target: containerRef})

    const elPosition = function(el: Element | null): number{
        let index: number = 0 ;
        while(el){
            index++;
            el = el.previousElementSibling
        }
        return index
    }

    return (
        <div className='tab-container' ref={containerRef}>
            {
                options.map((item: any) => {
                    return (
                        <div className='el' draggable={true} key={item.value}>{item.value}</div>
                    )
                })
            }
        </div>
    )
}

export default JDragTab;