import React from "react";
import Base from "../classes/base";
import Label from "./label";

class Postcode extends Base {

    constructor(props) {
        super(props);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (

            <div className={'glyph fs1'}>
                <Label icon={'icon-my_location'} label={'Postcode'} />
                <fieldset className={'fs0 size1of1 clearfix hidden-false'}>
                    <input type="text" className={'unit size1of1'} placeholder="postcode" id={this.props.id} value={this.props.value} maxLength={this.props.maxLength} onChange={this.props.onChange}/>
                </fieldset>
            </div>

        );
    }

}

export default Postcode;