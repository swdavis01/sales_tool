import React from "react";

export default React.createClass({

    getInitialState: function () {
        return {
            value: '4',
            options: [
                { value: '3', name: '3kW' },
                { value: '4', name: '4kW' },
                { value: '5', name: '5kW' }
            ]
        };
    },
    handleChange: function (e) {
        this.state.value = e.target.value;
        this.forceUpdate();
    },
    render: function () {
        var createItem = function (item, key) {
            return <option key={key} value={item.value}>{item.name}</option>;
        };
        return (
            <select id={this.props.id} value={this.props.value} onChange={this.props.onChange}>
                {this.state.options.map(createItem)}
            </select>
        );
    }

});