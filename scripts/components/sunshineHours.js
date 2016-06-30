import React from "react";
import Base from "../classes/base";
import Label from "./label";

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
        var name3 = 'homeSun' + type;

        if (type == 'Morn') {
            label = 'Morning'
        } else if (type == 'Mid') {
            label = 'Middle Day'
        } else if (type == 'Aftn') {
            label = 'Afternoon'
        }

        var checked1 = <SunshineHoursCheckbox id={name1} value={this.props.value[name1]} onChange={this.props.onChange}/>
        var checked2 = <SunshineHoursCheckbox id={name2} value={this.props.value[name2]} onChange={this.props.onChange}/>
        var checked3 = <SunshineHoursCheckbox id={name3} value={this.props.value[name3]} onChange={this.props.onChange}/>

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

        return (

            <div className={'glyphlarge fs1'}>
                <Label icon={'icon-timer'} label={'Time Spent At Property'} />
                <fieldset className={'fs0 size1of1large clearfix hidden-false'}>
                <div className={'paddingSmall'}>
                    <table className={'size1of1large'}>
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
            </fieldset>
            </div>

        );
    }

}

export default SunshineHours;