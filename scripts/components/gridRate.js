import React from "react";

export default React.createClass({

    getInitialState: function() {
        return {value: '37.2'};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: function() {
        return (
            <input type="text" placeholder="grid rate" id={this.props.id} value={this.props.value} onChange={this.props.onChange}/>
        );
    }

});