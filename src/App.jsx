import "./App.css";
import { Home } from "./Component/Home/Home";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./Component/Login/Login";
import SideNavbar from "./Component/Dashboard/Navbar";
import { Live } from "./Component/Dashboard/Live";
import Contactus from "./Component/Contactus/Contactus";
import Main from "./Component/FundraisingSolution/Main";
import Donation from "./Component/FundraisingSolution/Donation";
import Searchpage from "./Component/Searchtab/Searchpage";
import Signup from "./Component/Login/Signup";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  let [auth, setauth] = useState({});
  // let [authstatus, setauthstatus] = useState(false);
  useEffect(() => {
    axios.get("https://ravi-mightycause-server.herokuapp.com/login").then(function (response) {
      setauth(response.data[0]);
    });
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/dashboard/live" component={Live}></Route>
        <Route exact path="/Contact-Us" component={Contactus}></Route>
        <Route exact path="/fund-raising-solution" component={Main}></Route>
        <Route exact path="/Donation" component={Donation}></Route>
        <Route exact path="/search" component={Searchpage}></Route>
        <Route exact path="/sign-up" component={Signup}></Route>
      </Switch>
    </div>
  );
}

export default App;
