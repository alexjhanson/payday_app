
import './ClockPanel.scss';
import DigitalClock from '../../components/DigitalClock/DigitalClock';
import Loading from '../../components/Loading/Loading';
import {default as PunchButtons} from '../PunchButtonContainer/PunchButtonContainer';


export default function ClockPanel(props) {

    let punches = props.currentShift.punches ? props.currentShift.punches: [];
    let lastPunch = punches.length ? punches[punches.length-1] : null;

    return (  
        <div className={`panel clock-panel ${props.panelLocation}`}>
            <DigitalClock/>
            {
                props.currentShiftUpdating ?
                <Loading color="rgb(232,85,61)"/>
                :
                <PunchButtons lastPunch={lastPunch} handleCurrentShiftUpdate={props.handleCurrentShiftUpdate} />
            }
        </div>
    );
}


