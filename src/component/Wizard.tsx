import React from "react";
import { PageContext } from "./PageContext";
import Slide from "./Slide";

export default class Wizard extends React.PureComponent {
    static contextType = PageContext;
    render() {
        return (
            <Slide
                isMobile={this.context.isMobile}
                currentPage={this.context.page}
                next={this.context.next}
                setArabic={this.context.setArabic}
                back={this.context.back}
                arabic={this.context.arabic}
            />
        );
    }
}