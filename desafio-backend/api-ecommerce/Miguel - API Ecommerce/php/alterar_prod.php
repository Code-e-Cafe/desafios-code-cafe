<?php
header('Content-Type: application/json');
include('conexao.php');

#Mesma pratica de segurança em relação a manipulação do cabeçalho da requisições
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405); 
    echo json_encode(['success' => false, 'error' => 'Método HTTP não permitido. Use GET.']);
    exit();
}

#Se o id nao for valido ou nao fornecido (bem autoexplicativo ne)
if (!isset($_GET['id']) || !is_numeric($_GET['id'])) {
    http_response_code(400); 
    echo json_encode(['success' => false, 'error' => 'ID inválido ou não fornecido']);
    exit();
}

$id = (int) $_GET['id'];

$sql = "SELECT * FROM ecommerce WHERE id = :id";

try {
    $stmt = $conn->prepare($sql);
     # VINCULA O VALOR COMO INTEIRO
    $stmt->bindParam(':id', $id, PDO::PARAM_INT); #PDO PRA EVITAR SQL INJECTION TIPO id=213913910'-- DROP_ALL_TABLES
    $stmt->execute();

    $produto = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($produto) {
    
        echo json_encode(['success' => true, 'produto' => $produto]);
    } else {
        http_response_code(404);
        echo json_encode(['success' => false, 'error' => 'Produto não encontrado']);
    }
} catch (PDOException $e) {
    #RETORNA O ERRO 500 EM CASO DE FALHA NA CONSULTA
    http_response_code(500);
    echo json_encode(['success' => false, 'error' => 'Erro ao consultar: ' . $e->getMessage()]);
}
