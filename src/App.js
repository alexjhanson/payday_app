// styles
import './App.scss';
import './App.css';

// UI components
import ShiftPanel from './layout/ShiftPanel/ShiftPanel';
import ClockPanel from  './layout/ClockPanel/ClockPanel';
import RequestPanel from './layout/RequestPanel/RequestPanel';
import Loading from './components/Loading/Loading'

// state (Hooks) & helper functions
import gettEmployee from './utils/getEmployee';
import punchInOut from  './utils/punchInOut';
import { useState, useEffect } from 'react';

function App() {

  // Configure state
  const [appState, setAppState] = useState({
    employee: null,
    errMsg: "",
    employeeUpdating: true
  });
  
  // Retrieve employee first time app is loaded.
  // icebox feature- add login page, handle user/employee acquisition there
  useEffect(()=> {
     (async function() {
        let tmp = {...appState};
        try {
          tmp.employee =  await gettEmployee();
          tmp.employeeUpdating = false;
          console.log("employee retrieved",tmp.employee);
        } catch(e) {
          console.log("could not load employee");
        }
        setAppState(tmp)
    })();
  }, [])
  
  // props for child components
  let punches = [];
  let requests = [];
  let lastPunch = null;

  if(appState.employee) {

    console.log("from component employee:" , appState.employee);

    punches = appState.employee.punches;

    requests = appState.employee.requests;

    if(punches.length) {
      lastPunch = punches[punches.length - 1];
      // convert stored ISO format to date object
      lastPunch.time = new Date(lastPunch.time);
    }
  } else {
    console.log("no employee yet");
  }

  async function updatePunch(punch) {
    let tmp = { ...appState }
    try {
      tmp.employee = await punchInOut(punch, appState.employee);
    } catch(e) {
      tmp.errMsg = "could not update punch"
    }
    tmp.employeeUpdating = false;
    setAppState(tmp);
  }

  function handlePunch(punch){
    let tmp = { ...appState };
    tmp.employeeUpdating = true;
    setAppState(tmp);
    updatePunch(punch);
  }

  if(appState.employee) {
    return (
        <div className="App">
          <ShiftPanel panelLocation="panel--1" shifts={punches}/>
          <ClockPanel 
              panelLocation="panel--2" 
              errorMsg={appState.errMsg}
              employeeUpdating={appState.employeeUpdating}
              handlePunch={handlePunch} 
              lastPunch={lastPunch}/>
          <RequestPanel panelLocation="panel--3" requests={requests}/>
        </div>
    );
  } else {
    return <Loading color='#fff'/>
  }
}

export default App;
