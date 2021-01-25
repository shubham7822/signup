import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./components/Details/Detail";
function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/detail'>
            <Detail/>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
