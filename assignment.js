// problem: 01
function anaToVori (ana) {
    var vori = ana / 16;
    return vori ;  
}
// console.log(anaToVori(128)); 


// problem 2: 
    const panda = [
        { name: 'singara', price: 7, quantity: 2},
        { name: 'samucha', price: 10, quantity: 3},
        { name: 'jilapi', price: 15, quantity: 0}
    ];
    function pandaCost ( panda) {
    for ( let i = 0; i < panda.length; i++) {
        if ( panda[i].price * panda[i].quantity == totalCost ) {
            return totalCost;        
        }
    }
    console.log(pandaCost(panda));
}


// problem: 03 
function picnicBudget (i) {
if ( i <= 100) {
  var totalCost =  i*5000 ;
  console.log(totalCost)
}
else if ( i <= 200) {
    var totalCost =  (i -100)*4000 + 100*5000 ;
    console.log(totalCost)
}
else {
    var totalCost =  (i-200)*3000 + 100*5000 + 100*4000 ;
    console.log(totalCost)
}
return totalCost;
} 
// console.log(picnicBudget(180)); 


// problem: 04
let friends = ['abul', 'babul', 'cabul', 'dabul']  
function oddFriend (odd) {
  for (var i = 0; i < odd.length; i++) {
      if ( odd[i].length  % 2 !== 0) {
          return odd[i]
      }
  }
} 
// console.log(oddFriend(friends)); 