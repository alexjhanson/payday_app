
import './ShiftPanel.scss';
import Week from "../../components/Week/Week";
import { useEffect, useState } from 'react';
import {default as sh_util} from '../../utils/shift_utils';


const ShiftPanel = (props) => {

    const[weeks, setWeeks] = useState([])

    // eslint-disable-next-line 
    useEffect(() => {
        init();
        window.addEventListener('clock-punch', () => {
            init()
         });
    }, [])

    async function init() {
        let weeks = await sh_util.getCurrentWeeks(props.empId);
        setWeeks(weeks);
    }

    return ( 
        <div className={`panel shift-panel ${props.panelLocation}`}>
            <h1 className={'shift-panel__header'}>Shifts</h1>
            {weeks.map((week, indx) => <Week date={week.date} shifts={week.shifts} key={`week-${indx}`}/>)}
        </div>
     );
}
 
export default ShiftPanel;


