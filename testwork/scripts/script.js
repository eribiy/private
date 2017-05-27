/**
 * Created by kate on 25.05.17.
 */
$(document).ready(function(){
    $('.mobile-btn').click(function () {
        $('.mobile-nav').slideToggle();
    });

    $('.accordion').click(function() {
		$(this).toggleClass('arrowClose').toggleClass('arrowOpen');
     
    	var panel = $(this).next();
        panel.toggle();
    });

    $('.info-tab-link').click(function () {
        $('.tabcontent').removeClass('active');
        $('#'+ $(this).data('tab')).addClass('active');

        $('.info-tab-link').removeClass('active');
        $(this).addClass("active");
    });

    $('.bxslider').bxSlider({
        minSlides: 3,
        pager: false,
        slideWidth: 300,
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: 'Onward →',
        prevText: '← Go back'
    });

    $('.bxslider-main').bxSlider({
        mode: 'vertical',
        slideMargin: 5,
        pagerCustom: '#bx-pager-main'
    });
});



