function fecha () {
  var currentDate = new Date()
  var dia = currentDate.getDate()
  var week = currentDate.getDay() -1
  var mes = currentDate.getMonth() 
  var year = currentDate.getFullYear()
  var monthNames = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];
  var weekday = [ "Lunes", "Martes", "Miercoles", "Jueves", "viernes", "Sabado", "domingo"];
  // var signo = ["Ciervo","Caiman","Casa","Flor","Serpiente","Jaguar","Caña","Conejo","Aguila","Mono","Pedernal","Perro"];
  var caiman = [161,041,266,87];
  var aguila =[47,48,40];
  var comp = String(dia)+ String(mes+1);
  var comp1 = parseInt(comp);
  
  for (var x = 0; x < caiman.length; x++) {
    
    if (caiman[x]==comp1) {
      var signo="caiman";}    
 }
 for (var x = 0; x < aguila.length; x++){
    if (aguila[x]==comp1) { var signo="aguila";}

 }

  document.getElementById('horoscopo').src = "img/signos/"+signo+".png";
  document.getElementById('fecha').innerHTML=" " +signo;


}