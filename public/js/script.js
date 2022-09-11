async function req() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  //console.log(num1, num2);

  url = "http://localhost:4500/calc/?num1=" + num1 + "&num2=" + num2;
  
  const options = {
    mode:"no-cors",
    method: "GET",
    headers: { "Access-Control-Allow-Origin": "*" },
  };

  const response = await fetch(url, options).then((response) => {
    return response;
    
  });

  document.getElementById("add").value = response.ADDITION;
  document.getElementById("sub").value = response.SUB;
  document.getElementById("mul").value = response.MULTIPLICATION;
  document.getElementById("div").value = response.DIV;
}