<?php

    header('Content-Type: application/json');

    $json = file_get_contents('./env.json');

    // Decodifica o JSON para um array
    $env = json_decode($json, true);

    $name = $_POST['name'] ?? '';
    $comment = $_POST['comment'] ?? '';

    try {
        // Tenta conectar ao banco de dados
        $pdo = new PDO("mysql:host={$env['DB_HOST']};dbname={$env['DB_NAME']}", $env['DB_USER'], $env['DB_PASS']);
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