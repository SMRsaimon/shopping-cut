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




// counter and priceup  and down for first product

let price = $("priceOne").innerText;

$("plusBtn").addEventListener('click', function() {

    shoppingIteamCounterUp("iteams")

    let totalIteamNumber = $("iteams").value;
    var totalValueOfPrice = price * totalIteamNumber;
    $("priceOne").innerText = totalValueOfPrice;

});
$("minusBtn").addEventListener('click', function() {

    shoppingIteamCounterDown("iteams")

    let totalIteamNumber = $("iteams").value;
    var totalValueOfPrice = price * totalIteamNumber;
    $("priceOne").innerText = totalValueOfPrice;
});