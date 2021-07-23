import './App.css';
import { Home } from './Component/Home/Home';
import { Switch, Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import SideNavbar from './Component/Dashboard/Navbar';
import { Live } from './Component/Dashboard/Live';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/dashboard' component={SideNavbar}></Route>
        <Route exact path='/dashboard/live' component={Live}></Route>
      </Switch>
    </div>
  );
}

export default App;
