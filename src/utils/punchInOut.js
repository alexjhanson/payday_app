
/** 
    @params {object} p - the punch to add to a user
    @params {object} user - the user to add the punch to.
    
    @return {promise} user - the updated user, with the punch added.
*/
export default async function punchInOut(p, emp) {

    return fetch(`/employees/${emp._id}/punches`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    punch: {
                        type: p.type,
                        time: p.time.toISOString() // convert Date object to DB format
                    }
                })
             })
            .then(response => response.json());
}
