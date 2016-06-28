import React from "react";
import Base from "../classes/base";

class DigitalSolarRate extends Base {

    constructor(props) {
        super(props);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div class="formRow">
                <label>Digital Solar Rate</label>
                <div>
                    <input type="text" placeholder="digital solar rate" id={this.props.id} value={this.props.value} onChange={this.props.onChange}/>
                </div>
            </div>
        );
    }

}

export default DigitalSolarRate;

