function Ligar() {
  document.getElementById('luz').src = '/image/Lon.png'
}
function Apagar() {
  document.getElementById('luz').src = '/image/Loff.png'
}

setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();

  sendToServer(myTimer)
}

function sendToServer(state) {
  const http = new XMLHttpRequest()

  http.open("GET", "GET https://api.thingspeak.com/update?api_key=VKI71WORPBGPTRDL&field1=0" + state)

  http.send()

  http.onload = console.log(http.responseText + " " + state)

}