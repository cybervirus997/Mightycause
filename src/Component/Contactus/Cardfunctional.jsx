import React from 'react';

import { Link } from 'react-router-dom';
import styles from './Contactus.module.css';

export default function Cardfunctional(props) {
  return (
    <div className={styles['card-functional']}>
      <h1>{props.titlefnc}</h1>
      <p>{props.descriptionfnc}</p>
      <Link to='/fund-raising-solution'>
        <button
          onClick={() => {
            console.log('hello');
          }}>
          {props.btnfnc}
        </button>
      </Link>
    </div>
  );
}
