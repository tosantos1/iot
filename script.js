function Ligar() {
  document.getElementById('luz').src = '/image/Lon.png'
}
function Apagar() {
  document.getElementById('luz').src = '/image/Loff.png'
}
function Blink() {
  var intervalo = 0
  var contador = 0

  while (contador < 10) {
    intervalo += 300;
    setTimeout("document.getElementById('luz').src='/image/Lon.png'", intervalo)
    intervalo += 300;
    setTimeout("document.getElementById('luz').src='/image/Loff.png'", intervalo)
    contador++;
  }
}