import React, {Component} from 'react';
import styles from './styles/Home.module.scss'
import {connect} from 'react-redux'

import BackgroundImage from './BackgroundImage'
import UserUtilities from './UserUtilities'
import SearchModule from './SearchModule'
import TopCategories from './TopCategories'

import {bgLoad} from '../actions/bgLoad'

export class Home extends Component {

    componentDidMount(){
        const urls = [
            'businesses/LVXDZ167oWvRSyPDt9q18g',
            '/businesses/camelot-cafe-krak%C3%B3w',
            'businesses/trattoria-mamma-mia-krak%C3%B3w-2'
        ]
        this.props.bgLoad(urls[1], 1);
    }
    
    render(){
        return (
            <div className={styles.homeWrapper}>
                <BackgroundImage />
                <UserUtilities />
                <SearchModule />
                <TopCategories />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        collectedData: state.collectedData,
        loading: state.loading
    }
}

const mapDispatchToProps = {
    bgLoad
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);