/* global $ */
$(document).ready(initializePage);

function initializePage(){
    resizePage();
    $(window).resize(resizePage);
}

function resizePage(){
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    
    var image = $('#the-image');
    var imageWidth = 1500;
    var imageHeight = 1125;
    
    $('#holder').width(windowWidth);
    $('#holder').height(windowHeight);
    

    if((windowWidth / windowHeight) > (imageWidth / imageHeight)){
        image.width(windowWidth);
    }else{

        image.height(windowHeight);
        var leftIndex = Math.floor((image.width() - windowWidth) / 2);
        var leftPx = '-'+leftIndex + 'px';


        $('.bk-image').css({left: leftPx});
    }   
}