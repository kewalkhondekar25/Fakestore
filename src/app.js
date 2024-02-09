fetch("https://fakestoreapi.com/products/categories")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            data.unshift("ALL");            
            console.log(data);
        })
        

