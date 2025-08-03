import { useEffect, useState } from "react";

function useProducts() {

    const [products, setProducts] = useState(
        [
            { id: 1, name: 'testproduct1', price: 100.00 },
            { id: 2, name: 'testproduct2', price: 200.00 }
        ]
    )

    //the [] at the ensures that the effect runs only once on mount and prevents infiniteloop at setProducts
    useEffect(() => {
        fetch("https://localhost:7221/api/products")
            .then(response => response.json())
            .then(data => setProducts(data));
    }, [])

    return products;
}

export default useProducts;