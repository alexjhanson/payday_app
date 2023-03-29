
import { initializeShift } from "./shift_utils";

export default function init(state, setAppState) {
    return fetch('/employees')
            .then(res => res.json())
            .then(result => {
                state.employee =  result[0];
                return fetch(`/api/employees/${state.employee._id}/currentShifts`);
            })
            .then(res => res.json())
            .then(result => {
                state.shifts = result;
                return initializeShift(state.shifts, state.employee._id);
            })
            .then(shift => {
                state.currentShift = shift;
                setAppState(state);
            });
}