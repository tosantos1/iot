function Ligar() {
  document.getElementById('luz').src = '/image/Lon.png'
}
function Apagar() {
  document.getElementById('luz').src = '/image/Loff.png'
}

/*
const btnLigar = document.getElementById("btn_ligar")
const btnDesligar = document.getElementById("btn_desligar")
const pContador = document.getElementById("contador")

let contador = 0

pContador.innerHTML = contador

btnLigar.addEventListener("click", function () {
  pContador.innerHTML = ++contador;
})

btnDesligar.addEventListener("click", function () {
  pContador.innerHTML = --contador;

})

sendToServer(contador)
*/


setInterval(myTimer, 1);

function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();

  sendToServer(myTimer)
}


function sendToServer(myTimer) {
  const http = new XMLHttpRequest()

  http.open("GET", "https://api.thingspeak.com/update?api_key=VKI71WORPBGPTRDL&field2=0" + myTimer)

  http.send()

  http.onload = console.log(http.responseText + " " + myTimer)

}