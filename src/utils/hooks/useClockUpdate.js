import { useState, useEffect } from "react";

export default function useClockUpdate() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        const id = setInterval(() => {
            setTime(new Date())
        },
        1000);

        return () => {
            clearInterval(id);
        };

    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return time;

}