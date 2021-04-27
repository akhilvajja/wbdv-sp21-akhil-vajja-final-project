import logo from './logo.svg';
import './App.css';
import Home from "./components/home"
import HouseManager from "./components/house-manager";
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Profile from "./components/profile";

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
          <Route path="/" exact={true}  component={Home}/>
          <Route path="/services/house" exact={true} component={HouseManager}/>
            <Route path="/register" exact={true} component={Register}/>
            <Route path="/login" exact={true} component={Login}/>
            <Route path="/profile" exact={true} component={Profile}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
