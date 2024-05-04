<?php

  header('Content-Type: application/json');

  require_once('./env.php');

  $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);

  $stmt = $pdo->prepare('SELECT * FROM comments');
  $stmt->execute();

  if ($stmt->rowCount() >= 1) {
      echo json_encode($stmt->fetchAll(PDO::FETCH_ASSOC));
  } else {
      echo json_encode('Nenhum comentário encontrado');
  }