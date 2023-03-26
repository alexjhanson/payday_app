import './Week.scss';
import Shift from '../Shift/Shift';


const Week = (props) => {

    return (
        <div className="week">
            <h1 className="week__header">Week #{props.weekNumber}</h1>
            <div className="week__shift-container">
                { new Array(4).fill().map( (e, indx) => <Shift key={`shift-${indx}`}/> ) }
            </div>
        </div>
    );
}

export default Week;