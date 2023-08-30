
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
    console.log(show_img);

}
