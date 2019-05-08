import React from 'react';
import styles from './styles/ResultsMod.module.scss'
import PropTypes from 'prop-types'

export const ResultsMod = props => {
    return (
        // display the box only if input is focused
        <div className={props.focus && props.keywordToSearch.length > 0 ? [styles.wrapper, styles.wrapperActive].join(' ') : styles.wrapper} >
        {/* display list of categories which were found from autocomplete query */}
            {Object.keys(props.autocompleteResults).map(section => (
                <section className={styles.section} key={section}>
                {/* display the title of each category but only if it is not empty */}
                    <h4 className={styles.sectionTitle}>{
                        props.autocompleteResults[section].length > 0 ?
                            section
                                : null
                    }</h4>
                    {/* display content of each category */}
                    <ul className={styles.contentList}>
                        {props.autocompleteResults[section].map((item, idx) => (
                            <li 
                                onMouseDown={props.handlePickWord}
                                value={
                                    section === 'categories' ? item.title
                                        : section === 'businesses' ? item.name
                                            : item.text
                                }
                                className={styles.contentItem} 
                                key={idx}
                            >
                                {
                                    section === 'categories' ? item.title
                                        : section === 'businesses' ? item.name
                                            : item.text
                                }
                            </li>
                        ))}
                    </ul>
                </section>
            ))}

        </div>
    );
};

export default ResultsMod;

ResultsMod.propTypes = {
    focus: PropTypes.bool.isRequired,
    keywordToSearch: PropTypes.string.isRequired,
    autocompleteResults: PropTypes.object,
    handlePickWord: PropTypes.func
}