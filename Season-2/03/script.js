const cart = ["shoes", "heel", "pant"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err.message);
  })
  .then(function (orderId) {
    console.log("no matter what happens,i will be called");
  });
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
  if(cart==null){
    return false;
  }
  else
  return true;
}
function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("payment Successfull");
  });
}
