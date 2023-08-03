import './index.css'
import { useState , useRef , useEffect} from 'react'

const Carousel = () => {
    const [item,setItem] = useState<number[]>([1,2,3,4]);
    const [activeKey,setActiveKey] = useState<number>(1);
    const container = useRef(null)

    useEffect(() => {
        const containerEl = container.current as unknown as HTMLDivElement ;
        const elList = containerEl.children ;
        let activeEl = Array.from(elList).filter(el => el.classList.contains('carousel-active'))[0] as HTMLDivElement;
        const width = activeEl.clientWidth ;
        activeEl.style.transform = `translateX(${0})`
        if(Number(activeEl.textContent) !== item[item.length-1]){
            let previous = activeEl.previousElementSibling;
            while(previous){
                let index = 1 ;
                (previous as HTMLDivElement).style.transform = `translateX(-${index * width}px)`;
                index++
                previous = previous.previousElementSibling as HTMLDivElement
            }
            let next  = activeEl.nextElementSibling ;
            while(next){
                let index = 1 ;
                (next as HTMLDivElement).style.transform = `translateX(${index * width}px)`;
                index++
                next = next.nextElementSibling as HTMLDivElement
            }
        }else{
            let inactiveEl = Array.from(elList).filter(el => !el.classList.contains('carousel-active'));
            Array.from(inactiveEl).forEach((el,index) => {
                (el as HTMLDivElement).style.transform = `translateX(${(index+1) * width}px)`;
            })

        }
        const timerID = setInterval(() => {
            if(activeKey === item.length){
                setActiveKey(1)
            }else{
                setActiveKey(key => key+1)
            }
        },2000)

        return () => clearInterval(timerID)
    },[activeKey,item])
    return (
        <div className='carousel-container' ref={container}>
            {
                item.map(item => {
                    return (
                        <div className={['carousel-item', activeKey===item ? 'carousel-active': ''].join(' ')} >
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Carousel