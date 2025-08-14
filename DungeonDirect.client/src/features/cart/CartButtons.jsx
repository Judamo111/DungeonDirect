import { useNavigate, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import RefreshIcon from "@mui/icons-material/Refresh";
import CircularProgress from "@mui/material/CircularProgress";


export function ContinueShoppingButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const lastBrowse =
    sessionStorage.getItem("lastBrowseRoute") || "/catalogue";

  const handleClick = () => {
    // If we have browser history from a browse page, go back; otherwise, fallback
    if (location.key !== "default") {
      navigate(-1);
    } else {
      navigate(lastBrowse);
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      startIcon={<ArrowLeftIcon />}
      aria-label="Continue shopping"
      color="primary"
    >
      Continue Shopping
    </Button>
  );
}

export function UpdateCartButton({ onClick, isFetching }) {
  return (
    <>
      <Button
        variant="contained"
        onClick={onClick}
        startIcon={isFetching ? <CircularProgress size={14} /> : <RefreshIcon />}
        color="primary"
      >
        Update Shopping Cart
      </Button>
    </>
  );
}

export function ProceedToCheckoutButton() {

    return (
        <>                
        <Button fullWidth variant="contained" color="primary" sx={{ fontWeight: "bold", py: 1 }}>
        Proceed to Checkout
        </Button>
        </>
    )
}
