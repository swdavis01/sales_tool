import React from "react";
import Base from "../classes/base";
import Label from "../components/label";

class Errors extends Base {

    constructor(props) {
        super(props);
    }

    handleChange(e) {
    }

    render() {

        var createItem = function (item, key) {
            return <div key={key} className={'error'}>* {item.name}</div>;
        };

        var errors = [];
        for(var i = 0; i < this.props.value.length; i++) {
            console.log(this.props.value[i]);
            errors[i] = { value: i, name: this.props.value[i] };
        }

        return (
            <div className="errors">
                <div className={'glyphlarge fs1'}>
                    <Label icon={'icon-error'} label={'Errors'} />
                    <fieldset className={'fs0 size1of1large clearfix hidden-false'}>
                        {errors.map(createItem)}
                    </fieldset>
                </div>
            </div>
        );
    }

}

export default Errors;