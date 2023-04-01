import './Shift.scss';

import ShiftEditForm from '../Forms/ShiftEditForm/ShiftEditForm';
import Form from '../Forms/Form/Form';

import { standardDateFormat } from '../../utils/date_and_time';
import { totalHours, getPunchRows } from '../../utils/punch_utils';
import { useState } from 'react';

const Shift = (props) => {

    const [displayDetail, setDisplayDetail] = useState(false);
    const punchRows = getPunchRows(props.punches)

    function toggleForm() {
        setDisplayDetail(!displayDetail);
    }

    return (
        <div className="shift">
            <input type="checkbox" className="shift__approve-box" />
            <div className="shift__date" onClick={toggleForm}>
                {standardDateFormat(new Date(props.date))}  
            </div>
            <div className="shift__total-hours">{totalHours(punchRows).toFixed(2) + " hrs"}</div>
            { displayDetail ?  <Form toggleForm={toggleForm} render={<ShiftEditForm punchRows={punchRows} date={props.date}/>}/> : null }
        </div>
    );
}

export default Shift;

