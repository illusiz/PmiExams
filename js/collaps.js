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

$(function(){
    $('.btn-circle').on('click',function(){
        $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');
        $(this).addClass('btn-info').removeClass('btn-default').blur();
    });

    $('.next-step, .prev-step').on('click', function (e){
        var $activeTab = $('.tab-pane.active');

        $('.btn-circle.btn-info').removeClass('btn-info').addClass('btn-default');

        if ( $(e.target).hasClass('next-step') )
        {
            var nextTab = $activeTab.next('.tab-pane').attr('id');
            $('[href="#'+ nextTab +'"]').addClass('btn-info').removeClass('btn-default');
            $('[href="#'+ nextTab +'"]').tab('show');
        }
        else
        {
            var prevTab = $activeTab.prev('.tab-pane').attr('id');
            $('[href="#'+ prevTab +'"]').addClass('btn-info').removeClass('btn-default');
            $('[href="#'+ prevTab +'"]').tab('show');
        }
    });
});


loadObjects = function() {
    /* LOAD OBJECTS */
    $("img, embed, iframe").each(function() {
        var obj = $(this);

        obj.attr("src", obj.data("objsrc")).ready(function() {
            obj.fadeIn(1000, "linear").prev(".loading").fadeOut(750, "linear", function() {
                $(this).remove();
            });
        });
    });
}

$(document).ready(function() {
    /* *** PREVENT OBJECTS FROM LOADING *** */
    $("img, embed, iframe").each(function() {
        var obj = $(this);
        obj.data("objsrc", obj.attr("src"));
        obj.hide().attr("src", "").before("<span class=\"loading\"></span>");
    });
});
    


