var vg_1 = "map.vg.json";
vegaEmbed("#map", vg_1, {renderer: "svg", actions: false}).then(function (result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "bubblechart.vg.json";
vegaEmbed("#bubbleChart", vg_2, {renderer: "svg", actions: false}).then(function (result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_3 = "barCharts.vg.json";
vegaEmbed("#barCharts", vg_3, {renderer: "svg", actions: false}).then(function (result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_4 = "radialPlots.vg.json";
vegaEmbed("#radialPlots", vg_4, {renderer: "svg", actions: false}).then(function (result) {
    // Access the Vega view instance(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);