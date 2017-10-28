/* global $ getCartItemTotal addItemToCart getItemList removeItemFromCart*/

/* everypage need to run setCart() function when innitialize maybe add to common.js */

var shoppingList;

function initializePage(){
    setCart();
    updateList();
    displayCartItem();
    setItemTotal();
    setPriceTotal();
    $('.delete-button').on('click',removeFromCart);
}

function setCart(){
    var cartItemTotal = getCartItemTotal();
    var cartText = 'Cart(' + cartItemTotal + ')';
    $('#cart').find('a').text(cartText);
}

function updateList(){
    shoppingList = getItemList();
}

function setItemTotal(){
    var cartItemTotal = getCartItemTotal();
    $('#item-total').text(cartItemTotal);
        
}

function setPriceTotal(){
    var total=0;
    if (shoppingList.length > 0){
        for (var i=0; i<shoppingList.length; i++){
            var priceString = shoppingList[i].price.replace('$', '');
            var price = parseInt(priceString);
            total += price;
        }
    }
     $('#price-total').text(total);
}

function displayCartItem(){
    var parent = $('#item-table')
    for(var i= 0; i<shoppingList.length; i++ ){
        var htmlBlock="<div class='row item-row' id='item" + i +"'>";
        htmlBlock = htmlBlock + "<div class='col-md-1 col-md-offset-1 index' ><h1>" + (i+1).toString() + "</h1></div>";
        htmlBlock = htmlBlock + "<div class='col-md-2 image'><img src='" +shoppingList[i].src + "'/></div>";
        htmlBlock = htmlBlock + "<div class='col-md-2 name' ><h1>" + shoppingList[i].name + "</h1></div>";
        htmlBlock = htmlBlock + "<div class='col-md-1 price'><h1>" + shoppingList[i].price + "</h1></div>";
        htmlBlock = htmlBlock + "<div class='col-md-1'><h1 class='delete-button' id='delete" + i + "'>Delete</h1></div></div>";
        parent.append(htmlBlock);
    }
    
}

function removeFromCart(event){
    var id = event.target.id;
    var indexString = id.replace('delete','');
    var index = parseInt(indexString);
    
    removeItemFromCart(index);

    $('#item-table').empty();

    updateList();
    displayCartItem();
    $('.delete-button').on('click',removeFromCart);
    setCart();
    setItemTotal();
    setPriceTotal(); 
}





$(document).ready(initializePage);