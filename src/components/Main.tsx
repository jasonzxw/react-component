/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-07-28 10:14:47
 * @FilePath: \react-component\src\components\Main.tsx
 */
import { useState, useMemo } from "react";
import { JCheckbox, JCheckboxGroup } from "./checkbox";
import JDragTab from "./dragTab";
import useEndTime from "../utils/useEndTime";
import { type } from "os";
import Select from "./select";
import Modal, { ModalProps } from "./modal";
import Drawer from "./drawer";
import ReactDOM from "react-dom";
import Skeleton from "./skeleton";
import Toast from "./toast";
import Progress from "./progress";
import Tabs, { TapColumns } from "./tabs";
import Tooltip from "./tooltip";
import Carousel from "./carousel";
import TimeLine from "./timeLine";
type select = {
  label: string;
  value: string;
};

const Wrapper = () => {
  const div = document.createElement("div");
  const show = (props: ModalProps) => {
    document.body.appendChild(div);
    ReactDOM.render(<Modal {...props} />, div);
  };
  const hide = () => {
    ReactDOM.unmountComponentAtNode(div);
    document.removeChild(div);
  };
  return {
    hide,
    show,
  };
};
const Main = () => {
  const [checkList, setCheckList] = useState<Array<string>>([
    "apple",
    "xiaomi",
  ]);

  const [checkedList, setCheckedList] = useState<Array<string>>(["apple"]);

  const [selectList, setSelectList] = useState<Array<select>>([
    { label: "huawei", value: "华为" },
    { label: "apple", value: "苹果" },
  ]);

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

  const [toastVisible, setToastVisible] = useState<boolean>(false);

  const items: TapColumns[] = [
    {
      key: "1",
      label: `Tab 1`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];

  const time = useEndTime(10);

  const { show, hide } = Wrapper();

  const handleChange = (val: string, checked: boolean) => {
    console.log(val, checked);
    if (checked) {
      let index = checkedList.findIndex((item) => item === val);
      if (index <= -1) {
        setCheckedList([...checkedList, val]);
      }
    } else {
      let index = checkedList.findIndex((item) => item === val);
      checkedList.splice(index, 1);
      setCheckedList([...checkedList]);
    }
  };

  const getCheckedList = () => {
    console.log(checkedList);
  };

  const openModal = () => {
    show({ visible: modalVisible, closeModal });
    // setModalVisible(true)
  };

  const closeModal = () => {
    hide();
    //setModalVisible(false)
  };

  const openDrawer = () => {
    setDrawerVisible(true);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const openToast = () => {
    setToastVisible(true);
  };

  const closeToast = () => {
    setToastVisible(false);
  };

  const timeLineData = [
    {
      text: "活动按期开始",
      time: "2018-04-15",
    },
    {
      text: "通过审核",
      time: "2018-04-13",
    },
    {
      text: "创建成功",
      time: "2018-04-11",
    },
  ];
  return (
    <>
    <TimeLine data={timeLineData}/>
      <Carousel />
      <Tooltip text="hello world" dir="left">
        <button>打开</button>
      </Tooltip>

      <Tooltip text="hello world22" dir="right">
        <button>打开</button>
      </Tooltip>
      <Tabs items={items} defaultKey="1" />
      <Tabs items={items} defaultKey="2" />
      <Progress width={50} color="#409eff" textInside="hi" />
      <Skeleton />
      <button onClick={openModal}>hi</button>
      <button onClick={openDrawer}>openDrawer</button>
      <button onClick={openToast}>openToast</button>
      <Toast
        closeToast={closeToast}
        visible={toastVisible}
        title="hi"
        content="enjoy life"
      />
      <Drawer visible={drawerVisible} closeDrawer={closeDrawer} place="left" />
      {/* <Modal visible={modalVisible} closeModal={closeModal}/> */}
      {/* <Select data={selectList}/> */}
      {/* {
      checkList.map(item => {
        return(
          <JCheckbox label={item} update={handleChange} checkedList={checkedList}>{item}</JCheckbox>
        )
      })
    } */}
      {/* <JDragTab options={[{value:1},{value:2},{value:3},{value:4}]}/>
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
    <div>time: {time}</div> */}
    </>
  );
};

export default Main;
