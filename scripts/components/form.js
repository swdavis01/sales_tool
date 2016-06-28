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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log( 'handleChange' );
        console.log( e.target.id + ', ' + e.target.value );
        this.setState({[e.target.id]: e.target.value});
    }

    render() {
        return (
            <form className="commentForm">

                <fieldset>

                    <SystemSize id={'systemSize'} value={this.state.systemSize} onChange={this.handleChange}/>
                    <GridRate id={'gridRate'} value={this.state.gridRate} onChange={this.handleChange}/>
                    <DigitalSolarRate id={'digitalSolarRate'} value={this.state.digitalSolarRate} onChange={this.handleChange}/>
                    <Consumption id={'consumption'} value={this.state.consumption} onChange={this.handleChange}/>
                    <SolarUsed id={'solarUsed'} value={this.state.solarUsed} onChange={this.handleChange}/>
                    <SystemCost id={'systemCost'} value={this.state.systemCost} onChange={this.handleChange}/>

                </fieldset>

            </form>
        );
    }
}

export default Form;