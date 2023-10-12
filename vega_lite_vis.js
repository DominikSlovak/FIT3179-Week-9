var vg_1 = "Data_Visualisation_1.vg.json";
var vg_2 = "Data_Visualisation_2.vg.json";
var vg_3 = "Data_Visualisation_3.vg.json";
var vg_4 = "Data_Visualisation_4.vg.json";
var vg_5 = "Data_Visualisation_5.vg.json";
var vg_6 = "Data_Visualisation_6.vg.json";
var vg_7 = "Data_Visualisation_7.vg.json";

vegaEmbed("#stacked_area_graph", vg_1).then(function(result1) {
  // Access the Vega view instance for the first visualization as result1.view
  vegaEmbed("#choropleth_map", vg_2).then(function(result2) {
    // Access the Vega view instance for the second visualization as result2.view
    vegaEmbed("#donut_pie_chart", vg_3).then(function(result3) {
      // Access the Vega view instance for the third visualization as result3.view
      vegaEmbed("#stacked_bar_chart", vg_4).then(function(result4) {
        // Access the Vega view instance for the fourth visualization as result4.view
        vegaEmbed("#heat_map", vg_5).then(function(result5) {
          // Access the Vega view instance for the fourth visualization as result5.view
          vegaEmbed("#scatterplot", vg_6).then(function(result6) {
            // Access the Vega view instance for the fourth visualization as result5.view
            vegaEmbed("#stacked_bar_chart2", vg_7).then(function(result7) {
              // Access the Vega view instance for the fourth visualization as result5.view
            }).catch(console.error);
          }).catch(console.error);
        }).catch(console.error);
      }).catch(console.error);
    }).catch(console.error);
  }).catch(console.error);
}).catch(console.error);