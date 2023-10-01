//#region -> Galeria

show_img = 1;

Galeria();  
setInterval (function () { Galeria(); }, 5000);

function Galeria (){

    let img_1 = document.getElementById("GaleriaContent1");
    let img_2 = document.getElementById("GaleriaContent2");
    let img_3 = document.getElementById("GaleriaContent3");
    let img_4 = document.getElementById("GaleriaContent4");

    show_img ++;

    if (show_img == 1){
        img_1.style.display = "block";
        img_2.style.display = "none";
        img_3.style.display = "none";
        img_4.style.display = "none";
    }else if (show_img == 2){
        img_1.style.display = "none";
        img_2.style.display = "block";
        img_3.style.display = "none";
        img_4.style.display = "none";
    }else if (show_img == 3){
        img_1.style.display = "none";
        img_2.style.display = "none";
        img_3.style.display = "block";
        img_4.style.display = "none";
    }else if (show_img == 4){
        img_1.style.display = "none";
        img_2.style.display = "none";
        img_3.style.display = "none";
        img_4.style.display = "block";
    }

    if (show_img > 4) { show_img = 0; }
    //console.log(show_img);

}
//#endregion

//#region -> Carrinho de compras

const Carrinho = [];

function MostrarEsconderCarrinho (){
    const carrinho = document.querySelector("#Carrinho");
    carrinho.classList.toggle("hide");
}

function GerenciarQuantidade (acao, e){
    let quantidada = Number(e.parentElement.parentElement.querySelector("#Quantidade").textContent);
    if (acao == "add" && quantidada < 99){
        quantidada ++;
    }else if (quantidada > 1){
        quantidada --;
    }
    e.parentElement.parentElement.querySelector("#Quantidade").textContent = quantidada;
}

function AdicionarAoCarrinho (e){
    // Pegar valores do html
    const nomeDaCarne = e.parentElement.parentElement.querySelector("#NomeCarne").textContent;
    const precoDaCarne = Number(e.parentElement.parentElement.querySelector("#Preco").textContent.replace("R$", "").replace(",", "."));
    const quantidadeDaCarne = Number(e.parentElement.parentElement.querySelector("#Quantidade").textContent);

    // Objeto Item para adicionar ao carrinho
    const Item = {
        nome: nomeDaCarne,
        preco: precoDaCarne,
        quantidada: quantidadeDaCarne,
    };

    // Verificar se o item já esta no carrinho
    let novaAdicao = 0;
    if (Carrinho.length != 0){
        for (let i=0; i < Carrinho.length; i++){
            if (Carrinho[i].nome == Item.nome){
                // Se tiver atualiza
                Carrinho[i] = Item;
                novaAdicao = 0;
                break;
            }else {
                novaAdicao = 1;
            }
        }
        // Se não adicionar item
        if (novaAdicao == 1){
            Carrinho.push(Item);
        }
    }
    // Faz primeira adição a lista
    else {
        Carrinho.push(Item);
    }

    MostrarItemNoCarrinho ();
}

function RemoverDoCarrinho (posicaoNoCarrinho){
    Carrinho.splice (posicaoNoCarrinho, 1);
    MostrarItemNoCarrinho ();
}

function MostrarItemNoCarrinho (){
    const lista = document.querySelector("#Carrinho_Lista");
    lista.innerHTML = "";
    for (let i=0; i < Carrinho.length; i++){
        // Criar item, li para a lista
        const item = document.createElement("li");
        // Colocar informações
        item.innerHTML = `
        <span id="Carrinho_Lista-Nome">${Carrinho[i].nome}</span>
        <span id="Carrinho_Lista-Quantidade">$${Carrinho[i].quantidada}kg</span>
        <span id="Carrinho_Lista-Preco">$${ (Carrinho[i].preco * Carrinho[i].quantidada).toFixed(2) }</span>
        <i id="Carrinho_Lista-RemoveBtn" class="fa-solid fa-xmark" onclick="RemoverDoCarrinho(${i})"></i>
        `;
        lista.appendChild(item);
    }

}
//#endregion

//#region -> Validar Formulário

function ValidarFormulario (){

    // Nome
    const nome = document.querySelector("#nome").value;
    const palavras = nome.split(" ");
    //console.log(palavras);
    if (nome == "" || palavras.length < 2){
        alert("Preencher nome corretamente.");
        document.querySelector("#nome").style = "border: 1px solid red;";
        return;
    }else {
        document.querySelector("#nome").style = "border: 1px solid black;";
    }

    // Email
    const email = document.querySelector("#email").value;
    if (! /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
        alert("Preencher email corretamente.");
        document.querySelector("#email").style = "border: 1px solid red;";
        return;
    }else {
        document.querySelector("#email").style = "border: 1px solid black;";
    }

    // Telefone
    const telefone = document.querySelector("#telefone").value;
    let telefoneValido;
    if (telefone == "" || telefone.length < 11){
        alert("Telefone inválido.");
        document.querySelector("#telefone").style = "border: 1px solid red;";
        return;
    }else {
        telefoneValido = telefone.replace (/[\(\)\-\s]/g, "");
        document.querySelector("#telefone").style = "border: 1px solid black;";
    }
    //console.log(`Telefone: ${telefone}, Tamanho: ${telefone.length}`);
    //console.log(`TelefoneValido: ${telefoneValido}, TelefoneValido: ${telefoneValido.length}`);

    // Radio (Preferências)
    const RadioValorSelecionado = document.querySelector("#RadioSelecionado");
    if (RadioValorSelecionado.textContent == ""){
        alert("Selecionar preferência de carne.");
        return;
    }

    // Select-DropDown - Tipo de carne favorito
    const DropdownSelecionado = document.querySelector("#DropdownSelecionado");
    if (DropdownSelecionado.textContent == "" || DropdownSelecionado.textContent == "Escolha um tipo de carne"){
        alert("Escolher tipo de carne preferido.");
        return;
    }

    // Check-box - Receber comunição por
    const CheckBoxSelecionado = document.querySelector("#CheckBoxSelecionado").textContent;
    if (CheckBoxSelecionado == ""){
        alert("Escolha um meio de comunicação.");
        return;
    }

    // Mensagem
    const mensagem = document.querySelector("#mensagem").value;
    if (mensagem.length < 5){
        alert("Mensagem muito curta, digite até 5 caracteres.");
        return;
    }


    // Mostra no HTML
    const resultadoDeEnvio = document.querySelector("#ResultadoDeEnvioFormulario");
    resultadoDeEnvio.textContent = "Formulário enviado com sucesso!";
    resultadoDeEnvio.style = "color: green;";


    // Mostra no Console
    console.log(`
    Nome: ${nome}
    E-mail: ${email}
    Telefone: ${telefoneValido}
    Radio-Preferências: ${RadioValorSelecionado.textContent}
    Tipo De Carne Favorita: ${DropdownSelecionado.textContent}
    Meio de ComunicaçãoPor: ${CheckBoxSelecionado}
    Mensagem: ${mensagem}
    `);

}

//#endregion

