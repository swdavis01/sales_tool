import React from "react";
import Base from "./base";
var Numeral = require('numeral');

class Format extends Base {

    static IRR(value) {
        if (value != undefined) {
            var result = value * 100;
            if (result < 0) {
                result = 0;
            }
            return result.toFixed(2) + '%';
        }
    }

    static Cash(value) {
        if (value != undefined) {
            return '$' + Numeral(value.toFixed(2)).format('0,0');
        }
    }

    static Percentage(value) {
        if (value != undefined) {
            return Numeral(value).format('0.00%');
        }
    }

    static Int(value) {
        if (value != undefined) {
            return parseInt(value);
        }
    }

    constructor(props) {
        super(props);
    }

    render() {}
}

export default Format;