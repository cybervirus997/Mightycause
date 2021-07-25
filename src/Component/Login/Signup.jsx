import logo from './Logo.jpg';
import React from 'react';
import Footer from './Footer';
import styles from './Login.module.css';
import SignUpForm from './SignUpForm';
import { ExploreOutlined, SearchOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Signup = () => {
  let iconStyles = { color: 'rgb(97, 136, 253)' };
  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.leftlink}>
          <button>
            <ExploreOutlined style={iconStyles} color='primary' />
          </button>
        </div>
        <Link to='/'>
          <div className={styles.logo}>
            <img src={logo} alt='' />
            <h3 className={styles.name}>mightycause</h3>
          </div>
        </Link>
        <div className={styles.rightlink}>
          <button>
            <SearchOutlined style={iconStyles} color='primary' />
          </button>
        </div>
      </div>
      <div>
        <SignUpForm />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Signup;
