
import Week from "../../components/Week/Week";
import './ShiftPanel.scss';

const ShiftPanel = (props) => {
    return ( 
        <div className={`panel shift-panel ${props.panelLocation}`}>
            <h1 className={'shift-panel__header'}>Shifts</h1>
            {new Array(2).fill().map( (e, indx) => {
                return <Week weekNumber={indx + 1} key={`week-${indx}`}/>
            })}
        </div>
     );
}
 
export default ShiftPanel;