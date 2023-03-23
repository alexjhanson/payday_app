
import './App.scss';
import './App.css';

import ShiftPanel from './Layout/ShiftPanel/ShiftPanel';
import RequestPanel from './Layout/RequestPanel/RequestPanel';

function App() {
  return (
    <div className="App">
      <ShiftPanel panelLocation="panel--1" />
      <RequestPanel panelLocation="panel--3" />
    </div>
  );
}

export default App;
