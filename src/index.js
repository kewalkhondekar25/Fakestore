function bodyLoad() {
    loadAllCategories();
    loadAllProducts();
    //loadProductsByCategory();
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
            document.getElementById("products").innerHTML = "";
            for (var items of data) {
                var cards = document.createElement("div");
                cards.innerHTML = `
                <div class="card p-3  mt-5 me-3" style="width: 18rem;">
                    <img src=${items.image} class="card-img-top pic " alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${items.title}</h5>
                        <p class="card-text">${items.category}</p>
                    <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>`;
                document.getElementById("products").appendChild(cards);
            }
        })
}

function loadProductsByCategory(category){
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            document.getElementById("products").innerHTML = "";
            for (var items of data) {
                var cards = document.createElement("div");
                cards.innerHTML = `
                <div class="card p-3  mt-5 me-3" style="width: 18rem;">
                    <img src=${items.image} class="card-img-top pic " alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${items.title}</h5>
                        <p class="card-text">${items.category}</p>
                    <button class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>`;
                document.getElementById("products").appendChild(cards);
            }
        })
}

function categoryChange() {
    var category = document.querySelector("select").value;
    alert(`You choose: ${category}`)
    if(category == "ALL"){
        loadAllProducts();
    }else{
        loadProductsByCategory(category);
    }
}