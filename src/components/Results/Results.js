import React from 'react';
import styles from './styles/Results.module.scss'

// components
import ResultList from './ResultList'
import Result from './Result'
import ResizeSlider from './ResizeSlider'
import Pages from './Pages'
import FilterOptions from '../Filters/FilterOptions'

export const Results = () => {
    return (
        <section className={styles.results}>
            <FilterOptions title='sort' end/>
            <ResultList>
                <Result />
                <Result />
                <Result />
                <Result />
                <Result />
                <Result />
                <Result />
                <Result />
                <Result />
                <Result />
                <Result />
                <Result />
                <Result />
            </ResultList>
            <ResizeSlider />
            <Pages />
        </section>
    );
};

export default Results;