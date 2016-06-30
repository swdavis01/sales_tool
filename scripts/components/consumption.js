import React from "react";
import Base from "../classes/base";

class Consumption extends Base {

    constructor(props) {
        super(props);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div class="formRow">
                <label>Annual Electricity Consumption (KwH)</label>
                <div>
                    <input type="text" placeholder="consumption" id={this.props.id} value={this.props.value} onChange={this.props.onChange}/>
                </div>
            </div>
        );
    }

}

export default Consumption;