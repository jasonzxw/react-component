import { useEffect, useState } from 'react'

const useEndTime = (time: number) => {
    const [currentTime , setCurrentTime]  = useState<number>(time);

    useEffect(()=> {
        let timer : NodeJS.Timer = setTimeout(() => {
            setCurrentTime(c => {
                if(c-1<0){
                    clearTimeout(timer)
                    return 0
                }
                return c-1
            })
        },1000);
        return () => clearTimeout(timer)
        
    },[currentTime])

    return currentTime
}

export default useEndTime