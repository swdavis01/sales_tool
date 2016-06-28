import React from "react";
import Base from "../classes/base";
import Format from "../classes/format";

var SummaryItemTitle = class SummaryItemTitle extends Base {
    render() {
        return (
            <div><h2>{this.props.label}</h2></div>
    );
    }
}

var SummaryItem = class SummaryItem extends Base {
    render() {
        return (
            <div><label className={this.props.type}>{this.props.label}: </label>{this.props.value}</div>
        );
    }
}

class Summary extends Base {

    constructor(props) {
        super(props);
        console.log(props.data);
        //this.state = props.data;
    }

    setStateData(props) {
        this.props = props
    }

    getValue( name ) {
        if (this.props != undefined) {
            return this.props[name];
        }
    }

    render() {

        return (
            <div class="summary">

                <SummaryItemTitle label={'Return On Investment'}/>
                    <SummaryItem label={'Without Finance'} value={Format.IRR(this.getValue('ownerEndIRR'))} type={'main'}/>
                    <SummaryItem label={'With Finance'} value={Format.IRR(this.getValue('ownerEndFinanceIRR'))} type={'main'}/>

                <SummaryItemTitle label={'Investment'}/>
                <SummaryItem label={'Investment Cost'} value={Format.Cash(this.getValue('ownerInvestmentCost'))} type={'main'}/>
                    <SummaryItem label={'Equipment Cost'} value={Format.Cash(this.getValue('ownerEquipmentCost'))} type={'sub'}/>
                    <SummaryItem label={'Matter Cost'} value={Format.Cash(this.getValue('ownerMatterCost'))} type={'sub'}/>

                <SummaryItemTitle label={'Finance'}/>
                <SummaryItem label={'Amount Financed'} value={Format.Cash(this.getValue('ownerLoanAmount'))} type={'main'}/>
                    <SummaryItem label={'Finance Years'} value={this.getValue('ownerFinanceYear')} type={'sub'}/>
                    <SummaryItem label={'Total Interest'} value={Format.Cash(this.getValue('ownerLoanInterestCost'))} type={'sub'}/>
                    <SummaryItem label={'Monthly Repayments'} value={Format.Cash(this.getValue('ownerLoanMonthlyRepaymentCost'))} type={'sub'}/>

                <SummaryItemTitle label={'Cash Flow'}/>
                <SummaryItem label={'Increase Cash Flow'} value={Format.Cash(this.getValue('ownerEndNetPAYU')) + " over " + this.getValue('ownerMaxYieldYears') + " years"} type={'main'}/>
                <SummaryItem label={'Year 1 Cash Flow'} value={Format.Cash(this.getValue('ownerBeginRevenue'))} type={'main'}/>

                <SummaryItem label={'Gross Revenue'} value={Format.Cash(this.getValue('ownerEndGrossRevenue'))} type={'main'}/>
                <SummaryItem label={'Discount'} value={Format.Percentage(this.getValue('tenantDiscount'))} type={'main'}/>
                <SummaryItem label={'Year 1 Revenue'} value={Format.Cash(this.getValue('ownerBeginRevenue'))} type={'main'}/>
            </div>
        );
    }

}

export default Summary;