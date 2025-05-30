<?php
header('Content-Type: application/json; charset=utf-8');
include 'conexao.php';

#função pra padronizar a resposta da API, como : 405, Metodo nao permitido, 26-05-2025 00:00:00
function respond($status, $message, $data = null)
{
    http_response_code($status);
    echo json_encode([
        'status' => $status,
        'message' => $message,
        'data' => $data,
    ]);
    exit();
}

#Verifica a request e se nao for postman retorna como o erro 405 padronizado ali em cima ^
#é bom ter esse tipo de validação por conta do famosinho burpsuite, ele pode mudar a requisição desse endpoit pra um PUT, PATCH ou ate DELETE
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, 'Método não permitido.');
}

#Boa pratica muito legal aqui pra quem for ver, transforme o ID em um UUID unico, voce pode fazer isso direto na sua DB mas como nao to usando aqui
#vai pelo PHP MSM AHUADSHUDASHUADSUD
$id = bin2hex(random_bytes(16));

$nome_produto = $_POST['nome_produto'] ?? null;
$valor_produto = $_POST['valor_produto'] ?? null;
$categoria_produto = $_POST['categoria_produto'] ?? null;
$marca = $_POST['marca'] ?? null;

#Valida se tem todos os campos e caso nao, dispara o json
if (!$nome_produto || !$valor_produto || !$categoria_produto || !$marca) {
    respond(400, 'Campos obrigatórios faltando.');
}

#Mesma coisa com imagem
if (!isset($_FILES['imagem']) || $_FILES['imagem']['error'] !== UPLOAD_ERR_OK) {
    respond(400, 'Imagem é obrigatória e deve ser enviada corretamente.');
}

#Define o diretorio como dir e tem o __DIR__ pra definir o diretorio atual do script, evita erros com o salvamento do arquivo
$diretorio = __DIR__ . '/../assets/imgs/';

#Verifica se é um diretorio existente
if (!is_dir($diretorio)) {
    if (!mkdir($diretorio, 0755, true)) {
        respond(500, 'Falha ao criar diretório para uploads');
    }
    #em um servidor estruturado a pasta que iria salvar as imagens seria public/imgs/ e as imagens
    #https://www.php.net/manual/en/function.fileperms.php
    #https://www.php.net/manual/en/function.chmod.php

    #Sinceramente é muito mais fácil de lidar com uploads de imagens quando você já se tem um front e até mesmo no Laravel
    #https://stackoverflow.com/questions/54026615/how-to-upload-an-image-using-laravel

    #Verificação de segurança contra shell uploads, muitos hackers tentam dar bypass em verificações com por exemplo: teste123.php.pdf pra injetar uma shell
    file_put_contents(
        $diretorio . '.htaccess',
        "Deny from all\n
<FilesMatch '\.(jpg|jpeg|png|gif|webp)$'>\n
    Allow from all\n
    SetHandler none\n
    SetHandler default-handler\n
    Options -ExecCGI\n
    RemoveHandler .cgi .php .php3 .php4 .php5 .phtml .pl .py .pyc .pyo\n
</FilesMatch>\n
<IfModule mod_php.c>\n
    php_flag engine off\n
</IfModule>",
    );
}

#Verifica as permisões do diretorio
if (!is_writable($diretorio)) {
    respond(500, 'Diretório de uploads não tem permissão de escrita');
}

#Aqui eu poderia ter feito a renomeação do arquivo como um uuid ou uma hash para evitar conflito ou sobreposição no futuro, DICA DEV!!

$nome_arquivo = basename($_FILES['imagem']['name']);
$caminho_imagem = $diretorio . $nome_arquivo;
$caminho_salvar = '/../assets/imgs/' . $nome_arquivo;
#Checka o tamanho da imagem para validação se é mesmo uma
$check = getimagesize($_FILES['imagem']['tmp_name']);
if ($check === false) {
    respond(400, 'O arquivo enviado não é uma imagem válida.');
}
#Caso nao consiga enviar a imagem pro servidor "Ah mas nao tem nenhuma contra-medida, só a resposta do json" shhhhhhhh
if (!move_uploaded_file($_FILES['imagem']['tmp_name'], $caminho_imagem)) {
    respond(500, 'Falha ao salvar a imagem no servidor.');
}

#Adicione os produtos na nossa Database yeeeey
try {
    $sql = "INSERT INTO ecommerce (id, nome_produto, valor_produto, categoria_produto, marca, imagem)
            VALUES (:id, :nome, :valor, :categoria, :marca, :imagem)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id', $id);
    $stmt->bindParam(':nome', $nome_produto);
    $stmt->bindParam(':valor', $valor_produto);
    $stmt->bindParam(':categoria', $categoria_produto);
    $stmt->bindParam(':marca', $marca);
    $stmt->bindParam(':imagem', $caminho_salvar);

    $stmt->execute();

    respond(201, 'Produto cadastrado com sucesso.', ['id' => $id]);
} catch (PDOException $e) {
    #removem a imagem que foi salva, caso haja erro no cadastro pra nao sobrecarregar e nao ficar aquela coisa FEIA
    if (file_exists($caminho_imagem)) {
        unlink($caminho_imagem);
    }
    respond(500, 'Erro ao cadastrar produto.');
}
#Faz o Catch caso haja um erro, não é tão recomendado em todas as requisições, mas é bom ter ele sempre pra debuggar o básico até erros criticos
