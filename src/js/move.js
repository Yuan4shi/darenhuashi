$(function(){
	var prev=$("#prev");
	var next=$("#next");
	var len=$("#lo li").length/2;
	var liWidth=$("#lo li").innerWidth();
	prev.on("click",prevx);
	  function prevx(){
	  	prev.off("click");
		var left=$("#lo ul").position().left;		
		if(left<=-liWidth*len){
			$("#lo ul").css('left','0px');
		}			
			$("#lo ul").animate({"left":"-="+liWidth+"px"},600,function(){
				prev.on("click",prevx);
			});
	};
	next.on("click",nextx);
	function nextx(){
		next.off("click");
		var left=$("#lo ul").position().left;
		if(left==0){
			$("#lo ul").css('left',"-"+liWidth*len+"px");
		}
			$("#lo ul").animate({"left":"+="+liWidth+"px"},600,function(){
				next.on("click",nextx);
			});
	};
});
