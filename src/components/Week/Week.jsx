import './Week.scss';
import Shift from '../Shift/Shift';


const Week = (props) => {

    return (
        <div className="week">
            <h1>Week #{props.weekNumber}</h1>
            { new Array(4).fill().map( (e, indx) => <Shift key={`shift-${indx}`}/> ) }
        </div>
    );
}

export default Week;