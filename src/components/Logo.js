import React from 'react'
import {Link} from 'react-router-dom'
import styles from './styles/Logo.module.scss'

import PropTypes from 'prop-types'

export const Logo = props => {
    return (
        <Link to='/' className={props.large ? styles.wrapper : styles.wrapperSmall }>
            <h1 className={styles.logoText}>
                find it
                <div className={styles.logoMark}>!</div>
            </h1>
            <div className={styles.under}></div>
        </Link>
    );
};

export default Logo;

Logo.propTypes = {
    large: PropTypes.bool
}