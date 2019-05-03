import React, {Component} from 'react';
import styles from './styles/Home.module.scss'

import Slider from './Slider/Slider'
import UserUtilities from './UserUtilities'
import SearchModule from './SearchModule/SearchModule'
import TopCategories from './TopCategories'

export const Home = () => {
    return (
        <div className={styles.homeWrapper}>
            <Slider />  
            <UserUtilities />
            <SearchModule />
            <TopCategories />
        </div>
    );
    
};

export default Home;