// styles
import './App.scss';
import './App.css';

// UI components
import ShiftPanel from './components/ShiftPanel/ShiftPanel';
import ClockPanel from  './components/ClockPanel/ClockPanel';
import RequestPanel from './components/RequestPanel/RequestPanel';
import Loading from './components/Loading/Loading'

// state (Hooks) & helper functions
import initApp from './utils/initApp';
import { useState, useEffect } from 'react';

export default function App() {

  // Configure state
  const [employee, setEmployee] = useState(null);
  
  // initialize state
  // eslint-disable-next-line
  useEffect(()=> {
    initApp(setEmployee);
  }, []);

  if(employee) {
    return (
        <div className="App">
          <ShiftPanel panelLocation="panel--1" empId={employee._id} />
          <ClockPanel panelLocation="panel--2" empId={employee._id}/> 
          <RequestPanel panelLocation="panel--3" empId={employee._id}/>
        </div>
    );
  } else {
    return <Loading color='rgb(232,85,61)'/>
  }
};

