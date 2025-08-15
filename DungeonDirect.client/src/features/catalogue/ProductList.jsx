import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid";

export default function ProductList({products}) {
    return (
        <Grid container spacing={3}>
          {products.map((product) => (
              
                  <ProductCard key={product.id} product={product}/>

              
          ))}
      </Grid>
  );
}