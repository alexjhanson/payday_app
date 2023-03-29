import './Week.scss';
import Shift from '../Shift/Shift';
import { shiftWeekDateFormat } from '../../utils/date_and_time';


const Week = (props) => {

    return (
        <div className="week">
            <h1 className="week__header">{shiftWeekDateFormat(new Date(props.date))}</h1>
            <div className="week__shift-container">
                { props.shifts.map( (s, indx) => <Shift date={s.date} punches={s.punches} key={`shift-${indx}`}/> ) }
            </div>
        </div>
    );
}

export default Week;
