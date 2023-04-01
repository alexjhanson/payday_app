import './RequestPanel.scss';

import Request from "../../components/Request/Request";
import RequestEdit from '../../components/RequestEdit/RequestEdit';
import RequestForm from '../../components/Forms/RequestForm/RequestForm';
import Loading from '../../components/Loading/Loading';

import { useState, useEffect } from 'react';
import {default as rq_utils} from '../../utils/request_utils';


export default function RequestPanel(props) {

    const [state, setState] = useState({
        reqs: null, 
        req: null,
        updating: false,
        empId: props.empId,
        formActive: false,
    });

    useEffect(() => {
        rq_utils.init({...state}, setState);
    }, [])

    function toggleEdit(req) {
        setState({...state, req});
    }

    function toggleForm() {
        // let transitions and animations display.
        setTimeout(() => setState({...state, ...{formActive: !state.formActive}}), 250);
    }

    async function updateState(req) {

        let updating = false;
        let formActive = false;
        let reqs = state.reqs;

        if(req) {
            req = null;
            reqs = await rq_utils.getRequests(state.empId);
        }

        setState({...state, updating, formActive, reqs, req});
    }

    async function handleCreate(r) {

        setTimeout(async () => {

            setState({...state, ...{updating: true, formActive: false}});
            
            const req = await rq_utils.createRequest(r);

            updateState(req);
        },250)
    }

    async function handleEdit(r) {

        setState({...state, ...{updating: true}});

        const req = await rq_utils.updateRequest(r);

        updateState(req);
    }

    async function handleDelete(id) {

        setState({...state, ...{updating: true}});

        const req = await rq_utils.deleteRequest(id);

        updateState(req);
    }

    return ( 
        <>
            {state.formActive ? <RequestForm handleCreate={handleCreate} toggleForm={toggleForm} employee={state.empId}/> : null}
            <div className={`panel request-panel ${props.panelLocation}`}>
                <h1 className="request-panel__header">Requests</h1>
            { 
                state.reqs && !state.updating ?
                <>
                    <button className="request-panel__add-btn" onClick={() => toggleForm()}>+</button>
                    <div className="request-panel__request-container">
                        {
                            state.reqs.length? 
                            state.reqs.map((req, idx)  => {
                                return  state.req && state.req._id === req._id ? 
                                        <RequestEdit req={req} toggleEdit={toggleEdit} handleEdit={handleEdit} key={`req-${idx}`}/> 
                                        : 
                                        <Request req={req} toggleEdit={toggleEdit} handleDelete={handleDelete} key={`req-${idx}`}/>
                            })
                            : null
                        }
                    </div>
                </>
                :
                <Loading color="rgb(232,85,61)"/>
            }
            </div>
        </>
    );
}


 

