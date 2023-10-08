var vg_1 = "Data_Visualisation_2.vg.json";
vegaEmbed("#choropleth_map", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
var vg_2 = "Data_Visualisation_1.vg.json";
},
vegaEmbed("#stacked_bar_chart", vg_2).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}
).catch(console.error));