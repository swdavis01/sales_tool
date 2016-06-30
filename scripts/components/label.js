import React from "react";
import Base from "../classes/base";

class Label extends Base {

    constructor(props) {
        super(props);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (

           <div className={'clearfix bshadow0 pbs'}>
                <span className={this.props.icon}></span>
                <span className={'mls'}>{this.props.label}</span>
            </div>

        );
    }

}

export default Label;