var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf, xi, yf;
var colorcito = "orange";

for(l=0; l <lineas; l++)
{
yi = 10 * l;
xf = 10 * (l + 1);
xi = 300 - (l * 10);
dibujarLinea(colorcito, 0, yi, xf, 300);//izquierda inferior
dibujarLinea(colorcito, 300, yi, xf, 0);//derecha superior
dibujarLinea(colorcito, xi, 300, 300, yi);//derecha inferior
dibujarLinea(colorcito, xi, 0, 0, yi);//izquierda superior 
 console.log("Linea " + 1);
}

dibujarLinea("blue", 1, 1, 1, 299);
dibujarLinea("blue", 1, 299, 299, 299);
dibujarLinea("blue", 299, 1, 1, 1);
dibujarLinea("blue", 299, 299, 299, 1);

function dibujarLinea(color, xinicio, yinicio, xfinal, yfinal)
{
lienzo.beginPath();
lienzo.strokeStyle = color;
lienzo.moveTo(xinicio, yinicio);
lienzo.lineTo(xfinal, yfinal);
lienzo.stroke();
lienzo.closePath();
}
