import "./index.css";
import { useState, useEffect ,useRef } from "react";
const Refresh = () => {
  const [cur, setCur] = useState<number>(0);
  const [pre, setPre] = useState<number>(-1);
  const active = useRef(null)
  useEffect(() => {
    let timerID = setInterval(() => {
        let el = active.current as unknown as HTMLDivElement;
        el.classList.remove('nontransition')
        el.classList.add('transition')
        setTimeout(()=> {
            setCur((v) => {
                el.classList.remove('transition')
                el.classList.add('nontransition')
                return v + 1
            })
        },400)
        setPre(cur)
    }, 1000);

    return () => clearInterval(timerID);
  }, [cur]);

  return (
    <div className="refresh-container" >
      <div className={'refresh'} ref={active}>
        {cur}
      </div>
    </div>
  );
};

export default Refresh;
