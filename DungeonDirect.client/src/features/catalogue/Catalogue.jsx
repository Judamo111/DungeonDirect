import ProductList from "./ProductList"
import useProducts from "../../hooks/productHooks";

export default function Catalogue() {

    const products = useProducts();
    return (
        
        <ProductList products={products}/>
    )
}