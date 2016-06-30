import React from "react";
import Base from "../classes/base";
import Format from "../classes/format";
import Label from "../components/label";

var SummaryItem = class SummaryItem extends Base {
    render() {
        return (
            <div className={'summaryItem'}><label className={this.props.type}>{this.props.label}: </label><span>{this.props.value}</span></div>
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

                <div className={'clearFix'}>
                    <div className={'glyphmedium fs1'}>
                        <Label icon={'icon-thumb_up'} label={'Return On Investment'} />
                        <fieldset className={'fs0 size1of1medium clearfix hidden-false'}>
                            <SummaryItem label={'Without Finance'} value={Format.IRR(this.props.ownerEndIRR)} type={'main'}/>
                            <SummaryItem label={'With Finance'} value={Format.IRR(this.props.ownerEndFinanceIRR)} type={'main'}/>
                            <SummaryItem label={'Tenant Discount'} value={Format.Percentage(this.props.tenantDiscount)} type={'main'}/>
                        </fieldset>
                    </div>

                    <div className={'glyphmedium fs1'}>
                    <Label icon={'icon-monetization_on'} label={'Investment'} />
                        <fieldset className={'fs0 size1of1medium clearfix hidden-false'}>
                            <SummaryItem label={'Investment Payback Years'} value={Format.Int(this.props.ownerPaybackYear)} type={'main'}/>
                            <SummaryItem label={'Investment Cost'} value={Format.Cash(this.props.ownerInvestmentCost)} type={'main'}/>
                            <SummaryItem label={'Equipment Cost'} value={Format.Cash(this.props.ownerEquipmentCost)} type={'sub'}/>
                            <SummaryItem label={'Matter Cost'} value={Format.Cash(this.props.ownerMatterCost)} type={'sub'}/>
                        </fieldset>
                    </div>
                </div>

                <div className={'clearFix'}>
                    <div className={'glyphmedium fs1'}>
                        <Label icon={'icon-money_off'} label={'Finance'} />
                        <fieldset className={'fs0 size1of1medium clearfix hidden-false'}>
                            <SummaryItem label={'Amount Financed'} value={Format.Cash(this.props.ownerLoanAmount)} type={'main'}/>
                            <SummaryItem label={'Finance Years'} value={this.props.ownerFinanceYear} type={'sub'}/>
                            <SummaryItem label={'Total Interest'} value={Format.Cash(this.props.ownerLoanInterestCost)} type={'sub'}/>
                            <SummaryItem label={'Monthly Repayments'} value={Format.Cash(this.props.ownerLoanMonthlyRepaymentCost)} type={'sub'}/>
                        </fieldset>
                    </div>


                    <div className={'glyphmedium fs1'}>
                        <Label icon={'icon-attach_money'} label={'Cash Flow'} />
                        <fieldset className={'fs0 size1of1medium clearfix hidden-false'}>
                            <SummaryItem label={this.props.ownerMaxYieldYears + ' Years Cash Flow'} value={Format.Cash(this.props.ownerEndNetPAYU)} type={'main'}/>
                            <SummaryItem label={'Year 1 Cash Flow'} value={Format.Cash(this.props.ownerBeginRevenue)} type={'main'}/>

                            <SummaryItem label={'Gross Revenue'} value={Format.Cash(this.props.ownerEndGrossRevenue)} type={'main'}/>
                            <SummaryItem label={'Year 1 Revenue'} value={Format.Cash(this.props.ownerBeginRevenue)} type={'main'}/>
                        </fieldset>
                    </div>

                </div>
            </div>
        );
    }

}

export default Summary;