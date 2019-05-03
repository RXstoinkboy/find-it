import React, {Component} from 'react';
import styles from './styles/Home.module.scss'

import Slider from './Slider/Slider'
import UserUtilities from './UserUtilities'
import SearchModule from './SearchModule/SearchModule'
import TopCategories from './TopCategories'

// search module components
import SearchKeyword from './SearchModule/SearchKeyword'
import Location from './SearchModule//Location'
import SearchButton from './SearchModule//SearchButton'
import CategoryButton from './CategoryButton'

export const Home = () => {
    return (
        <div className={styles.homeWrapper}>
            <Slider>
                {/* <UserUtilities /> */}
                <div className={styles.searchUtilsWrapper}>
                    <SearchModule>
                        <SearchKeyword />
                        <Location />
                        <SearchButton />
                    </SearchModule>
                    <TopCategories>
                        <CategoryButton />
                        <CategoryButton />
                        <CategoryButton />
                    </TopCategories>
                </div>
            </Slider> 
        </div>
    );
    
};

export default Home;