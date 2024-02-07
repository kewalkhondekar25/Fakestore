function bodyLoad() {
    loadAllCategories();
    loadAllProducts();
}

function loadAllCategories() {
    fetch("https://fakestoreapi.com/products/categories")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            data.unshift("ALL");
            for (var item of data) {
                var option = document.createElement("option");
                option.innerHTML = item.toUpperCase();
                option.value = item;
                document.querySelector("select").appendChild(option);
            }
        })
}

function loadAllProducts() {
    fetch("https://fakestoreapi.com/products")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            for (var item of data) {
                var card = document.createElement("div");
                card.className = "card";
                card.innerHTML = `
            <img src=${item.image} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            `;
            document.getElementById("products").appendChild(card);
            }
        })
}

function categoryChange() {
    var category = document.querySelector("select").value;
    alert(category);
}