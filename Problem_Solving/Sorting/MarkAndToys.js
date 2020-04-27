const markAndToys = (prices, k) => {
  let counter = 0;

 let pricings = prices.sort((a,b) => a-b)
 var amtLeft = k;
 for (var i = 0; i < pricings.length; i++){
     if (amtLeft < pricings[i]) {
         break;
     } else {
         amtLeft = amtLeft - pricings[i];
         counter++;
     }
 }  
    console.log(counter)
};

markAndToys([1, 12, 5, 111, 200, 1000, 10], 50);

/* 

Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certain amount to spend, and he wants to maximize the number of toys he buys with this money.

Given a list of prices and an amount to spend, what is the maximum number of toys Mark can buy? For example, if  and Mark has  to spend, he can buy items  for , or  for  units of currency. He would choose the first group of  items.

*/
