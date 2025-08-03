import Box from "@mui/material/Box";
import ProductCard from "./ProductCard";

export default function ProductList({products}) {
    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 3, jusifyContent: 'center'} }>
          {products.map((product) => {
              return <ProductCard key={product.id} product={product}/>
          })}
      </Box>
  );
}