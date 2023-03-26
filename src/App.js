
import './App.scss';
import './App.css';

import ShiftPanel from './Layout/ShiftPanel/ShiftPanel';
import ClockPanel from  './Layout/ClockPanel/ClockPanel';
import RequestPanel from './Layout/RequestPanel/RequestPanel';

function App() {
  return (
    <div className="App">
      <ShiftPanel panelLocation="panel--1" />
      <ClockPanel panelLocation="panel--2" />
      <RequestPanel panelLocation="panel--3" />
    </div>
  );
}

export default App;
