/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-04-11 16:13:06
 * @FilePath: \react-component\src\components\Main.tsx
 */
import { useState, useMemo } from "react";
import { JCheckbox, JCheckboxGroup } from "./checkbox";

const Main = () => {
  const [checkList , setCheckList] = useState<Array<string>>(['apple','xiaomi']);

  const [checkedList , setCheckedList] = useState<Array<string>>(['apple']);

  const handleChange = (val: string , checked: boolean) => {
    console.log(val,checked)
    if(checked){
      let index = checkedList.findIndex(item => item === val);
      if(index<=-1){
        setCheckedList([...checkedList,val])
      }
    }else{
      let index = checkedList.findIndex(item => item === val);
      checkedList.splice(index,1);
      setCheckedList([...checkedList])
    }

  }

  const getCheckedList = () => {
    console.log(checkedList)
  }
  return(
    <>
    {/* {
      checkList.map(item => {
        return(
          <JCheckbox label={item} update={handleChange} checkedList={checkedList}>{item}</JCheckbox>
        )
      })
    } */}

    <JCheckboxGroup checkedList={checkedList} change={handleChange}>
    {
      checkList.map(item => {
        return(
          <JCheckbox label={item} >{item}</JCheckbox>
        )
      })
    }
    </JCheckboxGroup>
    <button onClick={getCheckedList}>check</button>
    </>
      
  )
}

export default Main;
