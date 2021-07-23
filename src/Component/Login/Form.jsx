import { Email, Facebook } from '@material-ui/icons';
import React from 'react';
import styles from './Form.module.css';
import { Link } from 'react-router-dom';

const Form = () => {
  let iconStyles = { color: 'rgb(54, 52, 52)', position: 'absolute' };

  return (
    <div className={styles.formdata}>
      <div className={styles.form}>
        <h1 className={styles.heading}>Log in or sign up</h1>
        <div>
          <button className={styles.google}>
            <span>G</span> Use Google
          </button>
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
          <input type='email' name='' id='input' placeholder='Email' />
          <div>
            <Link to='/dashboard'>
              <input type='submit' value='Continue' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
