import { createPortal } from "react-dom";
import { ReactElement, useState } from "react";
import React from "react";
import './index.css'
import { getElposition } from "../../utils/dom";
export interface TooltipProps {
  dir: string;
  text: string;
  isArraw?: boolean;
  children: React.ReactNode;
}

const Tooltip = ({ dir, text, isArraw = true, children }: TooltipProps) => {
  const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
  const [style,setStyle] = useState<Object>({})

  const handleMove = (el: React.MouseEvent<HTMLDivElement>) => {
    console.log(el)
    let {x,y} = getElposition(el.target as HTMLDivElement)
    setStyle({
      left: x ,
      top: dir === 'left'? y-(el.target as HTMLElement).offsetHeight-16 : y + (el.target as HTMLElement).offsetHeight + 16,
    })
    setTooltipVisible(true);
    // setTimeout(() => setTooltipVisible(false),10000)
    // setStyle
    // setTooltipVisible
  }
  return (
    <>
      {React.Children.map(children, (child) => {
        const childProps = {
          onClick: handleMove,
          onMouseEnter: handleMove
        };

        return React.cloneElement(child as unknown as ReactElement, childProps);
      })}
      {tooltipVisible &&
        createPortal(
          <div className="tooltip-container" style={style}>
            <div className="tooltip-content">{text}</div>
            {isArraw && <div className="tooltip-arraw">
              </div>}
          </div>,
          document.body
        )}
    </>
  );
};

export default Tooltip