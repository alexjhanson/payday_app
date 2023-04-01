
const request_utils = {
    getRequests,
    createRequest,
    updateRequest,
    deleteRequest,
}

export default request_utils;

export { getRequests, createRequest, updateRequest, deleteRequest}


function getRequests(empId) {
    return fetch(`/api/employees/${empId}/requests`)
            .then(res => {
                if(res.ok)
                    return res.json();
                return Promise().resolve([]);
            });
}


function updateRequest(req) {
    return  fetch(`/requests/${req._id}`, {
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(req)
                })
            .then(res => {
                if(res.ok) 
                    return res.json();
                return Promise.resolve(null);
            });
}

function deleteRequest(id) {
    return  fetch(`/requests/${id}`, { method:  'DELETE',})
            .then(res => {
                if(res.ok)
                    return res.json();
                return Promise.resolve(null);
            });
}

function createRequest(req) {
    return  fetch('/requests', { 
                method:  'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(req)
            })
            .then(res => {
                if(res.ok)
                    return res.json();
                return Promise.resolve(null);
            });
    }

