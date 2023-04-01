
import './ClockPanel.scss';
import DigitalClock from '../../components/DigitalClock/DigitalClock';
import Loading from '../../components/Loading/Loading';
import {default as PunchButtons} from '../PunchButtonContainer/PunchButtonContainer';
import { PureComponent } from 'react';

import {default as sh_util} from '../../utils/shift_utils';
import {default as p_util} from '../../utils/punch_utils';
import {default as dt_util} from '../../utils/date_and_time';


export default class ClockPanel extends PureComponent{

    state = {
        currentShift: null,
        lastPunch: null,
        updating: false,
    }

    async init(empId) {

        let currentShift = await sh_util.getCurrentShift(this.props.empId);
        let lastPunch = null;

        if(!currentShift) {
            lastPunch = await p_util.getLastPunch(this.props.empId);
        } else {
            lastPunch = currentShift.punches[currentShift.punches.length - 1];
        }
    
        return {
            currentShift,
            lastPunch
        }
        
    }

    async componentDidMount() {
        let state = await this.init(this.props.empId);
        this.setState({...state});
    }

    handlePunch = async (punch) => {

        let currentShift = null;
        let lastPunch = null;
        let updating = true;

        this.setState({updating})

        if(this.state.currentShift) {
            currentShift = await p_util.makePunch(this.state.currentShift._id, punch);
            if(!currentShift.open && !dt_util.areDatesEqual(new Date(currentShift.date), dt_util.getDateAtMidnight())) {
                currentShift = await sh_util.createShift(this.props.empId, dt_util.getDateAtMidnight(), true);
            }
        } else {
            currentShift = await sh_util.createShift(this.props.empId, dt_util.getDateAtMidnight(), true);
            currentShift = await p_util.makePunch(currentShift._id, punch);
        }

        lastPunch = currentShift.punches[currentShift.punches.length -1];
        updating = false;

        this.setState({currentShift, lastPunch, updating});
    }


    render() {
        return (
            <div className={`panel clock-panel ${this.props.panelLocation}`}>
                <DigitalClock/>
                {
                    this.state.updating ?
                    <Loading color="rgb(232,85,61)"/>
                    :
                    <PunchButtons lastPunch={this.state.lastPunch} handlePunch={this.handlePunch} />
                }
            </div>
        );

    }
}





