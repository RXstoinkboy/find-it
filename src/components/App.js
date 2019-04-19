import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'

import {connect} from 'react-redux'

// components
import Header from './Header'
import Navigation from './Navigation'
import Home from './Home'
import Footer from './Footer'
import ContactModal from './ContactModal'
import Buy from './Buy'
import Sell from './Sell'
import AboutUs from './AboutUs'
import Contact from './Contact'

export class App extends Component {
    render() {
        return (
            <>
            <Header />
            <Navigation />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/buy' component={Buy} />
                    <Route path='/sell' component={Sell} />
                    <Route path='/about us' component={AboutUs} />
                    <Route path='/contact' component={Contact} />
                </Switch>
            <Footer />
            <ContactModal />
            </>
        );
    }
}

const mapStateToProps =state=>{
    return {
        contactModal: state.contactModal
    }
}

export default connect(mapStateToProps, null)(App);