// Galeria de imagens
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

// Carrinho de compras

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
        <span id="Carrinho_Lista-Preco">$${Carrinho[i].preco}</span>
        <i id="Carrinho_Lista-RemoveBtn" class="fa-solid fa-xmark" onclick="RemoverDoCarrinho(${i})"></i>
        `;
        lista.appendChild(item);
    }

}
