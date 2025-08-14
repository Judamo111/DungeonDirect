
import { useOutletContext } from "react-router-dom";
import ProductList from "./ProductList";

export default function AllProducts() {
  const { products } = useOutletContext(); 
  return <ProductList products={products} />;
}
