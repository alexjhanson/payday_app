import './PunchButtonContainer.scss';
import { default as dt_utils } from '../../utils/date_and_time';
import { default as p_utils } from '../../utils/punch_utils';

import PunchButton from '../../components/PunchButton/PunchButton';

export default function PunchButtonContainer (props) {

    const[punchType, lunchType] = p_utils.getPunchTypes(props.lastPunch);

    return ( 
        <div className="punch-container">
            {
                props.lastPunch ?
                    <div className="punch-container__last-punch">
                        <h1>Last Punch</h1>
                        <p>
                            {`${props.lastPunch.type.toUpperCase()}: ${dt_utils.formatTimeToMinutes(new Date(props.lastPunch.time))} ${dt_utils.getAmPm(new Date(props.lastPunch.time))}`} 
                        </p>
                    </div>
                    : 
                    null
            }
            <div className="punch-container__button-container">
                { punchType ? 
                        <PunchButton punchType={punchType} 
                                     bgColor={p_utils.getPunchButtonColor(punchType)} 
                                     handleCurrentShiftUpdate = {props.handleCurrentShiftUpdate}
                        /> 
                        : null}
                { lunchType ? 
                        <PunchButton punchType={lunchType} 
                                     bgColor={p_utils.getPunchButtonColor(lunchType)} 
                                     handleCurrentShiftUpdate = {props.handleCurrentShiftUpdate}
                        /> 
                        : null }
            </div>
        </div>
     );
}


