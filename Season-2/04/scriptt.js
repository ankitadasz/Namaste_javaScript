const api_Url = "https://invalidrandomurl";
async function getInfo() {
  try {
    const data = await fetch(api_Url);
    const json = await data.json();
    console.log(json);
    
  } catch (err) {
    console.log(err);
  }
}
getInfo();
