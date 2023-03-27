import date_and_time_utils from '../../utils/date_time_utils/date_and_time';
import './PunchButtonContainer.scss';

const PunchButtonContainer = (props) => {

    let punchType = 'in';
    let lunchType = null;

    if(props.lastPunch) {
        let lastType = props.lastPunch.type;

        if('start in'.includes(lastType)) {
            punchType = 'out';
            lunchType = 'lunch';
        }else if(lastType === 'lunch end') {
            punchType = 'out'
        } else if(lastType === 'lunch') {
            punchType = null;
            lunchType = 'lunch end';
        }

    }

    return ( 
        <div className="punch-container">
            {
                props.lastPunch ?
                    <div className="punch-container__last-punch">
                        <h1>Last Punch</h1>
                        <p>
                            {`${props.lastPunch.type.toUpperCase()} : ${date_and_time_utils.formatTime(props.lastPunch.time)}`} 
                        </p>
                        <p>{props.errorMsg}</p>
                    </div>
                    : 
                    null
            }
            <div className="punch-container__button-container">
                {
                    punchType ? 
                        <button className={"punch-container__button"} 
                            onClick={ () => props.handlePunch({type: punchType, time: new Date()})}
                            style={{backgroundColor: punchType === 'out' ? 'rgb(232,20,30)': 'rgb(35,102,96)'}}
                        >
                                {punchType.toUpperCase()}
                        </button>
                        :
                        null
                }
                {
                    lunchType ?
                        <button 
                            className={"punch-container__button"} 
                            onClick={ () => props.handlePunch({type: lunchType, time: new Date()})}
                            style={{backgroundColor: lunchType === 'lunch' ? 'rgb(35,102,96)': 'rgb(232,20,30)'}}
                        >
                            {lunchType.toUpperCase()}
                        </button>
                        :
                        null
                }
            </div>
        </div>
     );
}

// Non default to allow renaming.
export { PunchButtonContainer };