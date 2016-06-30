import React from "react";
import Base from "./base";

class Validate extends Base {

    static Postcode(value) {
        if (value != undefined) {
            var regex  = /^\d+$/;
            //console.log(regex.test(value));
            if(!regex.test(value)) {
                return false;
            } else if (value.length != 4) {
                return false;
            } else {
                return true;
            }
        }
        return false;
    }

    static PostcodeError() {
        return 'postcode must be a 4 digit number';
    }

    static GridRate(value) {
        if (value != undefined) {
            var regex = /^[+-]?\d+(\.\d+)?$/;
            //console.log(regex.test(value));
            if(!regex.test(value)) {
                return false;
            } else if (value < 10 || value > 50) {
                return false;
            } else {
                return true;
            }
        }
        return false;
    }

    static GridRateError() {
        return 'rate should be between 10 and 50 cents';
    }

    static Price(value) {
        if (value != undefined) {
            var regex = /^[+-]?\d+(\.\d+)?$/;
            //console.log(regex.test(value));
            if(!regex.test(value)) {
                return false;
            } else {
                return true;
            }
        }
        return false;
    }

    static Consumption(value) {
        if (value != undefined) {
            var regex  = /^\d+$/;
            //console.log(regex.test(value));
            if(!regex.test(value)) {
                return false;
            } else if (value > 100000) {
                return false;
            } else {
                return true;
            }
        }
        return false;
    }

    static ConsumptionError() {
        return 'consumption value should be a number up to 100000 KwH';
    }

    static SystemCost(value) {
        if (value != undefined) {
            var regex  = /^\d+$/;
            //console.log(regex.test(value));
            if(!regex.test(value)) {
                return false;
            } else if (value > 100000) {
                return false;
            } else {
                return true;
            }
        }
        return false;
    }

    static SystemCostError() {
        return 'system cost should be a number up to $100000';
    }

    static SunshineHours(value) {

        var groups = ['homeMonFri', 'homeSat', 'homeSun'];
        var sections = ['Morn', 'Mid', 'Aftn'];

        var total = 0;
        for(var i = 0; i < groups.length; i++) {
            for(var c = 0; c < sections.length; c++) {
                var element = groups[i] + sections[c];
                total = (total + value[element]);
            }
        }

        if (total > 0) {
            return true;
        } else {
            return false;
        }
    }

    static SunshineHoursError() {
        return 'at least one time spent at home option must be checked';
    }

    constructor(props) {
        super(props);
    }

    render() {}
}

export default Validate;