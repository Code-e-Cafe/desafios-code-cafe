<?php

$servidor = 'localhost';
$banco = ' '; #como não vou usar banco vai ser só o exemplinho aqui
$usuario = 'root';
$senha = '';

#Não é uma boa pratica fazer isso que eu estou fazendo em relacao a conexa com a database, sempre e bom um gitignore ou no .env
#Ao inves de retornar echo com o erro da mensagem retornar um json por conta de segurança, tipo assim
#$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

#catch (PDOException $e) {

#       echo json_encode([
#            "success" => false,
#             "error" => "Erro ao conectar ao banco de dados."
#          ]);
#           exit;
#        }

#Cria conexao PDO, Caso for pra um sistema real e grande, recomendo camada de conexão separada, como Database.php ;)
#https://www.php.net/manual/en/pdo.connections.php
#https://www.devmedia.com.br/php-pdo-como-se-conectar-ao-banco-de-dados/37211
try {
    $conn = new PDO("mysql:host=$servidor;dbname=$banco", $usuario, $senha);
} catch (PDOException $E) {
    echo 'Erro de conexão' . $E->getMessage();
}

?>
