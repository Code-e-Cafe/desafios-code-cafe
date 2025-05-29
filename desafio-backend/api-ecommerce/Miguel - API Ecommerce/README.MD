# Boas Práticas para Desenvolvimento de APIs com PHP (ou até sites completos, tipo ecommerce) e uma boa conversa sobre o PHP em si.

## Por que eu recomendo o PHP?  
O PHP tem uma curva de aprendizado bem tranquilhinha!  
É uma linguagem que não pesa muito, e mesmo não sendo a mais rápida, é super eficiente para soluções web, principalmente lojas virtuais e interações com clientes.  
Além disso, tem frameworks especializados nisso, tipo o **Laravel**!  
Criar uma API com PHP é fácil, eu pessoalmente gosto bastante :p.

---

## 1. Estrutura do Código  
O PHP já vem bem completinho, mas pra projetos mais complexos eu recomendo o que uso nos meus: frameworks MVC (Model, View, Controller) como **Laravel**, **Symfony** ou **CakePHP**.  
Eles oferecem uma estrutura top, com extensões para autenticação (como o Jetstream e o Breeze), organização de código, rotas, controllers, e muito mais, e pra galarinha do front, o laravel tem a opção de integrar com tailwind ein, fica lindo que uma beleza!!

Vídeos sobre o Laravel que eu acho legais: [text](https://youtu.be/Rz6SMgKrSYE), [text](https://youtu.be/SnOlhaJTMTA?list=PLwXQLZ3FdTVH5Tb57_-ll_r0VhNz9RrXb)

---

## 2. Controle de Acesso e Autenticação  
O MAIS IMPORTANTE: evite verificar usuário no front, tipo `if user === admin`.  
Uma boa prática é controlar permissões no backend, não só por *role*, mas por permissões específicas:  

```php
$_SESSION['user'] = [
    'id' => 123,
    'role' => 'admin',
    'permissoes' => ['alterar_produto', 'deletar_produto']
];

## 3. Segurança do PHP  
Falar que PHP é inseguro é tipo cair de bicicleta uma vez e sair dizendo que bicicleta é perigosa. PHP evoluiu muitoooooo!  
Na API de exemplo tem o PDO com prepared statements pra evitar SQL Injection, além de validação e sanitização de dados, e upload seguro que só aceita imagem verdadeira e salva com nome único.  
Mas não basta só saber PHP, tem que saber usar direito, cabeças de cutiá!

---

## 4. O Mercado do PHP  
Com certeza você já ouviu que o mercado do PHP tá ultrapassado, que vai sumir logo, sabe? Isso já rola desde os anos 2000 e lá vai bolinha  (e olha que eu sou de 2007).  
E aí, como que a gente tá? A gente tá HUULKK! Sem contar que tem muitas extensões legais do PHP aqui no Vscode ou até no PHPStorm.
Quase toda a web é feita em PHP. Essa linguagem é tipo um UNO de escada, tu não sabe como CARALHOS ela ta correndo, mas corre igual uma Ferrari
