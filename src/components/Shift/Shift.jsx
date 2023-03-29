import './Shift.scss';

import ShiftDetail from '../ShiftDetail/ShiftDetail';

import { shiftDayDateFormat } from '../../utils/date_and_time';
import { totalHours, getPunchPairs } from '../../utils/punch_utils';
import { useState } from 'react';

const Shift = (props) => {

    const [displayDetail, setDisplayDetail] = useState(false);
    const punchPairs = getPunchPairs(props.punches)

    return (
        <div className="shift">
            <input type="checkbox" className="shift__approve-box" />
            <div 
                className="shift__date"
                onClick={() => { setDisplayDetail(true) }}
            >
                {shiftDayDateFormat(new Date(props.date))}  
            </div>
            <div className="shift__total-hours">{totalHours(punchPairs)}</div>
            { displayDetail ?  <ShiftDetail pairs={punchPairs} setDisplayDetail={setDisplayDetail} /> : null }
        </div>
    );
}

export default Shift;
