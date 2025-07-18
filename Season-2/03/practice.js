// createOrder
// proceedtopay
// showorder
// walletbalance
const cart = ["Dior", "chanel", "louisVuitton"];
function validatecart(cart) {
  if (cart == null) {
    return false;
  } else return true;
}
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validatecart(cart)) {
      reject("Not a validate cart");
    }
    const orderId = "123456";
    if (orderId) {
      setTimeout(() => resolve(orderId), 3000);
    }
  });

  return pr;
}

function proceedtopay(orderId) {
  const paymentDone = true;
  const pr = new Promise(function (resolve, reject) {
    if (!paymentDone) {
      setTimeout(() => reject("Payment for the cart item is not done"), 5000);
    } else {
      setTimeout(() => resolve("Payment is done for the cart items"), 5000);
    }
  });
  return pr;
}
function showOrder(orderId) {
  const pr = new Promise(function (resolve, reject) {
    setTimeout(
      () => resolve(`Order ID: ${orderId}, Items: 3, Status: Shipped`),
      6000
    );
  });
  return pr;
}
function walletBalance() {
  const pr = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("Wallet Balance is 6005"), 7000);
  });
  return pr;
}
let orderId;
createOrder(cart)
  .then((id) => {
    orderId = id;
    console.log("Order Created:", orderId);
    return proceedtopay(orderId);
  })
  .then((payment) => {
    console.log(payment);

    return showOrder(orderId);
  })
  .then((orderdetail) => {
    console.log(orderdetail);
    return walletBalance();
  })
  .then((balance) => {
    console.log(balance);
  })
  .catch((err) => {
    console.log("Error caught", err);
  });
