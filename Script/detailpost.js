// her kommer koden for detail siden som skal gå mer inn i detalje
// get the query string
const queryString = document.location.search;
// create an object that will allows us to access all the query string parameters
const params = new URLSearchParams(queryString);
const id = params.get("id"); 
console.log(id);

let detail = document.querySelector("div#postDetails");
const detailURL = "https://www.sanhamm.no/exam1/wp-json/wp/v2/posts/" + id + "?_embed"

fetch(detailURL)
.then(respons => respons.json())
.then(data => {
    console.log(data);
    listDetails(data)
})
.catch(error => console.error(error));

let listDetails = (data) => {
document.title = data.title.rendered;
detail.innerHTML = "";
let newPost = `<div>  <img src='${data._embedded['wp:featuredmedia']['0'].source_url}'>
<h1>${data.title.rendered}</h1>
<div id='content'>
<p>${data.content.rendered}</p>
</div>
</div>`
detail.innerHTML += newPost
}
