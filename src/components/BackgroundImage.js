import React from 'react'
import styles from './styles/BackgroundImage.module.scss'
import {connect} from 'react-redux'

import PropTypes  from 'prop-types'

const BackgroundImage = props => {
    let content;

    if(props.collectedData.length >= 0){
        content = props.collectedData.map((item, idx) => (
            <div key={idx} className={styles.slide}>
                <img className={idx === 0 ? [styles.bgImage, styles.bgImageActive].join(' ') : styles.bgImage} src={item.image} alt={item.name} />
                <a className={idx === 0 ? [styles.link, styles.linkActive].join(' ') : styles.link} href={item.url}>{item.name}</a>
            </div>
        ))
    }

    return (
        <div className={styles.wrapper}>
            <button className={[styles.button, styles.buttonLeft].join(' ')}></button>
            <button className={[styles.button, styles.buttonRight].join(' ')}></button>
            
            {content}
            
            <div className="dotWrapper">
                {content.map((item, idx) => (
                    <div className="dot" key={idx}></div>        
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        collectedData: state.bgImages.collectedData
    }
}

export default connect(mapStateToProps, null)(BackgroundImage);

BackgroundImage.propTypes = {
    collectedData: PropTypes.array.isRequired
}