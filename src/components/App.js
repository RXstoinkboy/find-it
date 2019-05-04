import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {bgLoad} from '../actions/bgLoad'
import {geolocation} from '../actions/geolocation'
import {getLocation} from '../actions/getLocation'

// components
import Logo from './Logo'
import Home from './Home'
import ProductList from './ProductList'
import Product from './Product'

export class App extends Component {
    
    componentDidMount(){
        const urls = [
            {
                source: '/v3/businesses/LVXDZ167oWvRSyPDt9q18g',
                pictureNumber: 0
            },
            {
                source: '/v3/businesses/camelot-cafe-krak%C3%B3w',
                pictureNumber: 1
            },
            {
                source: '/v3/businesses/trattoria-mamma-mia-krak%C3%B3w-2',
                pictureNumber: 1
            }
        ]
        urls.forEach(item => this.props.bgLoad(item.source, item.pictureNumber));
        this.props.geolocation();
        // this.props.getLocation(this.props.location.lat, this.props.location.long);
    }

    render() {
        return (
            <>
            <Logo large={window.location.pathname !== '/' ? false : true} />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/businesses/:category' component={ProductList} />
                <Route exact path='/businesses/:category/:result' component={Product} />
            </Switch>
            </>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//         location: state.location
//     }
// }

const mapDispatchToProps = {
    bgLoad,
    geolocation,
    getLocation
}

export default connect(null, mapDispatchToProps)(App);

App.propTypes = {
    bgLoad: PropTypes.func.isRequired,
    geolocation: PropTypes.func.isRequired
}