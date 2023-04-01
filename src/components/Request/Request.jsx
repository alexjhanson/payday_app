import "./Request.scss";

import {default as dt_util} from '../../utils/date_and_time';

const Request = (props) => {

    return ( 
        <div>
            <p className="request-status">STATUS: {props.req.status}</p>
            <div className="request-view">
                <div className="request-view__type">{props.req.type}</div>
                <div className="request-view__start">{dt_util.standardDateFormat(new Date(props.req.start))}</div>
                <div className="request-view__end">{dt_util.standardDateFormat(new Date(props.req.end))}</div>
                <div className="request-view__notes">{props.req.notes}</div>
                <svg className="edit-icon" onClick={() => props.toggleEdit(props.req)}>
                    <use xlinkHref="sprite.svg#icon-pencil" />
                </svg>
                <svg className="trash-icon" onClick={() => props.handleDelete(props.req._id)}>
                    <use xlinkHref="sprite.svg#icon-bin" />
                </svg>
            </div>
        </div>
     );
}
 
export default Request;



