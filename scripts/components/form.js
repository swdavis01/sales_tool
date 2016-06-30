import React from "react";
import ReactDOM from "react-dom";
import Base from "../classes/base";
import Postcode from "./postcode";
import SystemSize from "./systemSize";
import GridRate from "./gridRate";
import DigitalSolarRate from "./digitalSolarRate";
import Consumption from "./consumption";
import SolarUsed from "./solarUsed";
import SunshineHours from "./sunshineHours";
import SystemCost from "./systemCost";
import Errors from "./errors";
import Validate from "../classes/Validate";

import Summary from "../templates/summary";

class Form extends Base {

    constructor(props) {
        super(props);

        var config = require('Config');

        this.state  = {
            postcode: '3000',
            systemSize: 5,
            gridRate: 37.2,
            digitalSolarRate: 19.5,
            consumption: 9000,
            solarUsed: 60,
            systemCost: 4000,
            homeMonFriAftn: 1,
            homeMonFriAll: 0,
            homeMonFriMid: 1,
            homeMonFriMorn: 0,
            homeMonFriNight: 1,
            homeSatAftn: 1,
            homeSatAll: 1,
            homeSatMid: 1,
            homeSatMorn: 1,
            homeSatNight: 1,
            homeSunAftn: 1,
            homeSunAll: 1,
            homeSunMid: 1,
            homeSunMorn: 1,
            homeSunNight: 1,
            errors: [],
            summaryData: null,
            config: config
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        var id = e.target.id;
        var value = e.target.value;
        var prefix = id.substring(0, 4);
        if (prefix == 'home') {
            if (value == 0) {
                value = 1;
            } else if (value == 1) {
                value = 0;
            }
        }

        this.setState({[id]: value},
            function() {
                //console.log( 'setState update' );
                this.getSummaryData();
            }
        );
    }

    /*shouldComponentUpdate(newProps, newState) {
        console.log( 'shouldComponentUpdate' );
        this.getData();
        return true;
    }*/

    /*componentWillUpdate(nextProps, nextState) {
        console.log( 'componentWillUpdate' );
        this.getSummaryData();
    }*/

    /*componentDidUpdate(prevProps, prevState) {
        console.log( 'componentDidUpdate' );
        this.getSummaryData();
    }*/

    componentDidMount() {
        this.getSummaryData();
    }

    validate() {

        var res = new Array;

        if (!Validate.Postcode(this.state.postcode)) {
            res[res.length] = Validate.PostcodeError();
        }

        if (!Validate.GridRate(this.state.gridRate)) {
            res[res.length] = 'grid ' + Validate.GridRateError();
        }

        if (!Validate.GridRate(this.state.digitalSolarRate)) {
            res[res.length] = 'digital solar ' + Validate.GridRateError();
        }

        if (!Validate.Consumption(this.state.consumption)) {
            res[res.length] = Validate.ConsumptionError();
        }

        if (!Validate.SystemCost(this.state.systemCost)) {
            res[res.length] = Validate.SystemCostError();
        }

        if (!Validate.SunshineHours(this.state)) {
            res[res.length] = Validate.SunshineHoursError();
        }

        //console.log(res);
        return res;
    }

    getAsUriParameters(params) {
        var url = '';
        for (var prop in params) {
            url += encodeURIComponent(prop) + '=' +
                encodeURIComponent(params[prop]) + '&';
        }
        return url.substring(0, url.length - 1)
    }

    getSummaryData() {

        this.state.errors = this.validate();
        if (this.state.errors.length > 0) {
            $('#summary').html('');
            ReactDOM.render(<Errors id={'errors'} value={this.state.errors}/>, document.getElementById('errors'));
            return;
        } else {
            $('#errors').html('');
        }

        var gridRateDiscount = parseFloat( 1 - ( parseFloat( this.state.digitalSolarRate ) / parseFloat( this.state.gridRate ) ) ).toFixed(4);

        var params = {
            gridTariff: parseFloat( ( this.state.gridRate / 100 ) ).toFixed(4),
            llGridRateDiscount: gridRateDiscount,
            postcode: parseInt( this.state.postcode ),
            systemGrossCost: parseInt( this.state.systemCost ),
            systemSize: parseInt( this.state.systemSize ),
            consumption: parseInt( this.state.consumption ),
            pmNumberProperties: 1,
            graphType: 1,
            homeMonFriMorn: this.state.homeMonFriMorn,
            homeMonFriMid: this.state.homeMonFriMid,
            homeMonFriAftn: this.state.homeMonFriAftn,
            homeSatMorn: this.state.homeSatMorn,
            homeSatMid: this.state.homeSatMid,
            homeSatAftn: this.state.homeSatAftn,
            homeSunMorn: this.state.homeSunMorn,
            homeSunMid: this.state.homeSunMid,
            homeSunAftn: this.state.homeSunAftn
        }

        var url = this.state.config.orbUrl + '/orb/summary/?' + this.getAsUriParameters(params);

        //console.log(url);

        $.ajax({
            url: url,
            dataType: 'json',
            type: 'GET',
            success: function(result) {
                //console.log('success');
                //console.log(result.data);
                //this.state.summaryData = result.data
                ReactDOM.render(<Summary {...result.data}/>, document.getElementById('summary'));
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

                    <Postcode id={'postcode'} value={this.state.postcode} maxLength={'4'} onChange={this.handleChange} />
                    <SystemSize id={'systemSize'} value={this.state.systemSize} onChange={this.handleChange}/>
                    <GridRate id={'gridRate'} value={this.state.gridRate} maxLength={'5'} onChange={this.handleChange}/>
                    <DigitalSolarRate id={'digitalSolarRate'} value={this.state.digitalSolarRate} maxLength={'5'} onChange={this.handleChange}/>
                    <Consumption id={'consumption'} value={this.state.consumption} maxLength={'6'} onChange={this.handleChange}/>
                    {/*<SolarUsed id={'solarUsed'} value={this.state.solarUsed} onChange={this.handleChange}/>*/}
                    <SunshineHours id={'sunshineHours'} value={this.state} onChange={this.handleChange}/>
                    <SystemCost id={'systemCost'} value={this.state.systemCost} maxLength={'6'} onChange={this.handleChange}/>

                    {/*{ this.state.summaryData ? <Summary {...this.state.summaryData}/> : null }*/}
                </fieldset>

            </form>
        );
    }
}

export default Form;