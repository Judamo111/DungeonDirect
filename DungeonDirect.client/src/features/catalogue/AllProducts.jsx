// AllProducts.jsx
import { useOutletContext } from "react-router-dom";
import ProductList from "./ProductList";

export default function AllProducts() {
  const { products } = useOutletContext(); // comes from <Outlet context={{ products }} />
  return <ProductList products={products} />;
}
