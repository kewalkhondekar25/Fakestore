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
                        <p class="card-text"> <span>&#8377; ${items.price}</span></p>
                    <button onclick="selectAddToCart(${items.id})" class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>`;
                document.getElementById("products").appendChild(cards);
            }
        })
}

function loadProductsByCategory(category) {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            document.getElementById("products").innerHTML = "";
            for (var items of data) {
                var cards = document.createElement("div");
                cards.className = "overflow-auto"
                cards.innerHTML = `
                <div class="card p-3  mt-5 me-3 " style="width: 18rem">
                    <img src=${items.image} class="card-img-top pic " alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${items.title}</h5>
                        <p class="card-text">${items.category}</p>
                        <p class="card-text"> <span>&#8377; ${items.price}</span></p>
                    <button class="btn btn-primary" onclick="selectAddToCart(${items.id})">Add to Cart</button>
                    </div>
                </div>`;
                document.getElementById("products").appendChild(cards);
            }
        })
}

function categoryChange() {
    var category = document.querySelector("select").value;
    alert(`Category: ${category}`)
    if (category == "ALL") {
        loadAllProducts();
    } else {
        loadProductsByCategory(category);
    }
}

var cartItems = [];

function selectAddToCart(id) {
    alert(`Item Added to Cart`);
    cartItems.push(id)
    document.getElementById("count").innerHTML = cartItems.length;
    getProductDetailsById(id);
}

var checkoutItems = [];
var totalPrice = [];
var sum = 0;

//total

function getProductDetailsById(id) {
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            // var checkoutProducts = data;
            var tr = document.createElement("tr");

            var tdPreview = document.createElement("td");
            var tdName = document.createElement("td");
            var tdPrice = document.createElement("td")

            var img = document.createElement("img");
            img.src = data.image;
            img.height = "100";
            img.width = "100";

            tdPreview.appendChild(img);
            tdName.innerHTML = data.title;
            tdPrice.innerHTML = data.price;

            tr.appendChild(tdPreview);
            tr.appendChild(tdName);
            tr.appendChild(tdPrice);

            document.querySelector("tbody").appendChild(tr);

            checkoutItems.push(data);
            // console.log(checkoutItems);
        })
        console.log(checkoutItems.map((item) => {

        }));
}


