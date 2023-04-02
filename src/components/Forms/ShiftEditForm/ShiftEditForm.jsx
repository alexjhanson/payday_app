import './ShiftEditForm.scss';
import Punch from '../../Punch/Punch';
import {default as dt_util} from '../../../utils/date_and_time';

export default function ShiftEditForm(props) {
   
    return (  
        <div className="shift-detail">
            <h1 className="shift-detail__date">{dt_util.standardDateFormat(props.date)}</h1>
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
 