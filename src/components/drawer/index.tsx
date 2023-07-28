import "./index.css";
export interface DrawerProps {
  place?: "left" | "right";
  visible: boolean;
  closeDrawer: () => void;
}

const Drawer = ({ visible, place = "right", closeDrawer }: DrawerProps) => {
  return (
    <>
      {visible && (
        <div className="drawerContainer">
          <div className={['drawer', place === "right" ? 'rtr' : 'ltr'].join(' ')} onClick={closeDrawer}></div>
        </div>
      )}
    </>
  );
};

export default Drawer;
