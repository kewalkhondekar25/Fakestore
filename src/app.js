fetch("https://fakestoreapi.com/products")
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            var result = data.filter((item) => {
                return(item.category == "men's clothing")
            })
            console.log(result);
        })
        
