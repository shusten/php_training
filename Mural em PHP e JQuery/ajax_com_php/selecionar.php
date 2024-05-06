<?php

  header('Content-Type: application/json');

  require_once('./env.php');

  try {
    $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare('SELECT * FROM comments');
    $stmt->execute();

    $comments = $stmt->fetchAll(PDO::FETCH_ASSOC);

    if (count($comments) > 0) {
        echo json_encode($comments);
    } else {
        echo json_encode(array('message' => 'Nenhum comentário encontrado'));
    }
} catch (PDOException $e) {
    echo json_encode(array('error' => 'Erro ao acessar o banco de dados: ' . $e->getMessage()));
}