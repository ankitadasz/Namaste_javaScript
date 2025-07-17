const cart = ["shoes", "heel", "pant"];

createOrder(cart)
.then(function (orderId) {
  console.log(orderId);
})
.then(function(){
  proceedToPayment(orderId);
})
  // proceedToPay(orderId);
.then(function(paymentInfo){
  console.log(paymentInfo);
  
})
.catch(function(err){
  console.log(err.message);
})

//producer
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createOrder
    //validateCart
    //orderId

    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    //logicForCreateOrder
    const orderId = "12345";
    if (orderId) {
      setTimeout(() => resolve(orderId), 5000);
    }
  });
  return pr;
}

function validateCart(cart) {
  return false;
}
function proceedToPayment(orderId){
  return new Promise(function(resolve,reject){
    resolve("payment Successfull");
  })
}
