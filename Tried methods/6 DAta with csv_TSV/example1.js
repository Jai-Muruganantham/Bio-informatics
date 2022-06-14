function main() {
	// d3 code goes here
	var svg = d3.select('svg'),
	width = svg.attr('width'),
	height = svg.attr('height'),
	radius = Math.min(width, height) / 2;
	
	var g = svg.append('g')
			.attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');
	var color = d3.scaleOrdinal(['#C7CEEA','#B5EAD7','#FFDAC1', '#FF9AA2', ])
	var pie = d3.pie().value(function(d){
		return d.coverage
	})
	var path = d3.arc()
			.outerRadius(radius - 40)
			.innerRadius(100);
	var label = d3.arc()
			.outerRadius(radius)
			.innerRadius(radius - 150);
	d3.tsv('../Data_Main/coverage_df.tsv',
		function(data){

		var arc = g.selectAll('.arc')
		.data(pie(data))
		.enter().append('g')
		.attr('class', 'arc')
		arc.append('path')
			.attr('d', path)
			.attr('fill', function(d){return color(d.data.colour_group);})

		arc.append('text')
			.attr('transform', function(d){return 'translate(' + label.centroid(d) + ')';})
			.text(function(d){return d.data.colour_group});
		svg.append('g')
			.attr('transform', 'translate(' + (width / 2 - 120) + ',' + 20 + ')')
			.append('text')
			.text('Company Market Share Stats (2021)')
			.attr('class', 'title')
		}
	);
}


function main1()
{

var exp1 = "x";
var exp2 = "1.5*x";
var exp3 = "1.5*x + 7";

// Generate values

var x1Values = [];
var x2Values = [];
var x3Values = [];
var y1Values = [];
var y2Values = [];
var y3Values = [];

for (var x = 0; x <= 10; x += 1) {
  x1Values.push(x);
  x2Values.push(x);
  x3Values.push(x);
  y1Values.push(eval(exp1));
  y2Values.push(eval(exp2));
  y3Values.push(eval(exp3));
}

// Define Data
var data = [
  {x: x1Values, y: y1Values, mode:"lines"},
  {x: x2Values, y: y2Values, mode:"lines"},
  {x: x3Values, y: y3Values, mode:"lines"}
];

// Define Layout
var layout = {title: "[y=" + exp1 + "] [y=" + exp2 + "] [y=" + exp3 + "]"};

// Display using Plotly
Plotly.newPlot("myPlot", data, layout);		
}