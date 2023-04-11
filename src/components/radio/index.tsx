/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-04-11 13:37:59
 * @FilePath: \react-component\src\components\radio\index.tsx
 */
import { radio } from './radio'

const JRadio = (props : any) => {
    const {
        label,
        name,
        value,
        update,
        children
    } = props ;

    const onchange = (evt: React.ChangeEvent<HTMLInputElement>) =>{
        console.log(evt.target.value);
        update(evt.target.value)
    }

    return (
        <label>
            <input type='radio' value={label} name={name} checked={value == label ? true : false} onChange={onchange}/>
            {children}
        </label>
    )
}

export default JRadio