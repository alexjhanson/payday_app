
import { initializeShift } from "./shift_utils";
import { getLastPunch } from "./punch_utils";

export default function init(state, setAppState) {
    return fetch('/employees')
            .then(res => res.json())
            .then(result => {
                state.employee =  result;
                return fetch(`/api/employees/${state.employee._id}/currentshifts`);
            })
            .then(res => res.json())
            .then(result => {
                state.shifts = result;
                return initializeShift(state.shifts, state.employee._id);
            })
            .then(shift => {
                state.currentShift = shift;
                return getLastPunch(state.currentShift, state.employee._id);
            })
            .then(punch => {
                state.lastPunch = punch;
                setAppState(state)
            });
}