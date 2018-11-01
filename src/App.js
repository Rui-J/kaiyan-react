import React, {
  Component
} from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import "./App.css";
import main from "./pages/main";

class App extends Component {
  render(){
    return(
      <Router>
         <Route path="/" exact component={main} />
      </Router>
    )
  }
}

export default App;