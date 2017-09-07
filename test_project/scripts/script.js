
$(document).ready(function() {
/* 
   $('.mobile-btn').click(function () {
        $('.mobile-nav').slideToggle();
    });

    $('.accordion').click(function() {
		$(this).toggleClass('arrowClose').toggleClass('arrowOpen');
     
    	var panel = $(this).next();
        panel.toggle();
    });
*/

    var slider = $('.bxslider').bxSlider({
        controls: false,
        startSlide: 1
    });
  
    $('.info-tab-link').click(function () {
        $('.info-tab-link').removeClass('active');
        $(this).addClass("active");

        $('.tabcontent').removeClass('active');
        $('#'+ $(this).data('tab')).addClass('active');/*.find('.bxslider').bxSlider({
        controls: false,
        startSlide: 1

    });
*/
        event.preventDefault();
        slider.reloadSlider();

    });



    /*(function($) {
        $(function() {

          $('ul.info-tabs-wrapper').on('click', 'li:not(.active)', function() {
            $(this)
              .addClass('active').siblings().removeClass('active')
              .closest('div.tabs').find('div.tabcontent').removeClass('active').eq($(this).index()).addClass('active');
          });

        });
        })(jQuery);*/
    
});