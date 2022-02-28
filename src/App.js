
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import noteState from './context/notes/noteState';

function App() {
  return (
    <>
    <noteState>
    <Router>
     <Navbar/>
     <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
     </Router>
     </noteState>
      </>
  );
}

export default App;
