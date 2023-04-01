import './ShiftDetail.scss';
import { date_and_time_utils as dt_utils } from '../../utils/date_and_time';
import Punch from '../Punch/Punch';

const ShiftDetail = (props) => {
   
    return (  
        <div className="shift-detail form" style={props.style}>
            <button className="form__btn" onClick={() => {
                props.handleDisplayDetail(false);
                props.handleDisplayMask(false);
            }}>
                X
            </button>
            <h1 className="shift-detail__date">{props.date}</h1>
            {
                props.punchRows.map((p,i) => 
                    <div className="shift-detail__row" key={`row-${i}`}>
                       <Punch punch={p.punch1}/>
                       <Punch punch={p.punch2}/>
                    </div>
                )
            }
        </div>
    );
}
 
export default ShiftDetail;