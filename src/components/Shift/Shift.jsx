import './Shift.scss';

import ShiftDetail from '../ShiftDetail/ShiftDetail';

import { standardDateFormat } from '../../utils/date_and_time';
import { totalHours, getPunchRows } from '../../utils/punch_utils';
import { useState } from 'react';

const Shift = (props) => {

    const [displayDetail, setDisplayDetail] = useState(false);
    const punchRows = getPunchRows(props.punches)
    const date = standardDateFormat(new Date(props.date));

    function handleDisplayDetail(show) {
        setDisplayDetail(show);
    }

    return (
        <div className="shift">
            <input type="checkbox" className="shift__approve-box" />
            <div 
                className="shift__date"
                onClick={() => { 
                    handleDisplayDetail(true)
                    props.handleDisplayMask(true); 
                }}
            >
                {date}  
            </div>
            <div className="shift__total-hours">{totalHours(punchRows).toFixed(2) + " hrs"}</div>
            { displayDetail ?  
                <ShiftDetail 
                    punchRows={punchRows} 
                    handleDisplayDetail={handleDisplayDetail}
                    handleDisplayMask={props.handleDisplayMask} 
                    date={date}
                /> 
                : null }
        </div>
    );
}

export default Shift;

