import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import styles from './styles/Slider.module.scss'

// actions
import {prevSlide} from '../../actions/prevSlide'
import {nextSlide} from '../../actions/nextSlide'

// components
import ArrowRight from './ArrowRight'
import ArrowLeft from './ArrowLeft'
import Slide from './Slide'

export class Slider extends Component {

    nextSlide = () => {
        this.props.nextSlide()
    }

    prevSlide = () => {
        this.props.prevSlide()
    }

    componentDidMount(){
        setInterval(this.nextSlide, 9000);
    }

    render(){
        return (
            <div className={styles.slider}>
                <div 
                    id='slidesWrapper'
                    className={styles.slidesWrapper} 
                    style={{transform: `translateX(${-(this.props.currentImage * this.props.viewportWidth)}px)`}} 
                >
                {/* loop over all slides which are stored in Redux */}
                    {this.props.collectedData.map((item, index) => (
                        <Slide key={index} image={item} />
                    ))}
                </div>
                <ArrowLeft prevSlide={this.prevSlide} />
                <ArrowRight nextSlide={this.nextSlide} />
            </div>
        );
    }
};

const mapStateToProps = state => {
    return{
        collectedData: state.bgImages.collectedData,
        currentImage: state.bgImages.currentImage,
        viewportWidth: state.bgImages.viewportWidth
    }
}

const mapDispatchToProps = {
    prevSlide,
    nextSlide
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);

Slider.propTypes = {
    collectedData: PropTypes.array.isRequired,
    currentImage: PropTypes.number.isRequired,
    viewportWidth: PropTypes.number.isRequired,
    prevSlide: PropTypes.func.isRequired,
    nextSlide: PropTypes.func.isRequired
}