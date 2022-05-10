fetch("https://www.sanhamm.no/exam1/wp-json/wp/v2/posts", {
    "method": "GET"
})
.then(response => {
    //console.log(response);
    return response.json();
})
.then(data => {
    if (data) {
        console.log(data)
        let myList = (data)
        console.log(myList);
        listScroller(myList)
        console.log("nå er det i gang");

    }

})

console.log("hei hei");

let list = document.querySelector("div#scroller");

let listScroller = (scrollerList) => {
    list.innerHTML = "";
    console.log(scrollerList);
}


// const burger = document.getElementById("meny")


// function burgerFunction() {
//     let x = document.getElementById("menyListe");
//     console.log("hehei");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }

// burger.addEventListener("click", burgerFunction);
