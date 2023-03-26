import { useState, useEffect } from "react";
import {getCurrentTime} from '../date_time_utils/date_and_time';

export default function useClockUpdate() {

    const [time, setTime] = useState(getCurrentTime());

    useEffect(() => {

        const id = setInterval(() => {
            setTime(getCurrentTime())
        },
        1000);

        return () => {
            clearInterval(id);
        };

    }, []);

    return time;

}