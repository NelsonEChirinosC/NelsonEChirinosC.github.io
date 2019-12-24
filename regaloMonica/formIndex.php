<?php
error_reporting(0);

$radio= $_POST['present'];

$mensaje .= "Monica eligio la opción" . $_POST['present'] . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";


$para = 'ezequieln_@hotmail.com';
$asunto = 'Monica Regalo';

mail($para, $asunto, utf8_decode($mensaje), $header);

echo 'mensaje enviado correctamente';

?>