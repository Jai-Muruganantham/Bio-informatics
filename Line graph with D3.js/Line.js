function main()
{

	// set the dimensions and margins of the graph
	var margin = {top: 40, right: 120, bottom: 120, left: 240},
		width = 860 - margin.left - margin.right,
		height = 800 - margin.top - margin.bottom;
		
	// append the svg object to the body of the page
	var svg = d3.select("#my_dataviz")
			  .append("svg")
				.attr("width", width + margin.left + margin.right+500)
				.attr("height", height + margin.top + margin.bottom+500)
			  .append("g")
				.attr("transform",
					  "translate(" + margin.left + "," + margin.top + ")");
					  
	d3.tsv("../Data_Main/coverage_df.tsv", function(data){
	  //data=data.sort(function(a,b){return d3.ascending(a.value,b.value)})
	  
	  data.sort(function(a,b){ return d3.ascending(+a.bins,+b.bins)})
	  // group the data: I want to draw one line per group
	  var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
		.key(function(d) { return d.colour_group;})
		.entries(data);

	 // Add X axis
	  var x = d3.scaleLinear()
		.domain(d3.extent(data, function(d) { return d.bins; }))
		.range([ 0, width+200 ]);
	  svg.append("g")
		.attr("transform", "translate(0," + height + ")")
		.call(d3.axisBottom(x).ticks(5));
	  // Add Y axis
	  var y = d3.scaleLinear()
		.domain([0, d3.max(data, function(d) { return +d.coverage; })])
		.range([ height, 0 ]);
	  svg.append("g")
		.call(d3.axisLeft(y));
	// color palette
	  var res = sumstat.map(function(d){ return d.key }) // list of group names
	  console.log(res[2])
	  console.log(res)
	  var color = d3.scaleOrdinal()
		.domain(res)
		.range(['#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#ffff33','#a65628','#f781bf','#999999'])
	// Draw the line
	  svg.selectAll(".line")
		  .data(sumstat)
		  .enter()
		  .append("path")
			.attr("fill", "none")
			.attr("stroke", function(d){ return color(d.key) })
			.attr("stroke-width", 1.5)
			.attr("d", function(d){
			  return d3.line()
				.x(function(d) { return x(d.bins); })
				.y(function(d) { return y(+d.coverage); })
				(d.values)
				
			})

	});				
}





