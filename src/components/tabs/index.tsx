import "./index.css";
import { useState ,useEffect ,useRef} from 'react'

export interface TapColumns {
  key: string;
  label: string;
  children: string;
}
export interface TabsProps {
  items: TapColumns[];
  onChange?: () => void;
  defaultKey: string
}
const Tabs = ({ items, onChange ,defaultKey}: TabsProps) => {
  const activeContent = () => {
    return items.filter(item => item.key === defaultKey)[0].children
  }
  const [content, setContent] = useState<string>(() => activeContent());

  const [activekey , setActiveKey] = useState<string>(defaultKey);

  const tabRef = useRef(null)

  const hanldlePosition = (parent: HTMLDivElement , targetEl: HTMLDivElement) => {
    const activeEl = parent.getElementsByClassName('isActive')[0] as HTMLDivElement ;
    const left = activeEl.offsetLeft , width = activeEl.getBoundingClientRect().width ;
    targetEl.style.width = width + 'px' ;
    targetEl.style.left = left + 'px'
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>,item: TapColumns) => {
    setContent(item.children);
    setActiveKey(item.key);
    const avtiveEl = e.target as HTMLDivElement ;
    const parentEl = avtiveEl.offsetParent as HTMLDivElement  ;
    const el = parentEl.getElementsByClassName('tabTitleBorder')[0] as HTMLDivElement
    const left = avtiveEl.offsetLeft , width = avtiveEl.getBoundingClientRect().width ;
    el.style.width = width + 'px' ;
    el.style.left = left + 'px'
  }

  useEffect(() => {
    hanldlePosition((tabRef.current as unknown as HTMLDivElement).offsetParent as HTMLDivElement,tabRef.current as unknown as HTMLDivElement)
  },[])

  return (
    <div className="tabWrapper">
      <div className="tabHeader">
        {
            items.map(item => (
                <div className={['tabTitle', activekey=== item.key ? 'isActive': ''].join(' ')} onClick={(e) => handleClick(e,item)}>
                    { item.label}
                </div>
            ))
        }
        <div className="tabTitleBorder" ref={tabRef}>

        </div>
      </div>
      <div className="tabContent">
        { content }
      </div>
    </div>
  );
};

export default Tabs
