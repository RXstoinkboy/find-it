import React, {Component} from 'react';
import styles from './styles/Home.module.scss'

import Slider from './Slider/Slider'
import UserUtilities from './UserUtilities'
import SearchModule from './SearchModule/SearchModule'
import TopCategories from './TopCategories'

import CategoryButton from './CategoryButton'

export const Home = () => {
        return (
            <div className={styles.homeWrapper}>
                <Slider>
                    {/* <UserUtilities /> */}
                    <div className={styles.searchUtilsWrapper}>
                        <SearchModule />
                        <TopCategories>
                            <CategoryButton title='Restaurants' />
                            <CategoryButton title='Nightlife'/>
                            <CategoryButton title='Food Delivery Service'/>
                        </TopCategories>
                    </div>
                </Slider> 
            </div>
        );
    }

export default Home;