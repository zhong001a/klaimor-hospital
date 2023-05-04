
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Index from './router/index/Index';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Appointment from './router/appiontment/pages/Appointment';
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
            <Redirect to='/' /> 
          </Switch>
        </main>
      </Router>
  </div>

  );
}

export default App;
