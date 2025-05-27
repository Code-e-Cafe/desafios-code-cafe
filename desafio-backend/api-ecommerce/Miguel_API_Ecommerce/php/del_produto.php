<?php
header('Content-Type: application/json');
include('conexao.php');

#Mas em um sistema real além da requisição é bom pegar a chamada do usuario que está fazendo, a role e se ele tem permissao pra usar o metodo DELTE

#tipo assim: checkPermission(['admin']);

if ($_SERVER['REQUEST_METHOD'] !== 'DELETE') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Método HTTP não permitido.']);
    exit();
}

#Pra pegar por query string e se é valido, previne chamadas invalidas na nossa apizinha de esquina
if (!isset($_GET['id']) || !is_numeric($_GET['id'])) {
    http_response_code(400); 
    echo json_encode(['success' => false, 'error' => 'ID inválido ou não fornecido']);
    exit();
}

#converte o valor do id para Inteiro para eviitar possiveis injections denovo (isso é mais recorrente doq vc pensa 😥)
$id = (int) $_GET['id'];

$sql = "DELETE FROM ecommerce WHERE id = :id";

try {
    #Prepara a query sql pra deletar pelo parametro ID, DENOVO EVITANDO INJECTION HAHAHAHA ai q coisa LINDA
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $id, PDO::PARAM_INT); #mesma coisa do alterar
    $stmt->execute();

    if ($stmt->rowCount() > 0) {
        echo json_encode(['success' => true, 'message' => 'Produto deletado com sucesso']);
    } else {
        http_response_code(404);
        echo json_encode(['success' => false, 'error' => 'Produto não encontrado']);
    }
} catch (PDOException $e) {
    #Captura o erro no banco e retorna a mensagem pra ajudar a debuggar
    http_response_code(500); 
    echo json_encode(['success' => false, 'error' => 'Erro ao deletar: ' . $e->getMessage()]);
}
