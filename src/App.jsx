import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './page/home/Home';
import Login from './page/login/Login';
import Register from './page/register/Register'

const App = () => {
  return (
    <BrowserRouter>
    <main className="App">
        <Switch>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/">
            <Login />
          </Route>




      </Switch>
    </main>
    </BrowserRouter>

  );
}

export default App;
