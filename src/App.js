
import './App.scss';
import './App.css';

import ShiftPanel from './Layout/ShiftPanel/ShiftPanel';
import ClockPanel from  './Layout/ClockPanel/ClockPanel';
import RequestPanel from './Layout/RequestPanel/RequestPanel';

import useGetUser from './utils/hooks/useGetUser';
import { getLastPunch } from './utils/employee_utils/employee_utils';



function App() {

  const user = useGetUser();

  const lastPunch = getLastPunch(user);

  return (
    <div className="App">
      <ShiftPanel panelLocation="panel--1" shifts={user.shifts}/>
      <ClockPanel panelLocation="panel--2" punches={lastPunch} />
      <RequestPanel panelLocation="panel--3" requests={user.requests}/>
    </div>
  );
}

export default App;
