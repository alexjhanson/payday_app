
import DigitalClock from '../../components/DigitalClock/DigitalClock';
import dt_util from '../../utils/date_time_utils/date_and_time';
import './ClockPanel.scss';


export default function ClockPanel(props) {

    return (  
        <div className={`panel clock-panel ${props.panelLocation}`}>
            <DigitalClock />
            {
                props.lastPunch ?
                    <p className="clock-panel__last-punch">
                        `${props.lastPunch.type} : ${dt_util.formatTime(props.lastPunch.time)}` 
                    </p>
                    : 
                    null
            }
            <button className={"clock-panel__punch-button"} onClick={props.handlePunch}>
                    {
                        props.lastPunch ? 
                        props.lastPunch.type.toLowerCase() === 'start' || 
                        props.lastPunch.type.toLowerCase() === 'in' ? 'OUT' : 'IN'
                        : 'IN' 
                    }
            </button>
        </div>
    );
}

