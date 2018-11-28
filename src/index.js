import * as core from "@amcharts/amcharts4/core";
import * as charts from "@amcharts/amcharts4/charts";
import animated from "@amcharts/amcharts4/themes/animated";

core.useTheme(animated);

class AmChartsComponent extends df.WebBaseControl {
    constructor(sName, oParent) {
        super(sName, oParent);

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
    }

    registerEventListeners(chart) {
        // Here we can add all the vairous event listeners of the different chart types
        if (chart instanceof charts.PieChart) {
            chart.series.each(series => {
                series.slices.template.events.on('hit', event => this.onClickSlice(event));
            });
        }
    }

    setChartConfig(sType, sVal) {
        if (sVal) {
            const config = JSON.parse(sVal);
            this._eChart = core.createFromConfig(config, this._eControl, sType);
            this.registerEventListeners(this._eChart);
        } else {
            this._eChart = null;
            this._eControl.innerHTML = '';
        }
        this.sizeHeight(-1);
    }

    onClickSlice(event) {
        this.fire('OnClickSlice', [event.target.dataItem.category]);
    }
}

export default global.AmChartsComponent = AmChartsComponent;