$(function(){
	var timer;
	var num = 0;
	$('.side li').click(function(event){
		num = $(this).index();
		$('section').stop().animate({'top':-50*num+'%'},500);
		$('section>div').eq(num).children('.title').removeClass('no').parent().siblings().children('title').addClass('no');
		$(this).addClass('current').siblings('li').removeClass('current');
	})
	
	//滚动事件
	$(document).mousewheel(function(e,d){
//		alert(d);
		clearTimeout(timer);
		timer = setTimeout(function(){
			num = num-d;
			if(num<0){num = 0}
			if(num>3){num = 3}
			$('section').stop().animate({'top':-100*num+'%'},500);
			$('section>div').eq(num).children('.title').removeClass('no').parent().siblings().children('.title').addClass('no');
			$('.side li').eq(num).addClass('current').siblings('li').removeClass('current');
			},100)
		})
})
