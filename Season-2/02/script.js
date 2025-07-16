// const cart=["shoes","pants","kurta"];

// createOrder(cart,function(orderId){
// proceedToPayment(orderId);
// });

// const promise=createOrder(cart);

// promise.then(function(orderId){
// proceedToPayment(orderId);
// });
const gitHub_API="https://api.github.com/users/ankitadasz"
const user=fetch(gitHub_API);

console.log(user);
user.then(function(data){
    console.log(data);
    
})
