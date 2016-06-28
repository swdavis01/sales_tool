import React from "react";

class Base extends React.Component {

    constructor(props) {
        super(props);
        console.log('Im Mr Meseeks! Look at me! ' + props.id);
        //this.state = { name: this.props.initialName };
        //this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        //let { value } = e.target;
        //this.setState({ name: value });
    }

    render() {
        return('');
    }
}

export default Base;