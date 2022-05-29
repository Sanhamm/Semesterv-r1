fetch("https://www.sanhamm.no/exam1/wp-json/wp/v2/posts?_embed&per_page=100", {
    "method": "GET"
})
.then(response => {
    //console.log(response);
    return response.json();
})
.then(data => {
    if (data) {
        console.log(data);
        let myList = (data);
        //console.log(myList);
        //listScroller(myList)
        console.log("nå er det i gang");
        myList.forEach((list, i)=> console.log(list.title));
        listScroller(myList);
    }

})
.catch(error => list.innerHTML = `<div class = 'rød'>something went wrong</div>`);

console.log("hei hei");
let loadBtn = document.querySelector('#lastInnBtn');
loadBtn.addEventListener("click", loadMore);



let list = document.querySelector("#blogPosts");

let listScroller = (myList) => {
    list.innerHTML = "";
    console.log(myList);
    let hello = myList.slice(0, 10);
    for(let post of hello) {
        console.log(post);
        let newList = `<div class = 'posts'>
        <img src='${post._embedded['wp:featuredmedia']['0'].source_url}'>
        <h2>${post.title.rendered}</h2>
        <p>${post.excerpt.rendered}
        <a href='./detailpost.html?id=${post.id}'>Lag selv</a>`;
        list.innerHTML += newList;
        console.log(post.id);
    }

};


function loadMore() {
    const url = "https://www.sanhamm.no/exam1/wp-json/wp/v2/posts?_embed&page=2";


    fetch(url)
        .then (respons => respons.json())
        .then (data => {
            if (data) {
                console.log(data);
                let myList = (data)
                console.log("nå er det i gang");
                myList.forEach((list, i)=> console.log(list.title));
                listPosts(myList);
                //console.log(myList);
            }
        
        })
        .catch ((error) => (error => list.innerHTML = `<div class = 'rød'>something went wrong</div>`)
    );
    console.log("gogo");
    loadBtn.style.display = "none";

    let listPosts = (posts) => {
        console.log(posts);
        for (let post of posts) {
            
            let newList = `<div class = 'posts'>
            <img src='${post._embedded['wp:featuredmedia']['0'].source_url}'>
            <h2>${post.title.rendered}</h2>
            <p>${post.excerpt.rendered}
            <a href='./detailpost.html?id=${post.id}'>Lag selv</a>`;
            list.innerHTML += newList;
        }
    };
}    