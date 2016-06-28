import React from "react";
import Base from "../classes/base";

class Postcode extends Base {

    constructor(props) {
        super(props);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div class="formRow">
                <label>Postcode</label>
                <div>
                    <input type="text" placeholder="postcode" id={this.props.id} value={this.props.value} onChange={this.props.onChange}/>
                </div>
            </div>
        );
    }

}

export default Postcode;