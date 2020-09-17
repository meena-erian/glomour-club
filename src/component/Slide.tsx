import React from "react";
import Slides from "../Slides";

interface SlideProps {
    isMobile: boolean;
    currentPage: number;
    next: Function;
    setArabic: Function;
    back: Function;
};

export default class Slide extends React.PureComponent<SlideProps>{
    render() {
        const CurrentSlide = Slides[this.props.currentPage]
        return <CurrentSlide
            isMobile={this.props.isMobile}
            index={this.props.currentPage}
            next={this.props.next}
            setArabic={this.props.setArabic}
            back={this.props.back}
        />
    }
}