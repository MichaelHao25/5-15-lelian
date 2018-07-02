$('.menu-li-func ul li.wx').hover(function(){
		$(this).addClass('acti');
	},function(){
		$(this).removeClass('acti');
	})
	
	$('.menu-li-func ul li.li-sea').click(function(){
		$('.menu-search').show();
		$('.menu-search').addClass('acti');
		$('.menu-search').animate({"width":300+"px"},100)
		$(this).parents('.menu-li-func').hide()
		
	})
	$('.menu-search').hover(function(){
		
	},function(){
		$('.menu-search').removeClass('acti');
		$('.menu-search').animate({"width":0+"px"},100)
		$('.menu-search').hide();
		$('.menu-li-func').slideDown();
})
	$(document).ready(function () { //本人习惯这样写了
    	$(window).scroll(function (){
    		var he=$(window).scrollTop();
    		if(he>80){
    			$('.menu').addClass('acti');
    		}
    		else{
    			$('.menu').removeClass('acti');
    		}
    	})
    
	})