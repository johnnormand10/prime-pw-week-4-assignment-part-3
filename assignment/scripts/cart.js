console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
var basket = [];
const maxItems = 5;
function addItem(item){
    if(basket.length === maxItems ){ // added maxItems into addItems 
        return false;
    }
    else{
        basket.push(item);
        return true;
    }
}
console.log("Basket is" ,  basket);
console.log("Adding apples (expect ture)" , addItem("apples"));
console.log("Basket is now" , basket);

console.log("Adding bananas (expect true)" , addItem("bananas"));
console.log("Basket is now" , basket)

console.log("Adding eggs (expect true)" , addItem("eggs"));
console.log("Basket is now" , basket);

console.log("Adding milk (expect true" , addItem("milk"));
console.log("Basket is now" , basket);

console.log("Adding bread (expect true)" , addItem("bread"));
console.log("Basket is now" , basket);

console.log("Adding oranges (expect false)" , addItem("oranges"));
console.log("Basket is still" , basket);


function listItems(basket){
    for (i = 0; i < basket.length; i++){
            console.log(basket[i]);
        }
        return true;
    }

function isFull(basket){
    let valueFound = false;
    if (basket.length === maxItems){
        valueFound = true;
    }
console.log(valueFound);
return(valueFound); 
}

isFull(basket);



listItems(basket);
 
function empty(basket){
    basket = [];
    console.log(basket);
    return basket;
}


empty(basket);

