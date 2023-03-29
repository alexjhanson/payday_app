import './Punch.scss';

import { formatTimeToMinutes, getAmPm } from '../../utils/date_and_time';

const Punch = ({punch}) => {
    return ( 
        <div className="punch">
            <select value={punch.type}>
                <option value="in">IN</option>
                <option value="out">OUT</option>
                <option value="lunch">LUNCH</option>
                <option value="lunch end">LUNCH END</option>
            </select>
            <input type="text" value={formatTimeToMinutes(new Date(punch.time))} />
            <select  value={getAmPm(new Date(punch.time))}>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
            </select>
        </div>
     );
}
 
export default Punch;