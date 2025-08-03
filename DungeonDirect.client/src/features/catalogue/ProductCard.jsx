import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";


function ProductCard({ product }) {
    return (
        <Card
            elevation={3}
        >
            <CardMedia
                component="img"
                image={product.pictureUrl}
                title={product.name}
                sx={{
                    height: 240,
                    width: "100%",
                    objectFit: "scale-down",
                    borderRadius: '16px',
                    padding: 2,
                    boxSizing: "border-box",
                    borderColor: 'brown'
                }}
            />


            <CardContent >
                <Typography
                    gutterBottom
                    variant="subtitle2"
                    sx={{ textTransform: 'uppercase'}}
                >
                    {product.name}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{color: 'secondary.main'} }
                >
                    ${(product.price).toFixed(2)}
                </Typography>
            </CardContent>
            <CardActions
                sx={{ justifyContent: 'space-between' }}
            ></CardActions>
            <Button>Add to Cart</Button>
            <Button>View</Button>
        </Card>
    );
}

export default ProductCard;