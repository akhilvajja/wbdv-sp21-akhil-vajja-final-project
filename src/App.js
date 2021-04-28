import './App.css';
import Home from "./components/home"
import HouseManager from "./components/house-manager";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Login from "./components/users/login";
import Register from "./components/users/register";
import Profile from "./components/users/profile";
import MapComponent from "./components/g-maps";

function App() {
  return (
      <BrowserRouter>
        <div className="container-fluid">
            <Link to="/register">
                Register
            </Link>
            <Link to="/login">
                Login
            </Link>
            <Link to="/">
                Home
            </Link>
          <Route path="/" exact={true}  component={Home}/>
          <Route path="/services/house" exact={true} component={HouseManager}/>
            <Route path="/register" exact={true} component={Register}/>
            <Route path="/login" exact={true} component={Login}/>
            <Route path="/profile" exact={true} component={Profile}/>
            <Route path="/maps" exact={true} componenet={MapComponent}/>
        </div>
      </BrowserRouter>
  );
}

export default App;
