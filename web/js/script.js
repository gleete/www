$(function(){
		
		$('#box h2').click(function(){
			$('body').toggleClass('on');
			
		});
		
		$('#box ul li').each(function(i){
			$(this).mousedown(function(){
				$(this).addClass('boxshadow').siblings().removeClass('boxshadow');
				if (i==0) 
						{
						$('.textbox').eq(i).addClass('animate').siblings().removeClass('animate');
						}
				else { 
						$('.textbox').eq(i).siblings().removeClass('animate');
					 }
			});
		});
		
		$('.textbox ul li').each(function(i){
			$(this).mousedown(function(i){
			console.log("hello");
				$(this).addClass('boxshadow').siblings().removeClass('boxshadow');
				$(this).addClass('boxshadow').siblings().removeClass('boxshadow');
				$('.contentbox').add(".text").eq(i).addClass('animate').siblings().removeClass('animate');
			});
		});	
});
