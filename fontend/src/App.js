import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Index from './router/index/Index';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Appointment from './router/appiontment/pages/Appointment';
import Sigup from './router/users/pages/Sigup';
import DataUser from './router/users/pages/user-data';
import Doctor from './router/doctors/pages/Doctor';
import UserProfile from './router/users/pages/user-profile';
import AppoitmentDoctor from './router/appiontment/pages/appointment-doctor';
import UserAppointment from './router/treadment/Appointment';

function App() {
  return (
    <div className='App'>

      <Router>
        <MainNavigation/>
        <main>
          <Switch>

            <Route path='/' exact > 
              <Index/>
            </Route>

            <Route path='/appointment' exact > 
              <Appointment/>
            </Route>

            <Route path='/sigup' exact > 
              <Sigup/>
            </Route>

            <Route path='/sigup/data/:uid' exact > 
              <DataUser/>
            </Route>

            <Route path='/doctor' exact > 
              <Doctor/>
            </Route>

            <Route path='/Profile' exact > 
              <UserProfile/>
            </Route>

            <Route path='/doctor/appointment/:did' exact > 
              <AppoitmentDoctor/>
            </Route>

            <Route path='/user/appointment' exact > 
              <UserAppointment/>
            </Route>


            <Redirect to='/' /> 
          </Switch>
        </main>
      </Router>
  </div>

  );
}

export default App;
