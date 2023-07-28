import { useState , useRef } from 'react'
import './index.css'

const Select = (props: any) => {
    const [selectedVal , setSelectedVal] = useState<string>('');
    const showRef = useRef(null);
    const {
        data
    } = props;
    
    const onClick = (val: string) => {
        console.log(val)
        setSelectedVal(val);
        (showRef.current as unknown as HTMLDivElement).classList.toggle('active')
    }
    const onSelected = () => {
        (showRef.current as unknown as HTMLDivElement).classList.toggle('active')
    }

    const onBlue =  () => {
        (showRef.current as unknown as HTMLDivElement).classList.toggle('active')
    }
    return(
        <div className="select-main"  tabIndex={-1} onBlur={onBlue} ref={showRef}>
            <div className="select-input" onClick={onSelected}>
                <span className='select-input-val'>{selectedVal}</span>
                <span className='select-input-show'>{'>'}</span>
            </div>
            <div className="seletc-data">
                {
                    data.map((item: {label: string , value: string}) => {
                        return (
                            <ShowItem  label={item.label} value={item.value} onClick={onClick}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

const ShowItem = (props:any) =>{
    const {
        label,
        value,
        onClick
    } = props;

    return (
        <div onClick={() => onClick(value)}>
            {label}
        </div>
    )
}

export default Select