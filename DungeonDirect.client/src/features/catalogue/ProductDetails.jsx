import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useFetchProductDetailsQuery } from "./catalogueApi";



export default function ProductDetails() {

    const {id} = useParams();
    const {data: product, isLoading} = useFetchProductDetailsQuery(id ? +id : 0)

    if (!product || isLoading) return <div>Loading...</div>;
    if (product.length === 0) return <div>No product found</div>;

    const productDetails = 
        [
            {label: 'Name', value: product.name},
            {label: 'Description', value: product.description},
            {label: 'Type', value: product.type},
            {label: 'Brand', value: product.brand},
            {label: 'Quantity in Stock', value: product.quantityInStock}
        ]
        
    return (
        <Grid container spacing={6} maxWidth='lg' sx={{mx : 'auto'}}>
            <Grid size={6}>
                {product && (
                    <img
                        src={product?.pictureUrl}
                        alt={product.name}
                        style={{ width: '100%', height: 'auto', borderRadius: '16px' }}
                    />
                )}
            </Grid>
            <Grid size={6}>
                <Typography variant="h3">
                    {product.name}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h4">
                    ${product.price.toFixed(2)}
                </Typography>
                <TableContainer>
                    <Table>
                        <TableBody>
                        {productDetails.map((detail, index) => (
                            <TableRow key={index}>
                                <TableCell sx={{ fontWeight: 'bold' }}>
                                    {detail.label}
                                </TableCell>
                                <TableCell>
                                    {detail.value}
                                </TableCell>
                                <TableCell>
                                    {detail.label === 'Quantity in Stock' && (
                                        <Typography variant="body2" color={detail.value > 0 ? 'green' : 'red'}>
                                            {detail.value > 0 ? 'In Stock' : 'Out of Stock'}
                                        </Typography>
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                        
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid container spacing={2} marginTop={3}>
                   <Grid size={6}>
                        <TextField
                        variant="outlined"
                        type="number"
                        label="Quantity in Cart"
                        fullWidth
                        defaultValue={0}
                        slotProps={{
                            htmlInput: {
                            min: 0,
                            max: product.quantityInStock
                            }
                        }}
                        />
                    </Grid> 
                     <Grid size={6}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            sx={{ height: '56px' }}>
                            Add to Cart
                            </Button>
                     </Grid>
                </Grid>
                </ Grid>
        </Grid>
    );
}