const allRadios = document.querySelectorAll("#Radios");
// Definir botões para todos os Radios
for (let i=0; i < allRadios.length; i++){
    for (let j=0; j < allRadios[i].children.length; j++){
        allRadios[i].children[j].addEventListener('click', function(){
            MarkRadio(i, j);
        });
    }
}

function MarkRadio (radioID, radioCheckID){
    for (let i=0; i < allRadios.length; i++){
        for (let j=0; j < allRadios[i].children.length; j++){
            if (i == radioID && j == radioCheckID){
                allRadios[radioID].children[radioCheckID].children[0].classList.add("RadioCircleChecked");
                const valorSelecionado = document.querySelector("#RadioSelecionado");
                valorSelecionado.innerHTML = allRadios[radioID].children[radioCheckID].children[1].textContent;
            }else {
                allRadios[i].children[j].children[0].classList.remove("RadioCircleChecked");
            }
        }
    }
}