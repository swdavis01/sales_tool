import React from "react";
import Base from "../classes/base";

class GridRate extends Base {

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div class="formRow">
                <label>Grid Rate</label>
                <div>
                    <input type="text" placeholder="grid rate" id={this.props.id} value={this.props.value} onChange={this.props.onChange}/>
                </div>
            </div>
        );
    }

}

export default GridRate;