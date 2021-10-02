import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './pages';
import Works from './pages/howitwork';
import Guru from './pages/becomeguru';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (<Router>
    <div className="App">

      <div className="auth-wrapper">
        <div className="auth-inner">
         
            <Route exact path="/" component={Home} />
            <Route path="/Works" component={Works}/>
          <Route path="/Guru" component={Guru} />
         
        </div>
      </div>
    </div></Router>
  );
}

export default App;
