function main(){

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 40},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Read the data and compute summary statistics for each specie
d3.tsv("../Data_Main/box_plot_df.tsv", function(data) {

data.sort(function(a,b){ return d3.ascending(+a.beta,+b.beta)})

var obj=d3.nest()
		.key(function(d){return d.genotype_text})
		.entries(data);
console.log(obj[0])



})
}