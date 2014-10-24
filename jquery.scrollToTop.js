$(function(){
	var html = '<div class="gd_kf side_float"><a href="http://wpa.qq.com/msgrd?v=3&uin=2521239354&site=qq&menu=yes" title="联系客服" target="_blank">联系客服</a></div>';
		html += '<div class="gd_ticket side_float"><a href="http://www.qyc18.com/?c=ad&a=qingdoushenghuo" target="_blank" title="如何获得青豆券"></a></div>';
		html += '<div class="back_top side_float"><a href="javascript:void(0);" title="返回顶部"></a></div>';
	
	$('body').append('<div id="scrollToTop" style="display:none;"></div>');
	$('#scrollToTop').prepend(html);
	
	var o = $('#scrollToTop');
	$(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            o.fadeIn();
        } else {
        	o.fadeOut();
        }
    });
	
	$('.back_top').click(function(e){
        e.preventDefault();
        $("body, html").animate({
            scrollTop : 0
        }, 800);				
	});
	
	
});