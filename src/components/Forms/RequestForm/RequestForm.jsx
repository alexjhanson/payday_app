import './RequestForm.scss'

import {default as dt_util} from '../../../utils/date_and_time';
import { useState } from 'react';

export default function RequestForm(props){

    let start = dt_util.getDateAtMidnight();
    let end = new Date(start.getTime() + 86_400_000); // plus 24hrs

    const[state, setState] = useState({
        type: 'PTO',
        start: dt_util.toISODate(start),
        end: dt_util.toISODate(end),
        notes: '',
        employee: props.employee
    });

    // Split string out of ISO format
    // use values to create a local date
    // turn back into ISO to match DB format
    function normalize(s) {
        let start = s.start.split('-');
        let end = s.end.split('-');
        s.start = new Date(parseInt(start[0]), parseInt(start[1])-1, parseInt(start[2])).toISOString();
        s.end = new Date(parseInt(end[0]), parseInt(end[1])-1, parseInt(end[2])).toISOString();
        return s;
    }

    function handleChange(e) {
        setState({...state, ...{[e.target.name]: e.target.value}});
    }

    return ( 
            <div className="request-form">
                <h1>Request Form</h1>
                <label>
                    <span className="req-type">Type</span>
                    <select name="type" value={state.type}  onChange={e => {handleChange(e)}}>
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
                </label>
                <label>
                    <span className="req-start">Start</span>
                    <input name="start" value={state.start} type="date" onChange={e => {handleChange(e)}}/>
                </label>
                <label>
                    <span className="req-end">End</span>
                    <input name="end" value={state.end}  type="date" onChange={e => {handleChange(e)}}/>
                </label>
                <label>
                    <span className="req-notes">notes</span>
                    <textarea name="notes" value={state.notes} type="text" onChange={e => {handleChange(e)}}/>
                </label>
                <input type="submit" value="Create" onClick={() => {props.handleCreate(normalize({...state}))}}></input>
            </div>
     );
}
 
