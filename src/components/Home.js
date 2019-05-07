import React, {Component} from 'react';
import styles from './styles/Home.module.scss'
import {connect} from 'react-redux'

import {getLocation} from '../actions/getLocation'
import {searchKeyword} from '../actions/searchKeyword'
import {autocomplete} from '../actions/autocomplete'

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
    constructor(props){
        super(props);
        this.state = {
            typingKeyword: 0,
            typingCity: 0
        }
    }
    handleSetCity = e => {
        // change city name by typing

        // the same as with autocomplete let's proceed to communicate with World Cities DB
        this.props.getLocation(null, null, e.target.value)
    }
    
    handleSearch = e => {
        if(this.state.typingKeyword){
            clearTimeout(this.state.typingKeyword)
        }
        this.setState({
            // typingKeyword: setTimeout(()=>{console.log('typing')}, 2000)
            typingKeyword: setTimeout(()=>{this.props.autocomplete(this.props.keywordToSearch, this.props.lat, this.props.long)}, 500)

        })

        this.props.searchKeyword(e.target.value)
    }

    render(){
        return (
            <div className={styles.homeWrapper}>
                <Slider>
                    {/* <UserUtilities /> */}
                    <div className={styles.searchUtilsWrapper}>
                        <SearchModule>
                            <SearchKeyword 
                            {...this.props} handleSearch={this.handleSearch}/>
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
        city: state.location.city,
        keywordToSearch: state.data.keywordToSearch,
        autocompleteResults: state.data.autocompleteResults,
        lat: state.location.lat,
        long: state.location.long
    }
}

const mapDispatchToProps = {
    getLocation,
    searchKeyword,
    autocomplete
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);