import React, {Component} from 'react';
import styles from './styles/Home.module.scss'
import {connect} from 'react-redux'

import {getLocation} from '../actions/getLocation'

import Slider from './Slider/Slider'
import UserUtilities from './UserUtilities'
import SearchModule from './SearchModule/SearchModule'
import TopCategories from './TopCategories'

// search module components
import SearchKeyword from './SearchModule/SearchKeyword'
import Location from './SearchModule//Location'
import SearchButton from './SearchModule//SearchButton'
import CategoryButton from './CategoryButton'

export class Home extends Component {
    handleSetCity = e => {
        console.log(e.target.value);
        this.props.getLocation(null, null, e.target.value)
    }
    
    render(){
        return (
            <div className={styles.homeWrapper}>
                <Slider>
                    {/* <UserUtilities /> */}
                    <div className={styles.searchUtilsWrapper}>
                        <SearchModule>
                            <SearchKeyword />
                            <Location 
                            {...this.props} handleSetCity={this.handleSetCity}/>
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
    }
    
};
const mapStateToProps = state => {
    return {
        city: state.location.city
    }
}

const mapDispatchToProps = {
    getLocation
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);