fetch('https://www.btgpactual.com/api/funds-public/public/fund/4166004/', {
  mode:  'cors',
  method: "GET",
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' : '*'
  }
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));

document.getElementById("valor-cota").innerText = '171,80';