import React from "react";
import ReactDOM from "react-dom";
import Base from "../classes/base";
import Postcode from "./postcode";
import SystemSize from "./systemSize";
import GridRate from "./gridRate";
import DigitalSolarRate from "./digitalSolarRate";
import Consumption from "./consumption";
import SolarUsed from "./solarUsed";
import SystemCost from "./systemCost";

import Summary from "../templates/summary";

class Form extends Base {

    constructor(props) {
        super(props);

        var config = require('Config');

        this.state  = {postcode: '3000', systemSize: 5, gridRate: 37.2, digitalSolarRate: 19.5, consumption: 9000, solarUsed: 60, systemCost: 4000, summaryData: null, config: config};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        console.log( 'handleChange' );
        console.log( e.target.id + ', ' + e.target.value );
        this.setState({[e.target.id]: e.target.value},
            function() {
                console.log( 'setState update' );
                this.getData();
            }
        );
    }

    /*shouldComponentUpdate(newProps, newState) {
        console.log( 'shouldComponentUpdate' );
        this.getData();
        return true;
    }*/

    componentWillUpdate(nextProps, nextState) {
        //console.log( 'componentWillUpdate' );
        //this.getData();
    }

    /*componentDidUpdate(prevProps, prevState) {
        console.log( 'componentDidUpdate' );
        this.getData();
    }*/

    getData() {

        console.log('getData gridRate = ' + this.state.gridRate);
        var gridRateDiscount = parseFloat( 1 - ( parseFloat( this.state.digitalSolarRate ) / parseFloat( this.state.gridRate ) ) );
        var url = this.state.config.orbUrl + '/orb/summary/?gridTariff=' + parseFloat( this.state.gridRate ) + '&llGridRateDiscount=' + gridRateDiscount + '&postcode=' + parseInt( this.state.postcode ) + '&systemGrossCost=' + parseInt( this.state.systemCost ) + '&systemSize=' + parseInt( this.state.systemSize ) + '&consumption=' + parseInt( this.state.consumption ) + '&pmNumberProperties=1&graphType=1';
        console.log(url);

        $.ajax({
            url: url,
            dataType: 'json',
            type: 'GET',
            success: function(result) {
                //console.log('success');
                //console.log(result.data);
                this.state.summaryData = result.data
            }.bind(this),
            error: function(xhr, status, err) {
                //this.setState({data: comments});
                console.error(url, status, err.toString());
            }.bind(this)
        });

    }

    render() {
        return (
            <form className="form">

                <fieldset>

                    <Postcode id={'postcode'} value={this.state.postcode} onChange={this.handleChange}/>
                    <SystemSize id={'systemSize'} value={this.state.systemSize} onChange={this.handleChange}/>
                    <GridRate id={'gridRate'} value={this.state.gridRate} onChange={this.handleChange}/>
                    <DigitalSolarRate id={'digitalSolarRate'} value={this.state.digitalSolarRate} onChange={this.handleChange}/>
                    <Consumption id={'consumption'} value={this.state.consumption} onChange={this.handleChange}/>
                    <SolarUsed id={'solarUsed'} value={this.state.solarUsed} onChange={this.handleChange}/>
                    <SystemCost id={'systemCost'} value={this.state.systemCost} onChange={this.handleChange}/>

                    { this.state.summaryData ? <Summary {...this.state.summaryData}/> : null }
                </fieldset>

            </form>
        );
    }
}

export default Form;