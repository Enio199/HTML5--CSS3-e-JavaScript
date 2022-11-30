<?php

if (isset($_POST['submit'])) {

    include_once('conexao.php');

    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $estado = $_POST['estado'];
    $nascimento = $_POST['Data'];
    $sexo = $_POST['sex'];
    $rec = $_POST['hist'];

    $inserir = mysqli_query($banco, "INSERT INTO pessoas(nome,email,nascimento,estado,sexo,recomendacao) VALUES ('$nome','$email','$nascimento', '$estado','$sexo', '$rec')");
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>input</title>
    <link rel="stylesheet" href="style_input.css">
</head>
<body>
    <form id="primeiroForm" action="input.php" method="POST">
        <fieldset>
            <legend>Cadastro pessoal</legend>
        
            <!--Bloco dos nomes e email-->

            <div class="nome">
                <div class="cad">
                    <label for="nome">Nome</label>
                    <input type="text" name="nome" placeholder="Nome" required>
                </div>
                <div class="cad">
                    <label for="email">E-mail</label>
                    <input type="email" name="email" id="" placeholder="insano@gmail.com" required>
                </div>
            </div>

            <!--Bloco do nascimento e select-->

            <div class="select">
                <div class="cad">
                    <label for="">Ano de nascimento:</label>
                    <input type="date" name="Data" id="date">
                </div>
                <div class="cad">
                    <label for="cidade">Selecione o estado:</label>
                    <select name="estado" id="sele">
                        <option value="">Selecione</option>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espirito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                    </select>  
                </div>
            </div>

            <!--Bloco dos Tipos de gênero-->

            <div class="cad1">
                <p>sexo</p>
                    <div id="radio">
                        <input type="radio" value="Masculino" name="sex" id="masc">
                        <label for="sex">Masculino</label>
                        <input type="radio" name="sex" id="masc" value="Feminino">
                        <label for="sex">Feminino</label>
                    </div>
            </div>



            <div class="cad">
                <label for="história">Fale um pouco sobre você</label>
                <textarea name="hist" id="hist" rows="6" placeholder="Escreva seu texto aqui..." style="width:100%; margin-top: 10px;" ></textarea>
            </div>
        </fieldset>
        <button name="submit" id="sub">Salvar</button>
    </form>
    <div class="verifique">
        
    </div>
</body>
 <!--
    <script src="form.js" defer></script>
    <script src="pessoa.js" defer></script>
-->
</html>