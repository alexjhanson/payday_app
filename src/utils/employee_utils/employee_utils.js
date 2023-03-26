import dt_util from '../../utils/date_time_utils/date_and_time';


function getLastPunch(emp) {

    let shifts = emp.shifts;
    let lastPunch = null;
    
    if(shifts?.length) {
  
        let lastShift = shifts[shifts.length];
        let today = new Date();
        let shiftDate = new Date(lastShift.createdAt);
  
        if(dt_util.areDatesEqual(today, shiftDate)) {
            let punches = lastShift.punches;

            if(punches?.length)
                lastPunch = punches[punches.length];
        }
  
    }
  
    return lastPunch    
  }


export { getLastPunch };