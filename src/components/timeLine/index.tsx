import './index.css'

interface timeLineItem {
    text: string ,
    time: string ,
}
export interface timeLineprops{
    data: timeLineItem[];
}

const TimeLine = ({data}: timeLineprops) => {
    return(
        <div className='timeLine'>
            {
                data.map(item => {
                    return (
                        <TimeLineItem text={item.text} time={item.time}/>
                    )
                })
            }
        </div>
    )
}

/**
 * 重要的是将时间点以及事件线分别位置绝对定位，时间线100%高度
 * @param param0 
 * @returns 
 */
const TimeLineItem = ({text,time}:timeLineItem) => {
    return(
        <div className='timeLineItem'>
            <div className='timeLineTail'>
            </div>
            <div className='timeLineNode'>
            </div>
            <div className='timeLineWrapper'>
                <div className='timeLineContent'>{text}</div>
                <div className='timeLineTimestamp'>{time}</div>
            </div>
        </div>
    )
}

export default TimeLine