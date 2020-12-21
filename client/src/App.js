import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/auth/Dashboard/Dashboard';
import Login from './components/auth/Login/Login';
import Logout from './components/auth/Logout/Logout';
import SignUp from './components/auth/SignUp/SignUp';
import RestList from './components/rest/RestList/RestList';
import DetailedInfo from './components/rest/DetailedInfo/DetailedInfo';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize';

function App() {
  return (
    <>
    <Router>
        <NavBar/>
      <Switch>

        <Route exact path='/'> <RestList /> </Route>

        <Route path='/login'><Login /></Route>

        <Route path='/signup'><SignUp /></Route>

        <Route path='/logout'><Logout /></Route>

        <Route path='/detail/:id'> <DetailedInfo /> </Route>

        <PrivateRoute path='/dashboard'><Dashboard /></PrivateRoute>

      </Switch>
    </Router>
    </>
  );
}

export default App;
