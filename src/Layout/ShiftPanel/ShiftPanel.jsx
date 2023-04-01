
import './ShiftPanel.scss';
import Week from "../../components/Week/Week";


const ShiftPanel = (props) => {
    return ( 
        <div className={`panel shift-panel ${props.panelLocation}`}>
            <h1 className={'shift-panel__header'}>Shifts</h1>
            {props.weeks.map((week, indx) => {
                return <Week 
                            date={week.date} 
                            shifts={week.shifts} 
                            key={`week-${indx}`}
                            handleDisplayMask={props.handleDisplayMask}
                        />;
                })}
        </div>
     );
}
 
export default ShiftPanel;


