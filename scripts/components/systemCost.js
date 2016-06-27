import React from "react";

export default React.createClass({

    getInitialState: function() {
        return {value: '4000'};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: function() {
        return (
            <input placeholder="system cost" id={this.props.id} value={this.props.value} onChange={this.props.onChange}/>
        );
    }

});