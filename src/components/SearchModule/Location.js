import React from 'react';
import styles from './styles/Location.module.scss'
import PropTypes from 'prop-types'

export const Location = props => {
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

Location.propTypes = {
    handleSetCity: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired
}