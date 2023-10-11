var vg_1 = "Data_Visualisation_1.vg.json";
var vg_2 = "Data_Visualisation_2.vg.json";
var vg_3 = "Data_Visualisation_3.vg.json";
var vg_4 = "Data_Visualisation_4.vg.json";

vegaEmbed("#stacked_area_graph", vg_1).then(function(result1) {
  // Access the Vega view instance for the first visualization as result1.view
  vegaEmbed("#choropleth_map", vg_2).then(function(result2) {
    // Access the Vega view instance for the second visualization as result2.view
    vegaEmbed("#donut_pie_chart", vg_3).then(function(result3) {
      // Access the Vega view instance for the third visualization as result2.view
      vegaEmbed("#stacked_bar_chart", vg_4).then(function(result4) {
        // Access the Vega view instance for the fourth visualization as result2.view
      }).catch(console.error);
    }).catch(console.error);
  }).catch(console.error);
}).catch(console.error);