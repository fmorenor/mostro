<?php
// Get values from the form
$name=$_POST['name'];
$apellido=$_POST['apellido'];
$tema=$_POST['tema'];
$email=$_POST['email'];
$cont=$_POST['cont'];
 
$to = "fmoreno@xolotl.com.mx";
$subject = "Contacto de La Casa del Mostro";
$message = " Nombre: " . $name . "\r\n apellido: " . $apellido . "\r\n tema: " . $tema . "\r\n Email: " . $email ."\r\n Mensaje: " . $cont;
 
 
$from = "CONTACTO";
$headers = "De:" . $from . "\r\n";
$headers .= "Content-type: text/plain; charset=UTF-8" . "\r\n"; 
 
if(@mail($to,$subject,$message,$headers))
{
  print "<script>document.location.href='http://www.mostro.com.mx';</script>";
  // Created by Future Tutorials
}else{
  echo "Error! Intenalo de Nuevo.";
}

?>