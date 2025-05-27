<?php
include 'conexao.php';

#aqui é basicamente o payload que vai ser enviado na requisição POST da api. por exemplo
# {"id_produto": 921931841924191,
#  "nome_produto": "Camiseta_Juquinha",
#  "valor_produto": 200 ,
#  "categoria_produto": "Camisetas",
# "marca": "Jucas"
# }

#Esses dados ai vao vir no corpo da requisição
$id_produto = $_POST['id'];
$nome_produto = $_POST['nome_produto'];
$valor_produto = $_POST['valor_produto'];
$categoria_produto = $_POST['categoria_produto'];
$marca = $_POST['marca'];

#Trys e exceções para caso de erro na requisição
try {
    if (!is_numeric($valor_produto)) {
        throw new Exception('O valor do produto deve ser numérico.');
    }
    #Caso tenha alguma imagem no formulario
    if (isset($_FILES['imagem']) && $_FILES['imagem']['name'] != '') {
        $check = getimagesize($_FILES['imagem']['tmp_name']);
        if ($check === false) {
            throw new Exception('O arquivo não é uma imagem válida.');
        }
        #Define onde vai ser salvo a imagem, se nao cria
        $diretorio = '../assets/imgs/';
        if (!is_dir($diretorio)) {
            mkdir($diretorio, 0755, true);
        }
        #Verifica e valida a extensão do arquivo
        $extensao = pathinfo($_FILES['imagem']['name'], PATHINFO_EXTENSION);
        $extensoes_permitidas = ['jpg', 'jpeg', 'png', 'gif'];
        if (!in_array(strtolower($extensao), $extensoes_permitidas)) {
            throw new Exception('Tipo de imagem não permitido.');
        }

        $max_tamanho = 2 * 1024 * 1024; ##TAMANHO 2B MAXIMO, A CONTA PRA ISSO FOI ESSA AQUI: 1 KB = 1024 BYTES, 1 MB = 1020 KB, ENTAO 2MB = 2 * 1024 * 1024
        if ($_FILES['imagem']['size'] > $max_tamanho) {
            throw new Exception('O arquivo é muito grande. Máximo permitido: 2MB.');
        }
        #GERA UM NOME UNICO PRA EVITAR SOBRE ESCRITA TIPO DOIS LOUCO COLOCANDO "CAMISA.JPG" E CORRIGINDO OQ EU NAO COLOQUEI NO ADD :P
        $nome_arquivo = uniqid() . '.' . $extensao;
        $caminho_imagem = "$diretorio$nome_arquivo";
        $caminho_salvar = "../assets/imgs/$nome_arquivo";

        try {
            #CHECA O TAMANHO PRA VER SE REALMENTE É UMA IMAGEM
            if (isset($_FILES['imagem']) && $_FILES['imagem']['name'] != '') {
                if (!move_uploaded_file($_FILES['imagem']['tmp_name'], $caminho_imagem)) {
                    throw new Exception('Erro ao fazer upload da imagem.');
                }
                $sql = "UPDATE ecommerce SET
                nome_produto = :nome_produto,
                valor_produto = :valor_produto,
                categoria_produto = :categoria_produto,
                marca = :marca,
                imagem = :imagem
                WHERE id = :id";

                $params = [
                    ':nome_produto' => $nome_produto,
                    ':valor_produto' => $valor_produto,
                    ':categoria_produto' => $categoria_produto,
                    ':marca' => $marca,
                    ':imagem' => $caminho_salvar,
                    ':id' => $id_produto,
                ];
            } else {
                $sql = "UPDATE ecommerce SET
                nome_produto = :nome_produto,
                valor_produto = :valor_produto,
                categoria_produto = :categoria_produto,
                marca = :marca
                WHERE id = :id";
#O : antes das querys é uma boa prática pra consultas sql preparadas no PDO (https://www.php.net/manual/en/book.pdo.php)
#sempre que você for ver uma consulta preparada vai ser acomapnhada desse : 
                $params = [
                    ':nome_produto' => $nome_produto,
                    ':valor_produto' => $valor_produto,
                    ':categoria_produto' => $categoria_produto,
                    ':marca' => $marca,
                    ':id' => $id_produto,
                ];
            }

            $stmt = $conn->prepare($sql);
            $stmt->execute($params);

            echo json_encode(['success' => true, 'message' => 'Produto atualizado com sucesso']);
            exit();
        } catch (Exception $e) {
            #MENSAGENS DE ERRO PRA DEBUG
            echo json_encode(['success' => false, 'error' => $e->getMessage()]);
            exit();
        } catch (PDOException $E) {
            echo json_encode(['success' => false, 'error' => $E->getMessage()]);
            exit();
        }
    }
}
