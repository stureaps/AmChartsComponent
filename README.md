# AmChartsComponent

A DataFlex custom component wrapper for the [amCharts library](https://www.amcharts.com/).

Master branch is for amCharts v4. Use the "v3" branch for amCharts v3.

## Getting started

Install [DataFlex](https://www.dataaccess.com/download/dfstudio/). This workspace is setup for version 19.0, but should be easy to migrate.

Install [Node.js](https://nodejs.org/). Version 10 or later will do nicely.

Install dependencies - from your AmChartsComponent folder run:

    > npm install

Build the component client-side files (will be placed in `AppHtml/amCharts/`):

    > npm run build

## To run the demo application

Start the DataFlex Studio and open the AmChartsComponent workspace. The studio will copy themes and the JavaScript engine into the `AppHtml` folder.

Register the web application from the studio menu "Tools > Register WebApp...".

Hit F5 to run the application.

## To use to component in another application

Copy client-side files into your application:

    > xcopy AppHtml\amCharts <path to app>\AppHtml\amCharts /e /i

Either copy `AppSrc/cAmChart.pkg` to your application AppSrc folder, or add AmChartsComponent as a library ("Tools > Maintain Libraries... > Add Library...").
