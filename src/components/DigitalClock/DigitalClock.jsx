import './DigitalClock.scss';
import date_and_time_utils from '../../utils/date_time_utils/date_and_time';
import useClockUpdate from '../../utils/hooks/useClockUpdate';

const DigitalClock = (props) => {

    // state
    const time = useClockUpdate();

    return ( 
        <div className="digital-clock">
            <p className="digital-clock__time">{date_and_time_utils.formatTime(time)}</p>
            <p className="digital-clock__date">{date_and_time_utils.getClockDate()}</p>
        </div>
     );
}
 
export default DigitalClock;