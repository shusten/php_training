<?php

$host = "db"; // Nome do serviço no docker-compose
$dbname = "login_db";
$username = "myuser"; // Usuário do MySQL
$password = "mypassword"; // Senha do MySQL

$mysqli = new mysqli($host, $username, $password, $dbname);

if ($mysqli->connect_errno) {
    die("Connection error: " . $mysqli->connect_error);
}

return $mysqli;