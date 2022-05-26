fetch("https://www.sanhamm.no/exam1/wp-json/wp/v2/posts?_embed", {
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
        //console.log(myList);
        //listScroller(myList)
        console.log("nå er det i gang");
        myList.forEach((list, i)=> console.log(list.title));
        listScroller(myList)
    }

})
.catch(error => list.innerHTML = `<div class = 'rød'>something went wrong</div>`);

console.log("hei hei");

let list = document.querySelector("div#scroller");

let listScroller = (myList) => {
    list.innerHTML = "";
    console.log(myList);
    let hello = myList.slice(0, 6)
    for(let post of hello) {
        console.log(post);
        let newList = `<div class = 'latestPost'>
        <img src='${post._embedded['wp:featuredmedia']['0'].source_url}'>
        <h2>${post.title.rendered}</h2>
        <a href='./detailpost.html?id=${post.id}'>Lag selv</a>
        </div>`
        list.innerHTML += newList;
    }

}

let rightArrow = document.querySelector("span.arrow-right")
let leftArrow = document.querySelector("span.arrow-left")

rightArrow.addEventListener("click", () => {    
    console.log("neste");
    document.querySelector('#scroller').scrollLeft += -440;
})

leftArrow.addEventListener("click", () => {    
    console.log("forrige");
    document.querySelector('#scroller').scrollLeft += 440;
})
