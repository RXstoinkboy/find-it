import React from 'react';
import styles from './styles/Location.module.scss'

const Location = props => {
    return (
        <input 
            type="search" 
            placeholder='Where are you?' 
            onChange={props.handleSetCity}
            className={styles.location} 
            value={props.city}/>
    );
};

export default Location;