var vg_1 = "Data_Visualisation_2.vg.json";
var vg_2 = "Data_Visualisation_1.vg.json";

vegaEmbed("#choropleth_map", vg_1)
  .then(function(result1) {
    // Access the Vega view instance as result1.view
    return vegaEmbed("#stacked_area_graph", vg_2);
  })
  .then(function(result2) {
    // Access the Vega view instance as result2.view
  })
  .catch(console.error);