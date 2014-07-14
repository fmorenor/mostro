function fecha () {
  var currentDate = new Date()
  var dia = currentDate.getDate()
  var week = currentDate.getDay() -1
  var mes = currentDate.getMonth() 
  var year = currentDate.getFullYear()
  var monthNames = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];
  var weekday = [ "Lunes", "Martes", "Miercoles", "Jueves", "viernes", "Sabado", "domingo"];
  
  // Incian fechas para los signos var signo = ["Ciervo","Caiman","Casa","Flor","Serpiente","Jaguar","Caña","Conejo","Aguila","Mono","Pedernal","Perro"];
  var caiman = [11,211,82,282,292,203,94,294,195,86,286,187,78,278,169,610,2610,1511,1711,812,3112];
  var viento= [21,221,92,13,213,104,304,205,96,296,197,88,288,179,710,2710,1811,912];
  var casa =[31,231,102,23,223,114,15,215,106,306,207,98,298,189,810,2810,1911,1012];
  var lagartija =[41,241,112,33,233,124,25,225,116,17,217,108,308,199,910,2910,2011,1112];
  var serpiente =[51,251,122,43,243,134,35,235,126,27,227,118,318,209,1010,3010,2211,1212];
  var muerte = [61,261,132,53,253,144,45,245,136,37,237,128,19,219,1110,3110,2311,1312];
  var venado = [71,271,142,63,263,154,55,255,146,47,247,138,29,229,1210,111,2411,1412,];
  var conejo = [81,281,152,73,273,164,65,265,156,57,257,148,39,239,1310,211,2511,1512,1812];
  var agua = [91,291,162,83,283,174,75,275,166,67,267,158,49,249,1410,311,2611,1912];
  var perro = [101,301,172,93,293,184,85,285,176,77,277,168,59,259,1510,411,1611,2711,2012];
  var mono = [11,311,182,103,303,194,95,295,186,87,287,178,69,269,1610,511,2811,2112];
  var heno = [121,,192,113,313,204,105,305,196,97,297,188,79,279,1710,611,2911,2212];
  var cana =[131,,202,123,14,214,115,315,206,107,307,198,89,289,1810,711,3011,1712,2312];
  var jaguar =[141,12,212,133,24,224,125,16,216,117,317,208,99,299,1910,811,112,1612,2412];
  var aguila = [151,22,222,143,34,234,135,26,226,127,18,218,109,309,2010,911,212,2512];
  var zopilote =[161,32,232,153,44,244,145,36,236,137,28,228,119,110,2110,1011,312,2612];
  var movimiento = [171,42,242,163,54,254,155,46,246,147,38,238,129,210,2210,1111,412,2712];
  var pedernal = [181,52,252,173,64,264,165,56,256,157,48,248,139,310,2310,1211,512,2812];
  var lluvia = [191,62,262,183,74,274,175,66,266,167,58,258,149,410,2410,1311,612,2912];
  var flor = [201,72,272,193,84,284,185,76,276,177,68,268,159,510,2510,1411,712,3012];
// FECHAS ESTIPULADAS FIN

  var comp = String(dia)+ String(mes+1);
  var comp1 = parseInt(comp);
  
  for (var x = 0; x < caiman.length; x++) {
    
    if (caiman[x]==comp1) {
      var signo="caiman";}    
 }
 for (var x = 0; x < viento.length; x++){
    if (viento[x]==comp1) { var signo="viento";}
 }
 for (var x = 0; x < aguila.length; x++){
    if (aguila[x]==comp1) { var signo="aguila";}
 }
 for (var x = 0; x < casa.length; x++){
    if (casa[x]==comp1) { var signo="casa";}
 }
 for (var x = 0; x < lagartija.length; x++){
    if (lagartija[x]==comp1) { var signo="lagartija";}
 } 
 for (var x = 0; x < cana.length; x++){
    if (cana[x]==comp1) { var signo="cania";}
 }
 for (var x = 0; x < jaguar.length; x++){
    if (jaguar[x]==comp1) { var signo="jaguar";}
 }
 for (var x = 0; x < serpiente.length; x++){
    if (serpiente[x]==comp1) { var signo="serpiente";}
 }
  for (var x = 0; x < muerte.length; x++){
    if (muerte[x]==comp1) { var signo="muerte";}
 }
  for (var x = 0; x < movimiento.length; x++){
     if (movimiento[x]==comp1) { var signo="movimiento";}
 }
 for (var x = 0; x < venado.length; x++){
    if (venado[x]==comp1) { var signo="venado";}
 }
for (var x = 0; x < conejo.length; x++){
    if (conejo[x]==comp1) { var signo="conejo";}
 }
 for (var x = 0; x < agua.length; x++){
    if (agua[x]==comp1) { var signo="agua";}
 }
for (var x = 0; x < perro.length; x++){
    if (perro[x]==comp1) { var signo="perro";}
 }
 for (var x = 0; x < mono.length; x++){
    if (mono[x]==comp1) { var signo="mono";}
 }
 for (var x = 0; x < heno.length; x++){
    if (heno[x]==comp1) { var signo="heno";}
 }
 for (var x = 0; x < zopilote.length; x++){
    if (zopilote[x]==comp1) { var signo="zopilote";}
 }
 for (var x = 0; x < pedernal.length; x++){
    if (pedernal[x]==comp1) { var signo="pedernal";}
 }
  for (var x = 0; x < lluvia.length; x++){
    if (lluvia[x]==comp1) { var signo="lluvia";}
 }
 for (var x = 0; x < flor.length; x++){
    if (flor[x]==comp1) { var signo="flor";}
 }



  document.getElementById('horoscopo').src = "img/signos/"+signo+".png";
  document.getElementById('fecha').innerHTML=" " +signo;


}