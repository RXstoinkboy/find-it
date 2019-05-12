import React from 'react'
import styles from './styles/TopBar.module.scss'
import Logo from '../Logo'

const TopBar = () => {
    return (
        <div className={styles.topBar}>
            <Logo />
        </div>
    );
};

export default TopBar;