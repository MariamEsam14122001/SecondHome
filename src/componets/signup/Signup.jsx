import React, { useState } from 'react';
import axios from 'axios';
import Welcome from '../Welcome/Welcome';
import styles from './signup.module.css';
import PropTypes from 'prop-types';
import img from './logsign.png';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';

const Signup = () => {
  const { userType } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    status: '',
    gender: '',
    age: '',
    city: '',
    where_to_go: '',
    phone: '',
  });

  const [error] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/register', { ...formData, user_type: userType });
      console.log('Signup successful:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Signup failed:', error);
      //setError(error.response.data.message || 'An error occurred during registration.');
    }
  };

  return (
    <>
      <Welcome/>
      <form onSubmit={handleSubmit} className={styles['container']}>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles['component1']}>
          <div className={styles['frameusersignup']}>
            <span className={styles['text']}>
              <span>Create Account</span>
            </span>
            <div className={styles['full-name']}>
              <span>Full Name</span>
            </div>
            <div>
              <input type='text' id='name' required
                className={styles['fullname']} name="name" value={formData.name} onChange={handleChange}/>
            </div>
            <div className={styles['email-address']}>
              <span>Email Address</span>
            </div>
            <input type='email' id='email' required
              className={styles['email']}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <span className={styles['pass']}>
              <span>Password</span>
            </span>
            <input type='password' id='password' required
              className={styles['password']} name="password" value={formData.password} onChange={handleChange}
            />
            {(userType === 'renter' || userType === 'user') && (
              <>
                <span className={styles['stat']}>
                  <span>Status</span>
                </span>
                <input type='text' id='status'
                  className={styles['status']} name="status" value={formData.status} onChange={handleChange}
                />
                <span className={styles['gend']}>
                  <span>Gender</span>
                </span>
                <input type='text' id='gender'
                  className={styles['gender']} name="gender" value={formData.gender} onChange={handleChange}
                />
                <span className={styles['ag']}>
                  <span>Age</span>
                </span>
                <input type='number' min={15} max={99} id='age'
                  className={styles['age']} name="age" value={formData.age} onChange={handleChange}
                />
                <span className={styles['citee']}>
                  <span>City</span>
                </span>
                <input type='text' id='city'
                  className={styles['city']} name="city" value={formData.city} onChange={handleChange}
                />
                <span  className={styles['phone-number']}>Phone number</span>
                <input type='tel'  id='phone'
                  className={styles['phone']} name="phone" value={formData.phone} onChange={handleChange}/>
                <span className={styles['where']}>
                  <span>Where to go</span>
                </span>
                <input type='text' id='where_to_go'
                  className={styles['wheretogo']} name="where_to_go" value={formData.where_to_go} onChange={handleChange}
                />
              </>
            )}
            <button type='submit' className={styles['button']}>
              <span className={styles['create-account']}>Create Account</span>
            </button>
            <div>
              <span className={styles['already']}>Already have an account?</span>
              <Link to="/Login" className={styles['login']}>Login</Link>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

Welcome.defaultProps = {
  iMAGESrc:
    img ,
  iMAGEAlt: 'IMAGE',
}

Welcome.propTypes = {
  iMAGESrc: PropTypes.string,
  iMAGEAlt: PropTypes.string,
}

export default Signup;