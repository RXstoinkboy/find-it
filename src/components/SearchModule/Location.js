import React, {Component} from 'react';
import styles from './styles/Location.module.scss'
import utils from './styles/SearchInput.module.scss'
import PropTypes from 'prop-types'

import CitiesMod from './CitiesMod'

export class Location extends Component {
    constructor(props){
        super(props);
        this.state = {
            focus: false
        }
    }

    handleFocus = e => {
        this.setState({
            focus: true
        })
    }
    handleBlur = e => {
        this.setState({
            focus: false
        })
    }

    render(){
        return (
            <div className={utils.wrapper}>
                <input 
                    type="search" 
                    placeholder='Where are you?' 
                    onChange={this.props.handleSetCity}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    className={styles.location} 
                    value={this.props.city}/>
                <CitiesMod {...this.props} focus={this.state.focus}/>
            </div>
        );
    }
};

export default Location;

Location.propTypes = {
    handleSetCity: PropTypes.func.isRequired,
    city: PropTypes.string.isRequired,
    cities: PropTypes.array.isRequired
}