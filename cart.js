/* global $ */
    var session = sessionStorage;
function initializeCart(){

    
    var cartList = session.getItem('paintingList');
    
    if (!cartList){
        var list =[];
        var jsonList = JSON.stringify(list);
        session.setItem('paintingList', jsonList);
    }

}

function addItemToCart(itemName,price,src){
    var cartList = session.getItem('paintingList');
    
    
        var listArray = JSON.parse(cartList);
        var newItem = {'name':itemName, 'price':price, 'src':src}
        
        listArray.push(newItem);
        
        var jsonList = JSON.stringify(listArray);
        
        session.setItem('paintingList', jsonList);
    
}

function removeItemFromCart(itemIndexInArray){

    
    var cartList = session.getItem('paintingList');
    
    var listArray = JSON.parse(cartList);

        
    var newArray = [];
    for (var i = 0; i < listArray.length; i++){
       
        if(i != itemIndexInArray){
 
            newArray.push(listArray[i]);
        }
    }
        
    var jsonList = JSON.stringify(newArray);
        
    session.setItem('paintingList', jsonList);
    
}


function getCartItemTotal(){
    var cartList = session.getItem('paintingList');
    
    var listArray = JSON.parse(cartList);
    
    var total = listArray.length;
    
    return total;
}

function getItemList(){
     var cartList = session.getItem('paintingList');
    
    var listArray = JSON.parse(cartList);
    
    return listArray;
}




$(document).ready(initializeCart);