function main()
{
	var myData=[1,2,3,4,5,"Hello Jai!"]
	d3.select("body").select("p").data(myData)
								 .enter()
								 .append("p")
								 .text(
										function(d){
														return d;														
													}
									   )
								 
}