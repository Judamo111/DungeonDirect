import {
  Box,
  Paper,
  Typography,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { ProceedToCheckoutButton } from "./CartButtons";
import { useFetchCartQuery } from "src/app/api/cartApi"; // ← derive subtotal here

const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

// Simple key/value row to avoid <tr> nesting issues
function SummaryRow({ label, value, bold = false }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", my: 0.5 }}>
      <Typography variant="body2" color="text.secondary">{label}</Typography>
      <Typography variant="body2" sx={{ fontWeight: bold ? 700 : 500 }}>{value}</Typography>
    </Box>
  );
}

export default function OrderSummary() {
  const [shipOpen, setShipOpen] = useState(false);
  const [country, setCountry] = useState("US");
  const [region, setRegion] = useState(""); // renamed from "state" to avoid confusion
  const [zip, setZip] = useState("");

  const [discountOpen, setDiscountOpen] = useState(false);
  const [code, setCode] = useState("");

  // 🔹 Get subtotal from cart (no prop injected)
  const { data: cart } = useFetchCartQuery();
  const items = cart?.items ?? [];
  const subtotal = items.reduce(
    (sum, it) => sum + Number(it.price ?? 0) * Number(it.quantity ?? 0),
    0
  );

  const handleApply = () => {
    // TODO: apply discount via mutation, then persist result if needed
    return;
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 320 }}>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Summary
        </Typography>

        {/* Shipping & Tax */}
        <Box sx={{ width: "100%" }}>
          <Accordion
            elevation={0}
            disableGutters
            square
            expanded={shipOpen}
            onChange={(_, v) => setShipOpen(v)}
            sx={{ "&::before": { display: "none" }, border: "none" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{ px: 0, minHeight: 40, "& .MuiAccordionSummary-content": { my: 0 } }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Estimate Shipping and Tax
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ px: 0 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Enter your destination to get a shipping estimate.
              </Typography>

              <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: "block" }}>
                Country
              </Typography>
              <TextField
                select
                fullWidth
                size="small"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                sx={{ mb: 1.5 }}
              >
                <MenuItem value="US">United States</MenuItem>
                <MenuItem value="CA">Canada</MenuItem>
                <MenuItem value="GB">United Kingdom</MenuItem>
              </TextField>

              <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: "block" }}>
                State/Province
              </Typography>
              <TextField
                select
                fullWidth
                size="small"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                placeholder="Please select a region, state or province"
                sx={{ mb: 1.5 }}
              >
                <MenuItem value="MO">Missouri</MenuItem>
                <MenuItem value="IL">Illinois</MenuItem>
              </TextField>

              <Typography variant="caption" sx={{ fontWeight: 600, mb: 0.5, display: "block" }}>
                Zip/Postal Code
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                sx={{ mb: 2 }}
              />

              {/* Placeholder */}
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Sorry, no quotes are available for this order at this time
              </Typography>

              <Divider sx={{ my: 1.5 }} />
              <SummaryRow label="Subtotal" value={currency.format(subtotal)} />
              <SummaryRow label="Order Total" value={currency.format(subtotal)} bold />
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* Totals outside the accordion */}
        <Box sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
          <Typography variant="body2">Subtotal</Typography>
          <Typography variant="body2">{currency.format(subtotal)}</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography fontWeight="medium">Order Total</Typography>
          <Typography fontWeight="bold">{currency.format(subtotal)}</Typography>
        </Box>

        {/* Discount Code */}
        <Accordion
          elevation={0}
          disableGutters
          square
          expanded={discountOpen}
          onChange={(_, v) => setDiscountOpen(v)}
          sx={{ mb: 1, "&::before": { display: "none" }, border: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            sx={{ px: 0, minHeight: 40, "& .MuiAccordionSummary-content": { my: 0 } }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Apply Discount Code
            </Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ px: 0 }}>
            <Typography variant="caption" sx={{ display: "block", mb: 0.5, fontWeight: 600 }}>
              Enter discount code
            </Typography>

            <TextField
              size="small"
              fullWidth
              placeholder="Enter discount code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              sx={{ mb: 1.5 }}
            />

            <Button
              variant="contained"
              size="small"
              disabled={!code.trim()}
              onClick={handleApply}
            >
              Apply Discount
            </Button>
          </AccordionDetails>
        </Accordion>

        <ProceedToCheckoutButton />
      </Paper>
    </Box>
  );
}
