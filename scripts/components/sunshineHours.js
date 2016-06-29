import React from "react";
import Base from "../classes/base";

var SunshineHoursCheckbox = class SunshineHoursCheckbox extends Base {
    render() {
        return (
            <input type="checkbox" id={this.props.id} checked={this.props.value} value={this.props.value} onChange={this.props.onChange} />
        );
    }
}

class SunshineHours extends Base {

    constructor(props) {
        super(props);
    }

    handleChange(e) {
    }

    getRow( type ) {

        var label = '';
        var name1 = 'homeMonFri' + type;
        var name2 = 'homeSat' + type;
        var name3 = 'homeSat' + type;
        var checked1 = '';
        var checked2 = '';
        var checked3 = '';

        if (type == 'Morn') {
            label = 'Morning'
        } else if (type == 'Mid') {
            label = 'Middle Day'
        } else if (type == 'Aftn') {
            label = 'Afternoon'
        }

        //console.log('this.props.value[name1] = ' + this.props.value[name1]);
        //console.log(this.props.value);
        checked1 = <SunshineHoursCheckbox id={name1} value={this.props.value[name1]} onChange={this.props.onChange}/>
        checked2 = <SunshineHoursCheckbox id={name2} value={this.props.value[name2]} onChange={this.props.onChange}/>
        checked3 = <SunshineHoursCheckbox id={name3} value={this.props.value[name3]} onChange={this.props.onChange}/>
        if (this.props.value[name1] == 1) {
        }
        if (this.props.value[name2] == 1) {
        }
        if (this.props.value[name3] == 1) {
        }

        return (
        <tr>
            <td>
                {checked1}
            </td>
            <td>
                {label}
            </td>
            <td>
                {checked2}
            </td>
            <td>
                {label}
            </td>
            <td>
                {checked3}
            </td>
            <td>
                {label}
            </td>
        </tr> )
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
                <label>Time Spent At Property</label>
                <div>
                    <table>
                    <thead>
                    <tr>
                        <th>
                        </th>
                        <th>
                            Mon-Fri
                        </th>
                        <th>
                        </th>
                        <th>
                            Saturday
                        </th>
                        <th>
                        </th>
                        <th>
                            Sunday
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.getRow( 'Morn' )}
                    {this.getRow( 'Mid' )}
                    {this.getRow( 'Aftn' )}
                    </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default SunshineHours;