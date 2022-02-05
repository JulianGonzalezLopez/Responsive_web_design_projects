let button = document.getElementById("icono-id");
let links = document.getElementById("links-id");
let state = false;
button.addEventListener("click", ()=>{
    if (state == false){
        links.style.display = "flex";
        console.log("hecho");
        state = true;
    }
    else{
        links.style.display = "none";
        console.log("hecho");
        state = false;
    }
});