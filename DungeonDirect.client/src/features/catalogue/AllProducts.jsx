import useProducts from "/src/hooks/productHooks"
import ProductList from "./ProductList";


export default function AllProducts() {
    
    const products = useProducts(); 

    return(
        <ProductList products={products}/>
    )
}