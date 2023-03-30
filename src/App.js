// styles
import './App.scss';
import './App.css';

// UI components
import ShiftPanel from './layout/ShiftPanel/ShiftPanel';
import ClockPanel from  './layout/ClockPanel/ClockPanel';
import RequestPanel from './layout/RequestPanel/RequestPanel';
import Loading from './components/Loading/Loading'

// state (Hooks) & helper functions
import init from './utils/init';
import { punchInOut } from './utils/punch_utils';
import { syncShifts } from './utils/shift_utils';
import { useState, useEffect } from 'react';

function App() {

  // Configure state
  const [appState, setAppState] = useState({
    employee: null,
    currentShift: null,
    currentShiftUpdating: false,
    shifts: null,
    shiftsUpdating: false,
    punchError: false,
    requests: null,
    requestsUpdating: false,
    lastPunch: null
  });
  
  // initialize state
  useEffect(()=> {
    init({...appState}, setAppState)
  }, []);

  async function makePunch(shiftId, punch) {
    let tmp = {...appState};
    const shift = await punchInOut(shiftId, punch)

    if(shift) {
      tmp.currentShift = shift;
      syncShifts(tmp.shifts, shift);
    } else {
      tmp.punchError = true;
    }

    tmp.lastPunch = tmp.currentShift.punches.length? tmp.currentShift.punches[tmp.currentShift.punches.length - 1] : null;
    tmp.currentShiftUpdating = false;

    setAppState(tmp);
  }

  function handleCurrentShiftUpdate(punch) {
    let tmp = {...appState};
    tmp.currentShiftUpdating = true;
    makePunch(appState.currentShift._id, punch);

    setAppState(tmp);
  }

  if(appState.employee) {
    return (
        <>
          <div className="App">
            {/* <ShiftPanel panelLocation="panel--1"/> */}
            <ClockPanel 
                panelLocation="panel--2" 
                currentShiftUpdating={appState.currentShiftUpdating}
                handleCurrentShiftUpdate={handleCurrentShiftUpdate} 
                currentShift={appState.currentShift}
                punchError={appState.punchError}
                lastPunch={appState.lastPunch}
            />
            <RequestPanel panelLocation="panel--3" requests={appState.requests}/>
          </div>
      </>
    );
  } else {
    return <Loading color='#fff'/>
  }
}

export default App;
