// JavaScript Document



function initializePage(){
    loadpopular();
    pictureInfo();
    setCart();
    $('.cart-image').on('click', addToCart);
    
}

function setCart(){
    var cartItemTotal = getCartItemTotal();
    if (cartItemTotal > 0){
        var cartText = 'Cart(' + cartItemTotal + ')';
        $('#cart').find('a').text(cartText);
    }
    
}

function addToCart(event){
    
    var container = $(event.target).parent().parent().parent();
    
    
    var name = $(container).find('.name').text();
    var price = $(container).find('.price').text();
    var src = $(container).find('img').attr('src');
    
    addItemToCart(name,price,src);
    
    setCart();
}

function loadImageForSection(name,v,section){
    var index= name+1;
    var targetId= '#'+section+index;
    
    var container = $(targetId);
    var img = $('<img />',{src: v.src, id: v.id}).appendTo(container);
    container.find('.name').text(v.name);
    container.find('.price').text(v.price);
    container.find('.glyphicon').attr('id', v.id);
}

function loadpopular(){
    $.get('Json/pop.json',function(data, success){
        $.each(data, function(index,value){
            $.each(value, function(name,v){
              loadImageForSection(name,v,'pop')  
            })
        })
    })
}

function pictureInfo(){
    
    $('.image-container').mouseenter(function(){
        var pHeight = $(this).height();
        
        var topPoint = (pHeight - 80).toString() + 'px';
        
        $(this).find('.flow-under').animate({top:topPoint}, 250);
    });
    
    $('.image-container').mouseleave(function(){
        $(this).find('.flow-under').animate({top: '100%'},250);
    });
    
}

$(document).ready(initializePage);
              
