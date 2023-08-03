export function getElposition(el: HTMLDivElement){
    let x = 0 , y = 0 ;
    while(el.offsetParent){
        x += el.offsetLeft ;
        y += el.offsetTop ;
        el = el.offsetParent as HTMLDivElement ;
    }
    return {x,y}
}