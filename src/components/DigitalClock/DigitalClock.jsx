import './DigitalClock.scss';
import {default as dt_utils} from '../../utils/date_and_time';
import useClockUpdate from '../../utils/hooks/useClockUpdate';

const DigitalClock = (props) => {

    // state
    const time = useClockUpdate();

    return ( 
        <div className="digital-clock">
            <p className="digital-clock__time">{`${dt_utils.formatTimeToMinutes(time)} ${dt_utils.getAmPm(time)}`}</p>
            <p className="digital-clock__date">{dt_utils.getClockDate()}</p>
        </div>
     );
}
 
export default DigitalClock;