import React from "react";

export default React.createClass({

    getInitialState: function () {

        var options = [];
        var c = 0;
        for (var i=20; i <= 100; i++)
        {
            options[c] = { value: i, name: i +'%' }
            c++;
            i = (i + 4);
        }

        return {
            value: '60',
            options: options
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