import React, {Component} from 'react';
import styles from './styles/SearchModule.module.scss'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {history} from '../../store'

import {getLocation} from '../../actions/getLocation'
import {searchKeyword} from '../../actions/searchKeyword'
import {autocomplete} from '../../actions/autocomplete'
import {latLong} from '../../actions/latLong'
import {getBusinessesList} from '../../actions/getBusinessesList'

// search module components
import SearchKeyword from './SearchKeyword'
import Location from './Location'
import SearchButton from './SearchButton'

export class SearchModule extends Component {
    constructor(props){
        super(props);
        this.state = {
            typingKeyword: 0,
            typingCity: 0
        }
    }
    handleSetCity = e => {
        // change city name by typing
        this.props.getLocation(null, null, e.target.value);

        if(this.state.typingCity){
            clearTimeout(this.state.typingCity)
        }

        if(this.props.city !== ''){
            this.setState({
                typingCity: setTimeout(()=>{this.props.latLong(this.props.city)}, 500)
            })
        }
    }
    
    handleSearch = e => {
        if(this.state.typingKeyword){
            clearTimeout(this.state.typingKeyword)
        }

        // if(this.props.keywordToSearch !== ''){
            this.setState({
                // typingKeyword: setTimeout(()=>{console.log('typing')}, 2000)
                typingKeyword: setTimeout(()=>{this.props.autocomplete(this.props.keywordToSearch, this.props.lat, this.props.long)}, 500)
    
            })
        // }
        console.log(e.target.value);
        this.props.searchKeyword(e.target.value)
    }

    handlePickWord = e => {
        this.props.searchKeyword(e.target.innerText)
    }

    handlePickCity = e => {
        this.props.getLocation(null, null, e.target.innerText);
    }

    handleGetBusinessesList = (e=null) => {
        // this would be a valid working way to launch a function to search for results from API + change current path
        this.props.getBusinessesList(this.props.keywordToSearch, this.props.city);
        e.preventDefault();

        history.push(`/businesses/results?term=${this.props.keywordToSearch}&city=${this.props.city}`);
    }

    componentDidMount(){
        window.addEventListener('submit', ()=> this.props.getBusinessesList(this.props.keywordToSearch, this.props.city))
    }
    
    componentWillUnmount(){
        window.removeEventListener('submit', ()=> this.props.getBusinessesList(this.props.keywordToSearch, this.props.city))
    }

    render(){
        return (
            <form className={!this.props.filters ? styles.wrapper : styles.wrapperFilters}>
                <SearchKeyword 
                    {...this.props} handleSearch={this.handleSearch} handlePickWord={this.handlePickWord} />
                <Location 
                    {...this.props} handleSetCity={this.handleSetCity} handlePickCity={this.handlePickCity}/>
                <SearchButton handleGetBusinessesList={this.handleGetBusinessesList} {...this.props}/>
            </form>
        );
    }
};
const mapStateToProps = state => {
    return {
        city: state.location.city,
        keywordToSearch: state.data.keywordToSearch,
        autocompleteResults: state.data.autocompleteResults,
        cities: state.location.cities,
        lat: state.location.lat,
        long: state.location.long
    }
}

const mapDispatchToProps = {
    getLocation,
    searchKeyword,
    autocomplete,
    latLong,
    getBusinessesList
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchModule);

SearchModule.propTypes = {
    city: PropTypes.string.isRequired,
    keywordToSearch: PropTypes.string.isRequired,
    autocompleteResults: PropTypes.object.isRequired,
    cities: PropTypes.array.isRequired,
    lat: PropTypes.number,
    long: PropTypes.number,
    getLocation: PropTypes.func.isRequired,
    searchKeyword: PropTypes.func.isRequired,
    autocomplete: PropTypes.func.isRequired,
    latLong: PropTypes.func.isRequired,
    getBusinessesList: PropTypes.func.isRequired
}