import React, {Component} from 'react';
import styles from './styles/SearchKeyword.module.scss'
import PropTypes from 'prop-types'

import ResultsMod from './ResultsMod'
import { AST_Label } from 'terser';

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
            <>
                {this.props.filters && <label htmlFor='searchKeyword' className={styles.labelFilters}>search</label>}
                <div className={styles.wrapper}>
                    <input 
                        type="search" 
                        id='searchKeyword'
                        placeholder='Search by name, category etc...' 
                        onChange={this.props.handleSearch}
                        onFocus={this.toggleFocus}
                        onBlur={this.toggleFocus}
                        value={this.props.keywordToSearch}
                        className={!this.props.filters ? styles.searchInput : styles.searchInputFilters} />
                    <ResultsMod {...this.props} focus={this.state.focus}/>
                </div>
            </>
        );
    }
};

export default SearchKeyword;

SearchKeyword.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    keywordToSearch: PropTypes.string.isRequired
}