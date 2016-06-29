import React from "react";
import Base from "./base";

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
            return '$' + value.toFixed(2);
        }
    }

    static Percentage(value) {
        if (value != undefined) {
            return value.toFixed(2) + '%';
        }
    }

    constructor(props) {
        super(props);
    }

    render() {}
}

export default Format;