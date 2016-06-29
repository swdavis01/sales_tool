import React from "react";
import Base from "../classes/base";

class SystemSize extends Base {

    constructor(props) {
        super(props);
    }

    handleChange(e) {
    }

    render() {

        var options = [];
        var c = 0;
        for (var i=3; i <= 40; i++)
        {
            options[c] = { value: i, name: i +'kW' }
            c++;
            if (i >= 5) {
                i = (i + 4);
            }
        }

        var createItem = function (item, key) {
            return <option key={key} value={item.value}>{item.name}</option>;
        };

        return (
            <div class="formRow">
                <label >System Size</label>
                <div>
                    <select id={this.props.id} value={this.props.value} onChange={this.props.onChange}>
                        {options.map(createItem)}
                    </select>
                </div>
            </div>
        );
    }

}

export default SystemSize;