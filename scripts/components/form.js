import React from "react";
import SystemSize from "./systemSize";
import GridRate from "./gridRate";
import DigitalSolarRate from "./digitalSolarRate";
import Consumption from "./consumption";
import SolarUsed from "./solarUsed";
import SystemCost from "./systemCost";

export default React.createClass({

    //this.state.data = {systemSize: '', gridRate: '', digitalSolarRate: '', consumption: '', solarUsed: '', systemCost: ''}

    handleElementChange: function(e) {
        console.log( 'handleElementChange' );
        console.log( e.target.id + ', ' + e.target.value );
        this.setState({[e.target.id]: e.target.value});
    },

    getInitialState: function() {
        return {systemSize: '4', gridRate: '37.2', digitalSolarRate: '20.0', consumption: '9000', solarUsed: '60', systemCost: '4000'};
    },
    handleAuthorChange: function(e) {
        this.setState({author: e.target.value});
    },
    handleTextChange: function(e) {
        this.setState({text: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        console.log(this.state)
        //var author = this.state.author.trim();
        //var text = this.state.text.trim();
        //if (!text || !author) {
            //return;
        //}
       // this.props.onCommentSubmit({author: author, text: text});
        //this.setState({author: '', text: ''});
    },
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>

                <fieldset>

                    <SystemSize id={'systemSize'} value={this.state.systemSize} onChange={this.handleElementChange}/>
                    <GridRate id={'gridRate'} value={this.state.gridRate} onChange={this.handleElementChange}/>
                    <DigitalSolarRate id={'digitalSolarRate'} value={this.state.digitalSolarRate} onChange={this.handleElementChange}/>
                    <Consumption id={'consumption'} value={this.state.consumption} onChange={this.handleElementChange}/>
                    <SolarUsed id={'solarUsed'} value={this.state.solarUsed} onChange={this.handleElementChange}/>
                    <SystemCost id={'systemCost'} value={this.state.systemCost} onChange={this.handleElementChange}/>

                </fieldset>

            </form>
        );
    }
});