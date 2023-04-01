import './PunchButtonContainer.scss';
import { default as p_utils } from '../../utils/punch_utils';
import { default as dt_utils } from '../../utils/date_and_time';

import PunchButton from '../../components/PunchButton/PunchButton';

export default function PunchButtonContainer (props) {

    const[punchType, lunchType] = p_utils.getPunchTypes(props.lastPunch);
    const lastPunch = props.lastPunch;

    return ( 
        <div className="punch-container">
            
            <div className="punch-container__last-punch" style={
                {visibility: lastPunch ? 'visible' : 'hidden', height: lastPunch ? null : '12rem', width: lastPunch ? null : '30rem'}
            }>
                <h1>Last Punch</h1>
                { p_utils.displayLastPunchDate(lastPunch) ?  <p>{dt_utils.standardDateFormat(new Date(lastPunch.time))}</p> : null}
                <p>
                    {p_utils.formatLastPunch(lastPunch)} 
                </p>
            </div>
        
            <div className="punch-container__button-container">
                { punchType ? 
                        <PunchButton punchType={punchType} 
                                     bgColor={p_utils.getPunchButtonColor(punchType)} 
                                     handlePunch = {props.handlePunch}
                        /> 
                        : null}
                { lunchType ? 
                        <PunchButton punchType={lunchType} 
                                     bgColor={p_utils.getPunchButtonColor(lunchType)} 
                                     handlePunch = {props.handlePunch}
                        /> 
                        : null }
            </div>
        </div>
     );
}



