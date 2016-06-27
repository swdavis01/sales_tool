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
        return {systemSize: '', gridRate: '', digitalSolarRate: '', consumption: '', solarUsed: '', systemCost: ''};
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
            <table>
                <tbody>
                <tr>
                    <th>
                        <div class="formLabel">System Size:</div>
                    </th>
                    <td>
                        <div class="formComponent"><SystemSize id={'systemSize'} value={this.state.systemSize} onChange={this.handleElementChange}/></div>
                    </td>
                    <th>
                        <div class="formLabel">Grid Rate:</div>
                    </th>
                    <td>
                        <div class="formComponent"><GridRate id={'gridRate'} value={this.state.gridRate} onChange={this.handleElementChange}/></div>
                    </td>
                    <th>
                        <div class="formLabel">Digital Solar Rate:</div>
                    </th>
                    <td>
                        <div class="formComponent"><DigitalSolarRate id={'digitalSolarRate'} value={this.state.digitalSolarRate} onChange={this.handleElementChange}/></div>
                    </td>
                </tr>
                <tr>
                    <th>
                        <div class="formLabel">Annual Electricity Consumption:</div>
                    </th>
                    <td>
                        <div class="formComponent"><Consumption id={'consumption'} value={this.state.consumption} onChange={this.handleElementChange}/></div>
                    </td>
                    <th>
                        <div class="formLabel">% of Digital Solar Used:</div>
                    </th>
                    <td>
                        <div class="formComponent"><SolarUsed id={'solarUsed'} value={this.state.solarUsed} onChange={this.handleElementChange}/></div>
                    </td>
                    <th>
                        <div class="formLabel">System Cost:</div>
                    </th>
                    <td>
                        <div class="formComponent"><SystemCost id={'systemCost'} value={this.state.systemCost} onChange={this.handleElementChange}/></div>
                    </td>
                </tr>
                </tbody>
            </table>
            <input type="submit" value="Post" />
            </form>
        );
    }
});