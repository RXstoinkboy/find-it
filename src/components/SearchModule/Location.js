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

    toggleFocus = e => {
        this.setState({
            focus: !this.state.focus
        })
    }

    render(){
        return (
            <div className={utils.wrapper}>
                <input 
                    type="search" 
                    placeholder='Where are you?' 
                    onChange={this.props.handleSetCity}
                    onFocus={this.toggleFocus}
                    onBlur={this.toggleFocus}
                    className={styles.location} 
                    value={this.props.city}/>
                <CitiesMod {...this.props} focus={this.state.focus} />
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