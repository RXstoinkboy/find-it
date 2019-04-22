import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'

// components
import Home from './Home'
import ProductList from './ProductList'
import Product from './Product'

export class App extends Component {
    render() {
        return (
            <>
            hello :)
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/businesses/:category' component={ProductList} />
                <Route exact path='/businesses/:category/:result' component={Product} />
            </Switch>
            </>
        );
    }
}

export default connect(null, null)(App);