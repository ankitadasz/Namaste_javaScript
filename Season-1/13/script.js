function attachEventlistener() {
  let count = 0;
  document.getElementById("click").addEventListener("click", function xyz() {
    console.log("hiiii", ++count);
  });
}

attachEventlistener();
