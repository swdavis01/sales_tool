import React from "react";
import Base from "../classes/base";

class SystemSize extends Base {

    handleChange(e) {
    }

    render() {

        var options = [
            { value: '3', name: '3kW' },
            { value: '4', name: '4kW' },
            { value: '5', name: '5kW' }
        ];

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