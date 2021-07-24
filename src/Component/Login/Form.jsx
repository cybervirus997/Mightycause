import { Email, Facebook, Lock } from "@material-ui/icons";
import React, { useState } from "react";
import styles from "./Form.module.css";
import { Link, Redirect } from "react-router-dom";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Form = () => {
  const dataaaaaa = 4;
  let history = useHistory();
  const [status, setstatus] = useState(false);
  const [formdata, setformdata] = useState({});

  const handlechange = (e) => {
    let email = e.target.value;
    if (e.target.name === "email") {
      if (email.includes("@") && email.includes(".")) {
        setstatus(true);
      } else {
        setstatus(false);
      }
    }
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };
  let iconStyles = { color: "rgb(54, 52, 52)", position: "absolute" };
  const responseGoogle = (res) => {
    console.log(res);
    let data = { ...res.profileObj, events: {} };
    axios.post("http://localhost:3002/userData", data).then(function (response) {});
    axios
      .post("http://localhost:3002/login", res.profileObj)
      .then(function (resp) {})
      .catch((er) => {
        console.log(er);
      });
    history.push("/");
  };
  const responseGoogleFail = () => {
    console.log("fail");
  };

  return (
    <div className={styles.formdata}>
      <div className={styles.form}>
        <h1 className={styles.heading}>Log in or sign up</h1>
        <div>
          {/* <button className={styles.google}>
            <span>G</span> Use Google
          </button> */}

          <GoogleLogin
            className="google"
            clientId="378817930652-26drd8dhlmr4qet0ilu2qts92m12mpdr.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                className={styles.google}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <span>G</span> Use Google
              </button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <div>
          <button className={styles.fb}>
            <span>
              <Facebook />
            </span>
            Use Facebook
          </button>
        </div>
        <div className={styles.befaft}>
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <div className={styles.myform}>
          <Email style={iconStyles} />
          <input onChange={handlechange} type="email" name="email" id="input" placeholder="Email" />
          {status ? (
            <div>
              <Lock style={iconStyles} />
              <input
                onChange={handlechange}
                type="password"
                name="password"
                id="input1"
                placeholder="Password"
              />
            </div>
          ) : null}
          <div>
            <Link to="/dashboard/live">
              <input onClick={handlesubmit} type="submit" value="Continue" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
