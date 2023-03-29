import './ShiftDetail.scss';
import { date_and_time_utils as dt_utils } from '../../utils/date_and_time';
import Punch from '../Punch/Punch';

const ShiftDetail = (props) => {
    return (  
        <div className="shift-detail" style={props.style}>
            {
                props.pairs.map(p => 
                    <div className="shift-detail__row">
                       <Punch punch={p.punch1} />
                       <Punch punch={p.punch2} />
                    </div>
                )
            }
        </div>
    );
}
 
export default ShiftDetail;