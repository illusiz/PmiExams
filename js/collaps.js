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


loadObjects = function(element) {
    /* LOAD OBJECTS */

    var href =$(element).attr("href");
    href = href.substring(1);

    var div=document.getElementById(href);

    var iFrame = $(div).find("iframe");

    iFrame.attr("src", iFrame.data("objsrc")).ready(function() {
        iFrame.fadeIn(1000, "linear").prev(".loading").fadeOut(750, "linear", function() {
                $(this).remove();
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


$(".hidden_element").show(function(){
    // Find the iframes within our newly-visible element
    $(this).find("iframe").prop("src", function(){
        // Set their src attribute to the value of data-src
        return $(this).data("src");
    });
});



$(window).load(function() {
    // Animate loader off screen
    $(".loader").fadeOut("slow");

    document.getElementById("mypage").style.display = "block";
});

