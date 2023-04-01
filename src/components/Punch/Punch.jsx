import './Punch.scss';
import { formatTimeToMinutes, getAmPm } from '../../utils/date_and_time';
import { useState } from 'react';

const Punch = ({punch}) => {

    const[p, setPunch] = useState({
        type:  punch ? punch.type : null,
        time:  punch ? formatTimeToMinutes(new Date(punch.time)) : null,
        am_pm: punch ? getAmPm(new Date(punch.time)).toUpperCase() : null,
    })

    function handleChange(e) {
        let tmp = {[e.target.name]: e.target.value};
        setPunch({...p, ...tmp});
    }

    if(punch)
        return ( 
            <div className="punch">
                <select name="type" value={p.type} onChange={e => {handleChange(e)}}>
                    <option value="in">IN</option>
                    <option value="out">OUT</option>
                    <option value="lunch">LUNCH</option>
                    <option value="lunch end">LUNCH END</option>
                </select>
                <input name="time" type="text" value={p.time} onChange={e => {handleChange(e)}} />
                <select name="am_pm" value={p.am_pm} onChange={e => {handleChange(e)}}>
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                </select>
            </div>
        );
    else
       return null;
}
 
export default Punch;