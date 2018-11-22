class AmChartsComponent extends df.WebBaseControl {
    constructor(sName, oParent) {
        super(sName, oParent);

        this.prop(df.tString, 'psChartConfig');
        this.psChartConfig = '';

        this.event('OnClickSlice');

        this._eChart = null;
    }

    openHtml(aHtml) {
        super.openHtml(aHtml);
        aHtml.push('<div>');
    }

    closeHtml(aHtml) {
        aHtml.push('</div>');
        super.closeHtml(aHtml);
    }

    afterRender() {
        super.afterRender();
        this._eControl = df.dom.query(this._eControlWrp, 'div');
        this.sizeHeight(-1);
        this.set_psChartConfig(this.psChartConfig);
    }

    registerEventListeners(chart) {
        // Here we can add all the vairous event listeners of the different chart types
        if (chart instanceof AmCharts.AmPieChart) {
            chart.addListener('clickSlice', event => this.onClickSlice(event));
        }
    }

    set_psChartConfig(sVal) {
        if (sVal) {
            this._eChart = AmCharts.makeChart(this._eControl, JSON.parse(sVal));
            this.registerEventListeners(this._eChart);
        } else {
            this._eChart = null;
            this._eControl.innerHTML = '';
        }
    }

    onClickSlice(event) {
        this.fire('OnClickSlice', [event.dataItem.title]);
    }
}

export default global.AmChartsComponent = AmChartsComponent;