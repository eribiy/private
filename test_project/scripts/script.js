
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
    $('.info-tab-link').click(function () {
        $('.info-tab-link').removeClass('active');
        $(this).addClass("active");

        $('.tabcontent').removeClass('active');
        $('#'+ $(this).data('tab')).addClass('active');
    });

    
});