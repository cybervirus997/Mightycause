import { Email, Facebook, Lock, PeopleAltOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import styles from './Form.module.css';
import { Link, Redirect } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignUpForm = () => {
  const [disable, setdisable] = useState(true);
  let history = useHistory();
  const [status, setstatus] = useState(false);
  const [formdata, setformdata] = useState({});

  const handlechange = (e) => {
    let email = e.target.value;
    if (e.target.name === 'password') {
      let password = e.target.value;
      if (password.length >= 8) {
        setdisable(false);
      } else {
        setdisable(true);
      }
    }
    if (e.target.name === 'email') {
      if (email.includes('@') && email.includes('.')) {
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
    axios.get('http://localhost:3002/userData').then(function (response) {
      let allusers = response.data;
      let status = false;
      console.log(allusers);
      allusers.forEach((el) => {
        if (el.email === formdata.email) {
          status = true;
        }
      });
      if (!status) {
        axios
          .post('http://localhost:3002/userData', formdata)
          .then(function (response) {});
      }
    });
    history.push('/login');
  };
  let iconStyles = { color: 'rgb(54, 52, 52)', position: 'absolute' };
  const responseGoogle = (res) => {
    console.log(res);
    let data = { ...res.profileObj, events: {} };
    axios.get('http://localhost:3002/userData').then(function (response) {
      console.log(response);
      let allusers = response.data;
      let status = false;
      console.log('aaaa', allusers);
      allusers.forEach((el) => {
        if (el.email === res.profileObj.email) {
          status = true;
        }
      });
      console.log('ssss', status);
      if (!status) {
        axios
          .post('http://localhost:3002/userData', data)
          .then(function (respons) {});
      }
    });

    axios.get('http://localhost:3002/login').then(function (resp) {
      if (resp.data.length === 0) {
        axios
          .post('http://localhost:3002/login', res.profileObj)
          .then(function (ress) {});
        history.push('/');
      } else {
        history.push('/');
      }
    });
  };

  return (
    <div className={styles.formdata}>
      <div className={styles.form}>
        <h1 className={styles.heading}>Complete Sign-Up</h1>
        <div>
          {/* <button className={styles.google}>
            <span>G</span> Use Google
          </button> */}

          <GoogleLogin
            className='google'
            clientId='378817930652-26drd8dhlmr4qet0ilu2qts92m12mpdr.apps.googleusercontent.com'
            render={(renderProps) => (
              <button
                className={styles.google}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}>
                <span>G</span> Use Google
              </button>
            )}
            buttonText='Login'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <div className={styles.befaft}>
          <hr />
          <p>OR</p>
          <hr />
        </div>
        <div className={styles.myform}>
          <PeopleAltOutlined style={iconStyles} />
          <input
            onChange={handlechange}
            type='text'
            name='name'
            id='input'
            placeholder='Name'
          />
          <div>
            <Email style={iconStyles} />
            <input
              onChange={handlechange}
              type='email'
              name='email'
              id='input'
              placeholder='Email'
            />
          </div>
          {status ? (
            <div>
              <Lock style={iconStyles} />
              <input
                onChange={handlechange}
                type='password'
                name='password'
                id='input1'
                placeholder='Password'
              />
              <p className={styles.pwd}>
                Password Should be minimum of 8-Characters
              </p>
            </div>
          ) : null}
          <div>
            {disable ? (
              <input
                disabled={disable}
                className={styles.disable}
                onClick={handlesubmit}
                type='submit'
                value='Continue'
              />
            ) : (
              <input
                disabled={disable}
                className={styles.enable}
                onClick={handlesubmit}
                type='submit'
                value='Continue'
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
