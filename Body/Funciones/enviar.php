<?php
$user = $_POST['user'];
$email = $_POST['email'];
$contenido = $_POST['contenido'];

$header = 'From: ' . $email . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $user . " \r\n";
$message .= "Su e-mail es: " . $email . " \r\n";
$message .= "Solicita que agregen: " . $contenido . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'cgstudios002@gmail.com';
$asunto = 'Mensaje de... (Solicitud para agregar contenido)';

email($para, $asunto, utf8_decode($message), $header);

header("https://cg-pelis.netlify.app/inicio");
?>
