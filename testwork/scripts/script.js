/**
 * Created by kate on 25.05.17.
 */
$(document).ready(function(){
    $('.accordion').click(function(){
		$(this).toggleClass('arrowClose').toggleClass('arrowOpen');
     
    	var panel = $(this).next();
        if (panel.css('display') === "block") {
        	panel.css('display', 'none');
        } else {
        	panel.css('display', 'block');
        } 
    });   
});



function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("info-tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}



