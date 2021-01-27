// $ means query selector 

function $(select) {
    return document.getElementById(select);
}

//  Counter function  start for every product 
// conterUP
function shoppingIteamCounterUp(counter) {
    let number = $(counter).value;

    if (number >= 1) {
        number++
        return $(counter).value = number++;
    }
}

// Counter Down 
function shoppingIteamCounterDown(counter) {
    let number = $(counter).value;

    if (number >= 2) {
        number--
        return $(counter).value = number--;
    }
}

//  Counter function  stop for every product 

// counter and price up  and down for first product

let price = $("priceOne").innerText;
price = parseFloat(price)



$("plusBtn").addEventListener('click', function() {

    shoppingIteamCounterUp("iteams")

    let totalIteamNumber = $("iteams").value;
    totalIteamNumber = parseFloat(totalIteamNumber)
    let totalValueOfPrice = price * totalIteamNumber;
    $("priceOne").innerText = totalValueOfPrice;

    // subTotal Price 
    let iteamTV = $("itemTwoVlue").innerText;
    iteamTV = parseFloat(iteamTV)
    $("subTotal").innerText = totalValueOfPrice + iteamTV;

});


$("minusBtn").addEventListener('click', function() {

    shoppingIteamCounterDown("iteams")

    totalIteamNumber = $("iteams").value;
    totalValueOfPrice = price * totalIteamNumber;
    $("priceOne").innerText = totalValueOfPrice;



    // subTotal Price 
    let iteamTV = $("itemTwoVlue").innerText;
    iteamTV = parseFloat(iteamTV)
    $("subTotal").innerText = totalValueOfPrice + iteamTV;

});





// counter and price   up  and down for second  product

let pricetwo = $("itemTwoVlue").innerText;
pricetwo = parseFloat(pricetwo)

$("secondPluseBtn").addEventListener('click', function() {

    shoppingIteamCounterUp("itemTwo")

    let totalIteamTwoNumber = $("itemTwo").value;
    totalIteamTwoNumber = parseFloat(totalIteamTwoNumber)
    var totalValueOfPriceTwo = pricetwo * totalIteamTwoNumber;

    $("itemTwoVlue").innerText = totalValueOfPriceTwo;



    // subTotal Price 
    let priceOne = $("priceOne").innerText;
    priceOne = parseFloat(priceOne)
    $("subTotal").innerText = totalValueOfPriceTwo + priceOne;

});


$("secondMinusBtn").addEventListener('click', function() {

    shoppingIteamCounterDown("itemTwo")

    totalIteamTwoNumber = $("itemTwo").value;
    totalValueOfPriceTwo = pricetwo * totalIteamTwoNumber;
    $("itemTwoVlue").innerText = totalValueOfPriceTwo;


    // subTotal Price 
    let priceOne = $("priceOne").innerText;
    priceOne = parseFloat(priceOne)
    $("subTotal").innerText = totalValueOfPriceTwo + priceOne;

});