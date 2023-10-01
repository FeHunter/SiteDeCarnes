const allDropDown = document.querySelectorAll("#SelectDropdown");

// Colocar botão para abrir dropdown em todos SELECT/DROPDOWN
for (let i=0; i < allDropDown.length; i++){
    allDropDown[i].children[0].addEventListener('click', function(){
        ShowOptions (i);
    });
}

// Colocar botão para selecionar opção em todos os SELECT/DROPDOWN
for (let i=0; i < allDropDown.length; i++){
    for (let j=0; j < allDropDown[i].children[1].children.length; j++){
        allDropDown[i].children[1].children[j].addEventListener('click', function(){
            SelectOption(i, j);
        });
    }
}

// Abri painel de opções
function ShowOptions (id){
    allDropDown[id].children[0].classList.toggle("ShowSelectedHighlight");
    allDropDown[id].children[1].classList.toggle("FloatOptionsHide");
    DeselectOthers (id);

    if (allDropDown[id].children[1].classList.contains("FloatOptionsHide")){
        allDropDown[id].children[0].children[1].style="display: block;";
        allDropDown[id].children[0].children[2].style="display: none;";
    }else {
        allDropDown[id].children[0].children[1].style="display: none;";
        allDropDown[id].children[0].children[2].style="display: block;";
    }
}

// Selecionar a opção
function SelectOption (dropdownID, optionID){
    allDropDown[dropdownID].children[0].children[0].innerHTML = allDropDown[dropdownID].children[1].children[optionID].textContent;
    ShowOptions(dropdownID);
    const DropdownSelecionado = document.querySelector("#DropdownSelecionado");
    DropdownSelecionado.textContent = allDropDown[dropdownID].children[0].children[0].textContent;
    //console.log(DropdownSelecionado.textContent);
}

// Permitir apenas um dos dropdowns ativo
function DeselectOthers (keepID){
    for (let i=0; i < allDropDown.length; i++){
        if (i != keepID){
            allDropDown[i].children[1].classList.add("FloatOptionsHide");
            allDropDown[i].children[0].classList.remove("ShowSelectedHighlight");
        }
    }
}