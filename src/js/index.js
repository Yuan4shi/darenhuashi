$(function(){
	$(".top_1 img").hover(function(){
		$(this).attr("src","images/p-10.jpg");
	},function(){
		$(this).attr("src","images/p-2.jpg");
	});
	
	$(".top_2 li").hover(function(){
		$(this).find("img").attr("src","images/i"+($(this).index()+1)*11+".jpg");
	},function(){
		$(this).find("img").attr("src","images/i"+($(this).index()+1)+".jpg");
	});
	
	$(".top_3 li a").hover(function(){
		$(".father").children().eq($(this).index()).show();
	},function(){
		
		$(".father").children().eq($(this).index()).hide();
	});
	
	$(".content_2 .left .right_1").hover(function(){
		$(".right_2").slideUp(600);
	},function(){
		$(".right_2").slideDown(600);
	});
	
	$(".right_3 li").hover(function(){
		if($(this).index()<3){
			$(".left_11 img").attr("src","images/x"+($(this).index()+1)+".png");
		}else{
			$(".left_11 img").attr("src","images/x"+($(this).index()+1)+".jpg");
		}
		
	},function(){
		$(".left_11 img").attr("src","images/x1.png");
	});
});
