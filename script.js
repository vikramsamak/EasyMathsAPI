//var add =document.getElementById("add")

function getdata(){
  const url="localhost:4500/getdata";
  
  fetch(url)
  .then((response) => {return response.json();})
  .then((data) => console.log(data)
  );
}
