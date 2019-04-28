import React, {Component} from 'react';
import styles from './styles/Home.module.scss'

import BackgroundImage from './BackgroundImage'
import UserUtilities from './UserUtilities'
import SearchModule from './SearchModule'
import TopCategories from './TopCategories'

export const Home = () => {
    return (
        <div className={styles.homeWrapper}>
            <UserUtilities />
            <SearchModule />
            <TopCategories />
            <BackgroundImage />
        </div>
    );
    
};

export default Home;