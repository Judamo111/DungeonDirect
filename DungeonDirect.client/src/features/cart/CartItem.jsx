import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function CartItem({ item, onIncrement, onDecrement, onRemove }) {
  return (
    <Box sx={{ display: "flex", borderBottom: "1px solid #eee", py: 2 }}>
      {/* Image */}
      <Box sx={{ width: 100, mr: 2 }}>
        <img
          src={item.pictureUrl}
          alt={item.name}
          style={{ width: "100%", height: "auto" }}
        />
        <Button variant="outlined" size="small" onClick={onRemove}>
          Remove
        </Button>
      </Box>

      {/* Details */}
      <Box sx={{ flexGrow: 1 }}>
        <Typography fontWeight={600}>{item.name}</Typography>
        <Typography sx={{mb: 1, mt: 1}}variant="body2" color="text.secondary">
          ID : {item.productId}
        </Typography>
            
        <Typography variant="body2" color={item.quantity > 0 ? "success.main" : "error"} gutterBottom>
          {item.quantity > 0 ? "In stock" : "Out of Stock"}
        </Typography>
      </Box>

      {/* Price */}
      <Box
        sx={{
          width: 100,
          textAlign: "right",
          alignSelf: "center",
          fontWeight: 600,
        }}
      >
        ${item.price.toFixed(2)}
      </Box>

      {/* Quantity */}
      <Box
        sx={{
          width: 80,
          textAlign: "right",
          alignSelf: "center",
        }}
      >
        <TextField
          type="number"
          value={item.quantity}
          size="small"
          sx={{ width: 60 }}
          slotProps={{
            input: {
              style: { textAlign: "center" },
              min: 1,
            },
          }}
        />
      </Box>

      {/* Subtotal */}
      <Box
        sx={{
          width: 100,
          textAlign: "right",
          alignSelf: "center",
          fontWeight: 600,
        }}
      >
        ${(item.price * item.quantity).toFixed(2)}
      </Box>
    </Box>
  );
}
