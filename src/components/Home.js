import React, {Component} from 'react';
import styles from './styles/Home.module.scss'

import BackgroundImage from './BackgroundImage'
import UserUtilities from './UserUtilities'
import SearchModule from './SearchModule'
import TopCategories from './TopCategories'

export const Home = () => {
    return (
        <div className={styles.homeWrapper}>
            <BackgroundImage />
            <UserUtilities />
            <SearchModule />
            <TopCategories />
        </div>
    );
    
};

export default Home;