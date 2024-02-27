import React from 'react'
import styles from './welcome.module.css'

const Welcome = (props) => {
  return (
    
    
      <div className={styles['welcomecomponent']}>
        <span className={styles['text']}> Welcome To SecondHome</span>
        <img
          alt={props.iMAGEAlt}
          src={props.iMAGESrc}
          className={styles['image']}
        />
      </div>
    
    
  )
}



export default Welcome
