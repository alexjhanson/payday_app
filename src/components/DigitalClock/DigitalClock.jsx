import './DigitalClock.scss';
import dt_util from '../../utils/date_time_utils/date_and_time';
import useClockUpdate from '../../utils/hooks/useClockUpdate';

const DigitalClock = (props) => {

    const time = useClockUpdate();

    return ( 
        <div className="digital-clock">
            <p className="digital-clock__time">{dt_util.formatClockTime(time)}</p>
            <p className="digital-clock__date">{dt_util.getClockDate()}</p>
        </div>
     );
}
 
export default DigitalClock;