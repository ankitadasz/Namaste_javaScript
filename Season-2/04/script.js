const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved value!!!");
  }, 10000);
});

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved value!!!");
  }, 20000);
});


//js engine will wait for the promise to be resolved
async function handlePromise() {
    console.log("huyytt");
    
  const val = await pr;
  console.log("hiiiiiiiiiiii");
  console.log(val);


  //this underline was resolved in 5sec but it has to wait for 10sec to resolved
  const val2 = await p;
  console.log("hiiiioooooooooooooooiiiiiiii");
  console.log(val2);
  
} 
handlePromise();


//js engine will not wait for promise to be resolved
// function getData(){
//     pr.then(res=>console.log(res));
//     console.log("hiiiiii");

// }
// getData();
