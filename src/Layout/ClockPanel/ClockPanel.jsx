
import DigitalClock from '../../components/DigitalClock/DigitalClock';
import './ClockPanel.scss';

 
export default function ClockPanel(props) {

    return (  
        <div className={`panel clock-panel ${props.panelLocation}`}>
            <DigitalClock />
        </div>
    );
}
