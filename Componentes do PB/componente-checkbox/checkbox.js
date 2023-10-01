const t = document.querySelector("#MainCheck");
let valorSelecionado;

function Check (e, id){
    // All possibles check include the selectAll
    const allChecks = e.parentElement.querySelectorAll(".CheckBoxRow");
    // The selectAll check
    const selectAll = allChecks[0].children[0];
    
    // Select all checkbox
    if (e.classList.contains("selectAll")){
        selectAll.classList.toggle("Checked");
        for (let i=1; i < allChecks.length; i++){
            if (selectAll.classList.contains("Checked")){
                allChecks[i].children[0].classList.add("Checked");
            }else {
                allChecks[i].children[0].classList.remove("Checked");
            }
        }
    }
    // Select one
    else {
        allChecks[id].children[0].classList.toggle("Checked");
    }

    // Check status of select all
    if (!AllChecked(allChecks)){
        selectAll.classList.remove("Checked");
        if (SelectAllStatus (allChecks)){
            selectAll.classList.add("NotEmpty");
        }else{
            selectAll.classList.remove("NotEmpty");
        }
    }else {
        selectAll.classList.add("Checked");
        selectAll.classList.remove("NotEmpty");
    }

    VerificarValorSelecionado ();
}

// Check if the all check-boxies are checked (Visual) 
function SelectAllStatus (allChecks){
    for (let i=1; i < allChecks.length; i++){
        if (allChecks[i].children[0].classList.contains("Checked")){
            return true;
        }
    }
    return false;
}

function AllChecked (allChecks){
    let currentChecks = 1;
    for (let i=1; i < allChecks.length; i++){
        if (allChecks[i].children[0].classList.contains("Checked")){
            currentChecks ++;
        }
    }
    if (currentChecks >= allChecks.length){
        return true;
    }else {
        return false;
    }
}

function VerificarValorSelecionado () {

    const allChecks = document.querySelector("#MainCheck");
    // Verificar se 'todos' está marcado, se tiver passar valor e ignora os outros
    if (allChecks.children[0].children[0].classList.contains("Checked")){
        valorSelecionado = "Todos os meios";
    }else {
        // Ignora a opção 'todos os meios', começa pela segunda opção
        for (let i=1; i < allChecks.children.length-1; i++ ){
            if (allChecks.children[i].children[0].classList.contains("Checked")){
                valorSelecionado = allChecks.children[i].children[1].textContent;
            }
        }
    }

    // Verificar se todos foram desmarcados
    let count = 0;
    for (let i=0; i < allChecks.children.length-1; i++ ){
        if (!allChecks.children[i].children[0].classList.contains("Checked")){
            count ++;
        }
    }
    if (count >= 3){
        valorSelecionado = "";
    }

    document.querySelector("#CheckBoxSelecionado").textContent = valorSelecionado;
    //console.log(valorSelecionado);
}