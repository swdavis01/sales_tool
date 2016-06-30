import React from "react";
import Base from "../classes/base";
import Label from "./label";

class Consumption extends Base {

    constructor(props) {
        super(props);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (

            <div className={'glyph fs1'}>
                <Label icon={'icon-grid_on'} label={'Yearly Grid KwH'} />
                <fieldset className={'fs0 size1of1 clearfix hidden-false'}>
                    <input className={'unit size1of1'} type="text" placeholder="consumption" id={this.props.id} value={this.props.value} maxLength={this.props.maxLength} onChange={this.props.onChange}/>
                </fieldset>
            </div>
        );
    }

}

export default Consumption;