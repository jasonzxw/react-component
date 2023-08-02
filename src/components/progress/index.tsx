import './index.css'

export interface ProgressProps {
    width: number ;
    color: string ;
    textInside?: string
}
const Progress = ({ width , color , textInside}: ProgressProps) => {
    let containerStyle = {
        height: textInside? '26px' : '6px'
    }
    let style = {
        width: width + '%' ,
        backgroundColor: color
    }

    return (
        <div className='progress-container' style={containerStyle}>
            <div className='progress' style={style}>
                {textInside && <span className='progress-innertext'>
                    {textInside}
                </span>}
            </div>
        </div>
    )
}

export default Progress