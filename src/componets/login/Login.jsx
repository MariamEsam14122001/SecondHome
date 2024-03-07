import PropTypes from 'prop-types'
import { React , useState } from 'react';
import Welcome from '../Welcome/Welcome';
import styles from './login.module.css';
import img from './logsign.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

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
      const response = await axios.post('http://localhost:8000/api/login', formData);
      console.log('Login successful:', response.data);
      navigate('/');
      
    } catch (error) {
      console.error('Login failed:', error);
      return <h1>Login failed : {error}</h1>
      
    }
  
  };


  return (
    <>
    <Welcome/>
    <form onSubmit={handleSubmit} className={styles['container']}>
      <div className={styles['component1']}>
        <div className={styles['frameusersignup']}>
          <span className={styles['text']}>
            
                Login
                
          </span>
          <div >
              <span className={styles['delails']}>Enter your account details</span>   
          </div>
          
          <div className={styles['email-address']}>
              <span>Email Address</span>
          </div>
          <input type='email' id='email' placeholder='email' required
            className={styles['email']} name="email" value={formData.email} onChange={handleChange}
          />
          <span className={styles['pass']}>
            <span>Password</span>
          </span>
          <input type='password' id='password' placeholder='password' required
            className={styles['password']} name="password" value={formData.password} onChange={handleChange}
          />
            
          <button type='submit'  className={styles['button']}>
            <span className={styles['login']}>Login</span>
          </button>
          <div>
           <span className={styles['do']}>Do not have an account?</span>
           <Link to="/Getstarted" className={styles['signup']}>Signup</Link>
          </div>
        </div>
      </div>
    </form>
    </>
  );
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

export default Login;
