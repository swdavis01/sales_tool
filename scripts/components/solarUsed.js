import React from "react";
import Base from "../classes/base";

class SolarUsed extends Base {

    constructor(props) {
        super(props);
    }

    handleChange(e) {
    }

    render() {

        var options = [];
        var c = 0;
        for (var i=20; i <= 100; i++)
        {
            options[c] = { value: i, name: i +'%' }
            c++;
            i = (i + 4);
        }

        var createItem = function (item, key) {
            return <option key={key} value={item.value}>{item.name}</option>;
        };

        return (
            <div class="formRow">
                <label>% of Digital Solar Used</label>
                <div>
                    <select id={this.props.id} value={this.props.value} onChange={this.props.onChange}>
                        {options.map(createItem)}
                    </select>
                </div>
            </div>
        );
    }

}

export default SolarUsed;