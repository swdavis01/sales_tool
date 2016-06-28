import React from "react";
import Base from "../classes/base";
import SystemSize from "./systemSize";
import GridRate from "./gridRate";
import DigitalSolarRate from "./digitalSolarRate";
import Consumption from "./consumption";
import SolarUsed from "./solarUsed";
import SystemCost from "./systemCost";

class Form extends Base {

    constructor(props) {
        super(props);
        this.state  = {systemSize: '4', gridRate: '37.2', digitalSolarRate: '20.0', consumption: '9000', solarUsed: '60', systemCost: '4000'};
    }

    handleElementChange(e) {
        console.log( 'handleElementChange' );
        console.log( e.target.id + ', ' + e.target.value );
        this.setState({[e.target.id]: e.target.value});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
        //var author = this.state.author.trim();
        //var text = this.state.text.trim();
        //if (!text || !author) {
            //return;
        //}
       // this.props.onCommentSubmit({author: author, text: text});
        //this.setState({author: '', text: ''});
    }

    render() {
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
}

export default Form;