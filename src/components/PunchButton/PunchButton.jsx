import './PunchButton.scss';

// punchType, color, handleCurrentShiftUpdate
export default function PunchButton(props) {
    return (  
        <button 
            className={"punch-button scale-btn"} 
            onClick={ () => props.handlePunch({type: props.punchType, time: new Date().toISOString()})}
            style={{backgroundColor: props.bgColor}}
        >
            {props.punchType.toUpperCase()}
        </button>
    );
}
 
 

