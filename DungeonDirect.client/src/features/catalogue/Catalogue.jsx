import ProductList from "./ProductList"
import useProducts from "../../hooks/productHooks";
import { Outlet } from "react-router-dom";

export default function Catalogue() {

    const products = useProducts();
    return (
        <>
        
        <ProductList products={products}/>
        <Outlet />
        </>
    )
}