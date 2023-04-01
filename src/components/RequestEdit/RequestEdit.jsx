import './RequestEdit.scss';
import { toISODate } from '../../utils/date_and_time';
import { useState } from 'react';

export default function RequestEdit(props) {

    const[state, setState] = useState({...props.req});

    function handleChange(e) {
        setState({...state, ...{[e.target.name]: e.target.value}});
    }

    return ( 
        <div className="request-edit">
            <select className="request-edit__type" name="type" value={state.type}  onChange={e => {handleChange(e)}}>
                <option value="PTO">PTO</option>
                <option value="SICK">SICK</option>
                <option value="PAT">PAT</option>
                <option value="MAT">MAT</option>
                <option value="VOTE">VOTE</option>
                <option value="COMP">COMP</option>
                <option value="MIL">MIL</option>
                <option value="JURY">JURY</option>
                <option value="PRSN">PRSN</option>
                <option value="MED">MED</option>
                <option value="VAC">VAC</option>
            </select>
            <input className="request-edit__start" type="date" name="start" value={toISODate(new Date(state.start))} onChange={e => {handleChange(e)}} />
            <input className="request-edit__end" type="date" name="end" value={toISODate(new Date(state.end))} onChange={e => {handleChange(e)}} />
            <input className="request-edit__notes" type="text" name="notes" value={state.notes} onChange={e => {handleChange(e)}} />
            <svg className="save-icon scale-icon" onClick={() => props.handleEdit({...state})}>
                <use xlinkHref="sprite.svg#icon-checkmark2" />
            </svg>
            <svg className="cxl-icon scale-icon" onClick={() => props.toggleEdit(null)}>
                <use xlinkHref="sprite.svg#icon-undo" />
            </svg>
        </div>
     );
}
 


