import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Add, Remove } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useAddCartItemMutation, useRemoveCartItemMutation } from "src/app/api/cartApi";

export default function CartItem({ item }) {

  const [removeCartItem] = useRemoveCartItemMutation();
  const [addCartItem] = useAddCartItemMutation();


  return (
    <Box sx={{ display: "flex", borderBottom: "1px solid #eee", py: 2 }}>
      {/* Image */}
      <Box sx={{ width: 100, mr: 2 }}>
        <img
          src={item.pictureUrl}
          alt={item.name}
          style={{ width: "100%", height: "auto" }}
        />
        <Button onClick={() => 
          removeCartItem({productId: item.productId, quantity: item.quantity})}
          variant="outlined" size="small">
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
            display: "flex",
            justifyContent: "space-between"
        }}
      >
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
            width: 97,
            display: "flex",           
            alignItems: "center",      
            justifyContent: "space-evenly", 
            ml: 3
        }}
        >
        <IconButton 
          onClick={() => 
          removeCartItem({productId: item.productId, quantity: 1})}
          sx={{p: 0.25, width: 20, height: 20, "& .MuiSvgIcon-root": {fontSize: "1rem", },}}
          >
        <Remove />
        </IconButton>

        <Typography sx={{ textAlign: "center" }}>
            {item.quantity}
        </Typography>
        
        <IconButton 
        onClick={() => addCartItem({product: item, quantity: 1})}
        sx={{p: 0.25, width: 20, height: 20,
        "& .MuiSvgIcon-root": {fontSize: "1rem", },
        }}>
        <Add sx={{ fontSize: "1rem"}}/>
        </IconButton>
        </Box>


      {/* Subtotal */}
      <Box
        sx={{
          width: 60,
          textAlign: "right",
          alignSelf: "center",
          fontWeight: 600,
        }}
      >
        ${(item.price * item.quantity).toFixed(2)}
      </Box>
      </Box>
    </Box>
  );
}
