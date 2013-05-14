$(function(){
	$('#box ul li').click(function(){
		var i = $('#box ul li').index($(this));
		$('.page p').eq(i).show(300).siblings().hide(300);
		$('.page h1').eq(i+1).show(300);
	});
});
  		  
