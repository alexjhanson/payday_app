
import './Shift.scss';

const Shift = (props) => {

    return (
        <div className="shift">
            <input type="checkbox" className="shift__approve-box" />
            <div className="shift__date">DATE</div>
            <div className="shift__total-hours">Total Hours</div>
        </div>
    );
}

export default Shift;