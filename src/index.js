import * as core from "@amcharts/amcharts4/core";
import * as charts from "@amcharts/amcharts4/charts";
import animated from "@amcharts/amcharts4/themes/animated";

let decimalSeparator;

function stringToNum(string) {
    return df.sys.data.stringToNum(string, decimalSeparator);
}

function numToString(num, decimals) {
    return df.sys.data.numToString(num, decimalSeparator, decimals);
}

core.useTheme(animated);

class AmChartsComponent extends df.WebBaseControl {
    constructor(sName, oParent) {
        super(sName, oParent);

        this.event('OnClickSlice');

        decimalSeparator = this.getWebApp().psDecimalSeparator;

        this._eChart = null;
    }

    openHtml(aHtml) {
        super.openHtml(aHtml);
        aHtml.push('<div class="AmChartsComponent">');
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
        // Here we can add all the various event listeners of the different chart types
        if (chart instanceof charts.SerialChart) {
            // console.log('is a serialchart');
            chart.series.each(series => {
                if (series instanceof charts.ColumnSeries) {
                    series.columns.template.events.on('hit', event => this.onClick('column', event.target));
                }
                if (series instanceof charts.PieSeries) {
                    series.slices.template.events.on('hit', event => this.onClick('slice', event.target));
                    series.slices.template.events.on('hit', event => this.onClickSlice(event));
                }
            });
        }
    }

    setChartConfig(sType, sVal) {
        this._eChart?.dispose();
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

    clockHandShowValue(index, value, duration) {
        if (typeof index === 'string') {
            index = parseInt(index);
        }
        if (typeof value === 'string') {
            value = stringToNum(value);
        }
        if (typeof duration === 'string') {
            duration = parseInt(duration);
        }
        if (this._eChart instanceof charts.GaugeChart && this._eChart.hands.hasIndex(index)) {
            this._eChart.hands.getIndex(index).showValue(value, duration);
        }
    }

    onClick(type, target) {
        if (target.dataItem instanceof charts.ColumnSeriesDataItem) {
            // console.log('is a column');
            this.fire('OnClick', [type, target.dataItem.categoryX, target.dataItem.categoryY]);
        }
        if (target.dataItem instanceof charts.PieSeriesDataItem) {
            // console.log('is a slice');
            this.fire('OnClick', [type, target.dataItem.category]);
        }
    }

    // Deprecated
    onClickSlice(event) {
        this.fire('OnClickSlice', [event.target.dataItem.category]);
    }
}

export default global.AmChartsComponent = AmChartsComponent;