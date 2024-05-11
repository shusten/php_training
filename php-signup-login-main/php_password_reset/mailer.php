<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . "/vendor/autoload.php";

$mail = new PHPMailer(true);



$mail->isSMTP();
$mail->SMTPAuth = false;  // O Postfix no contêiner não requer autenticação

$mail->Host = 'mailserver';  // Nome do serviço no docker-compose.yml
$mail->Port = 1025;

$mail->isHTML(true);

return $mail;
