import "./index.css";
export interface DrawerProps {
  place?: "left" | "right";
  visible: boolean;
  closeDrawer: () => void;
}

const Drawer = ({ visible, place = "right", closeDrawer }: DrawerProps) => {
  const style = place === "right" ? { right: 0 ,} : { left: 0 };
  return (
    <>
      {visible && (
        <div className="drawerContainer">
          <div className={['drawer', place === "right" ? 'rtr' : 'ltr'].join(' ')} style={style} onClick={closeDrawer}></div>
        </div>
      )}
    </>
  );
};

export default Drawer;
