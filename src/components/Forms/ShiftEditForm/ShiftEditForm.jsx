import './ShiftEditForm.scss';
import Punch from '../../Punch/Punch';

export default function ShiftEditForm(props) {
   
    return (  
        <div className="shift-detail">
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
 