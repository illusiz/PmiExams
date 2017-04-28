/**
 * Created by Vahe on 4/28/2017.
 */
// accordion pluse minus goes here
jQuery('.accordion-toggle').click(function(){

    var has = jQuery(this);
    if(has.hasClass('collapsed')){
        jQuery(this).find('i').removeClass('fa-plus');
        jQuery(this).find('i').addClass('fa-minus');
    }
    else{
        jQuery(this).find('i').removeClass('fa-minus');
        jQuery(this).find('i').addClass('fa-plus');
    }
})