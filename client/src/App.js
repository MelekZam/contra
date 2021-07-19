import './App.css';
import Landing from './views/Landing';
import Auth from './views/Auth'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
