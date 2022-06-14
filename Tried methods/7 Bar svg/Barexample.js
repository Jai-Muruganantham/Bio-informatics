function main()
{

	
	d3.tsv("../Data_Main/coverage_df.tsv", function(data){
		//				for(let index=0;index<data.length;index++)
		//				{
		//					const element =data[index];
		//					console.log(element.colour_group);
		//				}
		const element =data[0]
		console.log(element.colour_group)
		d3.select("p").text(element.colour_group)
	});				
}


function main1() {
	// d3 code goes here
	var barData = [5, 10, 20, 40, 60, 80]
	var width = 900; // width of SVG
	var scaleFactor = 10;
	var barHeight = 50;

	var graph = d3.select("body")
			.append("svg")
			.attr('width', width)
			.attr('height', barHeight * barData.length);
	
	var bar = graph.selectAll("g")
			.data(barData)
			.enter().append("g")
			.attr('transform', function (d, i) {
				return 'translate(0,'+ i * barHeight +')';
			});
	
	bar.append("rect")
		.attr('width', function(d){
		return d * scaleFactor;
	})
		.attr('height', barHeight - 1)
	
	bar.append('text')
		.attr('x', function(d){
		return (d*scaleFactor);
	})
		.attr('y', barHeight / 2)
		.attr('dy', '.35em')
		.text(function(d) {return d; });


}