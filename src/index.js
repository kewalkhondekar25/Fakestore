function bodyLoad(){
    loadAllCategories();
    loadAllProducts();
}

function loadAllCategories(){
    fetch("https://fakestoreapi.com/products/categories")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        data.unshift("ALL");
        for(var item of data){
            var option = document.createElement("option");
            option.innerHTML = item.toUpperCase();
            option.value = item;
            document.querySelector("select").appendChild(option);
        }
    })
}

function loadAllProducts(){
    fetch("https://fakestoreapi.com/products")
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        for(var item of data){
            document.createElement()
        }
    })
}

function categoryChange(){
    var category = document.querySelector("select").value;
    alert(category);
}