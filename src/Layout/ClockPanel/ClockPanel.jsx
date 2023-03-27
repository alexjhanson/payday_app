
import DigitalClock from '../../components/DigitalClock/DigitalClock';
import Loading from '../../components/Loading/Loading';
import {PunchButtonContainer as PunchButtons} from '../PunchButtonContainer/PunchButtonContainer';
import './ClockPanel.scss';

export default function ClockPanel(props) {

    return (  
        <div className={`panel clock-panel ${props.panelLocation}`}>
            <DigitalClock/>
            {
                props.employeeUpdating ?
                <Loading color="rgb(232,85,61)"/>
                :
                <PunchButtons lastPunch={props.lastPunch} handlePunch={props.handlePunch} errMsg={props.errMsg} />
            }
        </div>
    );
}

