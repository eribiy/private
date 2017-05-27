/**
 * Created by kate on 25.05.17.
 */
$(document).ready(function() {
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

    /*var slider = $('.bxslider').bxSlider({
        minSlides: 3,
        pager: false,
        slideWidth: 300,
        nextSelector: '#slider-next',
        prevSelector: '#slider-prev',
        nextText: 'Onward →',
        prevText: '← Go back'
    });*/

    var slider_main = $('.bxslider-main').bxSlider({
        mode: 'fade',
        slideMargin: 0,
        minSlides: 1,
        maxSlides: 1,
        pager: false,
        controls: false
    });

    var slider_vertical = $('.bxslider-vertical').bxSlider({
        mode: 'vertical',
        slideMargin: 8,
        pager: false,
        controls: true,
        minSlides: 7,
        moveSlides: 1,
        onSlideBefore: function($slideElement, oldIndex, newIndex) {
            slider_main.goToSlide(newIndex);
        }
    });

    var i = 0;
    $('.bxslider-vertical img').each(function(index) {
        $(this).data('number', i++);
    });

    $('.bxslider-vertical img').click(function() {
        slider_main.goToSlide($(this).data('number'));
        console.log($(this).data('number'));
    });

    
    var bxslider_caption = $('.bxslider-caption').bxSlider({
        pager: false,
        controls: true,
        minSlides: 1,
        maxSlides: 4,
        slideWidth: 284
        
    });

    var windowWidth = $(window).width();

    $( window ).resize(function() {
        var windowWidthNew = $(window).width();
        if ((windowWidthNew < 600) && (windowWidth > 600)) {
            windowWidth = windowWidthNew;
            slider_vertical.reloadSlider({
                mode: 'horizontal'
            });
        } else if ((windowWidthNew > 600) && (windowWidth < 600)) {
            windowWidth = windowWidthNew;
            slider_vertical.reloadSlider({
                mode: 'vertical'
            });
        }
    });


    var windowWidthCaption = $(window).width();
    $( window ).resize(function() {
        var windowWidthNew = $(window).width();
        if ((windowWidthNew < 1100) && (windowWidthCaption > 1100)) {
            windowWidthCaption = windowWidthNew;
            bxslider_caption.reloadSlider({
                pager: false,
                controls: true,
                minSlides: 1,
                maxSlides: 3,
                slideWidth: 284
            });
        } else if ((windowWidthNew > 1100) && (windowWidthCaption < 1100)) {
            windowWidthCaption = windowWidthNew;
            bxslider_caption.reloadSlider({
                pager: false,
                controls: true,
                minSlides: 1,
                maxSlides: 4,
                slideWidth: 284
            });
        }
    });
});



