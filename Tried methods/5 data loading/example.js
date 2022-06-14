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