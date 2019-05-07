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
            <div className={styles.wrapper}>
                <input 
                    type="search" 
                    placeholder='Search by name, category etc...' 
                    onChange={this.props.handleSearch}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
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