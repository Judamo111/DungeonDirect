import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useFetchCartQuery } from "src/app/api/cartApi";
import CartItem from "./CartItem";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { ExpandMore, Link } from "@mui/icons-material";
import Container from "@mui/material/Container";
import { ContinueShoppingButton, ProceedToCheckoutButton, UpdateCartButton } from "./CartButtons";


export default function CartPage() {

  const { data, isLoading, isFetching, error, refetch } =
    useFetchCartQuery(undefined, { refetchOnMountOrArgChange: false });

  if (!data && isLoading) return <Typography>Loading Cart...</Typography>;
  if (!data && error) return <Typography>Failed to load cart.</Typography>;
  if (!data || data.items.length === 0) return <Typography>Your cart is empty.</Typography>;

  const subtotal = data.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
        <>
        <Container>
        <Typography variant="h6">
            Shopping Cart
        </Typography>
        </Container>
        <Container>

        <Box sx={{ display: { xs: "block", md: "flex" }, gap: 3 }}>

            {/* left-hand side */}
            <Box sx={{ flexGrow: 1 }}>


            {/* Table Header */}
            <Box sx={{ display: "flex", fontWeight: "bold", borderBottom: "1px solid #ccc", pb: 1, mb: 2 }}>
                <Box sx={{ flexGrow: 1 }}>Item</Box>
                <Box sx={{ width: 100, textAlign: "right" }}>Price</Box>
                <Box sx={{ width: 80, textAlign: "right" }}>Qty</Box>
                <Box sx={{ width: 100, textAlign: "right" }}>Subtotal</Box>
            </Box>

            {data.items.map((item) => (
                <CartItem
                key={item.productId}
                item={item}
                //TODO: Add functionality
                onIncrement={() => {}}
                onDecrement={() => {}}
                onRemove={() => {}}
                />
            ))}

            {/* cart footer buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
            <ContinueShoppingButton/>
            <UpdateCartButton onClick={refetch} isFetching={isFetching} />
        </Box>
            </Box>




            {/* right-hand side */}
            <Box sx={{ width: "100%", maxWidth: 320 }}>
            <Paper variant="outlined" sx={{ p: 2 }}>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                Summary
                </Typography>

                <Divider sx={{ mb: 1 }} />
                <Box sx={{ fontSize: 14, color: 'text.secondary', mb: 1 }}>
                Estimate Shipping and Tax
                <ExpandMore fontSize="small" sx={{ verticalAlign: 'middle', ml: 0.5 }} />
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
                <Typography variant="body2">Subtotal</Typography>
                <Typography variant="body2">${subtotal}</Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
                <Typography fontWeight="medium">Order Total</Typography>
                <Typography fontWeight="bold">${subtotal}</Typography>
                </Box>

                <Box sx={{ fontSize: 14, color: 'text.secondary', mb: 2 }}>
                Apply Discount Code
                <ExpandMore fontSize="small" sx={{ verticalAlign: 'middle', ml: 0.5 }} />
                </Box>
                <ProceedToCheckoutButton/>
            </Paper>
            </Box>
        </Box>
        </Container>
        </>


    );
}
