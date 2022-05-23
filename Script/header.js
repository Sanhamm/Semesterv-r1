const burger = document.getElementById("meny")


function burgerFunction() {
    let x = document.getElementById("menyListe");
    console.log("hei hei");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
        
    }
}

burger.addEventListener("click", burgerFunction);




