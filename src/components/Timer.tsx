import React, { useEffect } from "react";
type Props = {
    interval?: number,
    timeZone: string
} 
const Timer: React.FC<Props> = ({interval, timeZone}) => {
    const [time, setTime] = React.useState(new Date());
    function tic():void {
        setTime(new Date());
    }
    useEffect(() => {
        console.log("timer mounted")
        const intervalId = setInterval(tic, interval || 1000);
        return () => {
            clearInterval(intervalId);
            console.log("unmount timer");
        }
    }, [interval])
    
    return <div style={{marginLeft: "10vw"}}>
        <h3>Current time in {timeZone}</h3>
        <label>{time.toLocaleTimeString([], {timeZone})}</label>
    </div>
}
export default Timer;