import React, {Component} from 'react'
import styles from './styles/BackgroundImage.module.scss'
import {connect} from 'react-redux'

import PropTypes  from 'prop-types'

export class BackgroundImage extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    handleLeft = () => {
        console.log('left')
    }

    handleRight = e => {
        // const currentActive = (content.find(item => item.props.children[0].props.className == [styles.bgImage, styles.bgImageActive].join(' ')).key)
        // // console.log(content[0].props.children[0].props.className)

        // // change bg image to next in array
        // content[currentActive].props.children[0].props.className = styles.bgImage;
        // content[currentActive + 1].props.children[0].props.className = [styles.bgImage, styles.bgImageActive].join(' ');
        // console.log(currentActive)
    }
    
    render(){
        // render images and corresponding link to Yelp
        // add active classes to first in the row
        let content;

        if(this.props.collectedData.length >= 0){
            content = this.props.collectedData.map((item, idx) => (
                <div key={idx} className={styles.slide}>
                    <img className={idx === 0 ? [styles.bgImage, styles.bgImageActive].join(' ') : styles.bgImage} src={item.image} alt={item.name} />
                    <a className={idx === 0 ? [styles.link, styles.linkActive].join(' ') : styles.link} href={item.url}>{item.name}</a>
                </div>
            ))
        }

        return (
            <div className={styles.wrapper}>
                <button onClick={this.handleLeft} className={[styles.button, styles.buttonLeft].join(' ')}></button>
                <button onClick={this.handleRight} className={[styles.button, styles.buttonRight].join(' ')}></button>
                
                {content}
                
                {/* <div className={styles.dotsWrapper}>
                    {content.map((item, idx) => (
                        <div className={styles.dot} key={idx}></div>        
                    ))}
                </div> */}
            </div>
        );

    }
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