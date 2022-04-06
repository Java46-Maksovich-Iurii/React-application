import React, { useEffect } from "react";
type Props = {
    interval: number,
    city: string,
    gmt: number,
    className?: string
} 
const Timer: React.FC<Props> = ({interval, city, gmt, className}) => {
    const [time, setTime] = React.useState(new Date());
    function tic():void {
        console.log('test');
        const newDate = new Date();
        newDate.setHours(newDate.getHours()+gmt-3);
        setTime(newDate);
    }
    useEffect(() => {
        setInterval(tic, interval);
    }, [])
    
    return <div className={className}>
        <h3>Current Time</h3>
        <p>{city}</p>
        <label>{time.toLocaleTimeString()}</label>
    </div>
}
export default Timer;