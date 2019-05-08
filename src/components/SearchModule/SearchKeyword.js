import React, {Component} from 'react';
import styles from './styles/SearchInput.module.scss'
import PropTypes from 'prop-types'

import ResultsMod from './ResultsMod'

export class SearchKeyword extends Component {
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
            <div className={styles.wrapper}>
                <input 
                    type="search" 
                    placeholder='Search by name, category etc...' 
                    onChange={this.props.handleSearch}
                    onFocus={this.toggleFocus}
                    onBlur={this.toggleFocus}
                    value={this.props.keywordToSearch}
                    className={styles.searchInput} />
                <ResultsMod {...this.props} focus={this.state.focus}/>
            </div>
        );
    }
};

export default SearchKeyword;

SearchKeyword.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    keywordToSearch: PropTypes.string.isRequired
}