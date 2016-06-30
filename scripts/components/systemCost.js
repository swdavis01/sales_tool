import React from "react";
import Base from "../classes/base";

class SystemCost extends Base {

    constructor(props) {
        super(props);
    }

    /*handleChange(event) {
        this.setState({value: event.target.value});
    }*/

    render() {
        return (
            <div class="formRow">
                <label>System Cost</label>
                <div>
                    <input placeholder="system cost" id={this.props.id} value={this.props.value} maxLength={this.props.maxLength} onChange={this.props.onChange}/>
                </div>
            </div>
        );
    }

}

export default SystemCost;