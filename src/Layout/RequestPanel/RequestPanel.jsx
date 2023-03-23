import './RequestPanel.scss';

import Request from "../../components/Request/Request";


const RequestPanel = (props) => {
    return ( 
        <div className={`panel request-panel ${props.panelLocation}`}>
            <h1 className="request-panel__header">Requests</h1>
            {new Array(3).fill().map((e, indx) => {
               return <Request key={indx} />
            })}
        </div>
     );
}
 
export default RequestPanel;