const accessKey = "RpMQ0PYFEtMqr4gLzjDTfsobry77UkLEd_1eMbOA8ic";

const searchForm = document.getElementById("search_form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
    keyword = searchBox.value
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const responce = await fetch(url);
    const data = await responce.json();

    if (page === 1) {
        searchResult.innerHTML = "";
    }


    const results = data.results;

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;

        let imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blanck";

        imageLink.appendChild(image);

        searchResult.appendChild(imageLink);
    })

    showMoreBtn.style.display = "block";
    // console.log(data);
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

// more image to click the show btn.
showMoreBtn.addEventListener("click", () => {
    page++;
    searchImages();
})