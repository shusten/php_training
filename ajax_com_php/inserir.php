<?php

    header('Content-Type: application/json');

    require_once('./env.php');
    
    $name = $_POST['name'] ?? '';
    $comment = $_POST['comment'] ?? '';

    try {
        $pdo = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME, DB_USER, DB_PASS);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $pdo->prepare('INSERT INTO comments (name, comment) VALUES (:na, :co)');
        $stmt->bindValue(':na', $name);
        $stmt->bindValue(':co', $comment);
        $stmt->execute();

        if ($stmt->rowCount() >= 1) {
            echo json_encode('Comentário Salvo com Sucesso');
        } else {
            echo json_encode('Falha ao salvar comentário');
        }
    } catch (PDOException $e) {
        echo json_encode('Erro ao conectar ao banco de dados: ' . $e->getMessage());
    }