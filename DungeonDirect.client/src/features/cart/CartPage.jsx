import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useFetchCartQuery } from "src/app/api/cartApi";
import CartItem from "./CartItem";
import Container from "@mui/material/Container";
import { ContinueShoppingButton, ProceedToCheckoutButton, UpdateCartButton } from "./CartButtons";
import OrderSummary from "./OrderSummary";


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

            <OrderSummary subtotal={subtotal} />

        </Box>
        </Container>
        </>


    );
}
