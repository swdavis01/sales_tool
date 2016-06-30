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
        console.log(props);
    }

    render() {

        return (
            <div class="summary">

                <SummaryItemTitle label={'Return On Investment'}/>
                    <SummaryItem label={'Without Finance'} value={Format.IRR(this.props.ownerEndIRR)} type={'main'}/>
                    <SummaryItem label={'With Finance'} value={Format.IRR(this.props.ownerEndFinanceIRR)} type={'main'}/>
                    <SummaryItem label={'Tenant Discount'} value={Format.Percentage(this.props.tenantDiscount)} type={'main'}/>

                <SummaryItemTitle label={'Investment'}/>
                <SummaryItem label={'Investment Payback Years'} value={Format.Int(this.props.ownerPaybackYear)} type={'main'}/>
                <SummaryItem label={'Investment Cost'} value={Format.Cash(this.props.ownerInvestmentCost)} type={'main'}/>
                    <SummaryItem label={'Equipment Cost'} value={Format.Cash(this.props.ownerEquipmentCost)} type={'sub'}/>
                    <SummaryItem label={'Matter Cost'} value={Format.Cash(this.props.ownerMatterCost)} type={'sub'}/>

                <SummaryItemTitle label={'Finance'}/>
                <SummaryItem label={'Amount Financed'} value={Format.Cash(this.props.ownerLoanAmount)} type={'main'}/>
                    <SummaryItem label={'Finance Years'} value={this.props.ownerFinanceYear} type={'sub'}/>
                    <SummaryItem label={'Total Interest'} value={Format.Cash(this.props.ownerLoanInterestCost)} type={'sub'}/>
                    <SummaryItem label={'Monthly Repayments'} value={Format.Cash(this.props.ownerLoanMonthlyRepaymentCost)} type={'sub'}/>

                <SummaryItemTitle label={'Cash Flow'}/>
                <SummaryItem label={'Increase Cash Flow'} value={Format.Cash(this.props.ownerEndNetPAYU) + " over " + this.props.ownerMaxYieldYears + " years"} type={'main'}/>
                <SummaryItem label={'Year 1 Cash Flow'} value={Format.Cash(this.props.ownerBeginRevenue)} type={'main'}/>

                <SummaryItem label={'Gross Revenue'} value={Format.Cash(this.props.ownerEndGrossRevenue)} type={'main'}/>
                <SummaryItem label={'Year 1 Revenue'} value={Format.Cash(this.props.ownerBeginRevenue)} type={'main'}/>
            </div>
        );
    }

}

export default Summary;