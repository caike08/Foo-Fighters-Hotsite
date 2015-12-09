jQuery(document).ready(function() {
	console.log("Jquery loaded");

    jQuery('#hamburger-menu').click(function(e) {
    	console.log("Button clicked");
        
        jQuery(this).toggleClass('active');
        jQuery('.menu-container ul').toggleClass('active');
 
        e.preventDefault();
    });

});