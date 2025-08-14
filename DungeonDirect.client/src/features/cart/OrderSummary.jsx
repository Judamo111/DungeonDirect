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
  TableRow,
} from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { ProceedToCheckoutButton } from "./CartButtons";

//TODO: add discount functionality
//TODO: add shipping functionality
export default function OrderSummary({ subtotal }) {
  const [shipOpen, setShipOpen] = useState(false);
  const [country, setCountry] = useState("US");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const [open, setOpen] = useState(false);
  const [code, setCode] = useState("");

  const handleApply = () => {
    return;
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 320 }}>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Summary
        </Typography>

        {/* shipping and tax accordion */}
        <Paper variant="none" sx={{ width: "%100" }}>
          <Accordion
            elevation={0}
            disableGutters
            square
            expanded={shipOpen}
            onChange={(_, v) => setShipOpen(v)}
            sx={{
              "&::before": { display: "none" },
              border: "none",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{
                px: 0,
                minHeight: 40,
                "& .MuiAccordionSummary-content": { my: 0 },
              }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                Estimate Shipping and Tax
              </Typography>
            </AccordionSummary>

            <AccordionDetails sx={{ px: 0 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Enter your destination to get a shipping estimate.
              </Typography>

              <Typography
                variant="caption"
                sx={{ fontWeight: 600, mb: 0.5, display: "block" }}
              >
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

              <Typography
                variant="caption"
                sx={{ fontWeight: 600, mb: 0.5, display: "block" }}
              >
                State/Province
              </Typography>
              <TextField
                select
                fullWidth
                size="small"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="Please select a region, state or province"
                sx={{ mb: 1.5 }}
              >
                <MenuItem value="MO">Missouri</MenuItem>
                <MenuItem value="IL">Illinois</MenuItem>
              </TextField>

              <Typography
                variant="caption"
                sx={{ fontWeight: 600, mb: 0.5, display: "block" }}
              >
                Zip/Postal Code
              </Typography>
              <TextField
                fullWidth
                size="small"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                sx={{ mb: 2 }}
              />

              {/* TODO: add custom text */}
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Sorry, no quotes are available for this order at this time
              </Typography>

              <Divider sx={{ my: 1.5 }} />
              <TableRow label="Subtotal" value="$70.97" />
              <TableRow label="Order Total" value="$70.97" bold />
            </AccordionDetails>
          </Accordion>
        </Paper>






        <Box sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
          <Typography variant="body2">Subtotal</Typography>
          <Typography variant="body2">${subtotal}</Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography fontWeight="medium">Order Total</Typography>
          <Typography fontWeight="bold">${subtotal}</Typography>
        </Box>






        {/* discount code accordion */}
        <Accordion
          elevation={0}
          disableGutters
          square
          expanded={open}
          onChange={(_, v) => setOpen(v)}
          sx={{ mb:1, "&::before": { display: "none" }, border: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            sx={{
              
              px: 0,
              minHeight: 40,
              "& .MuiAccordionSummary-content": { my: 0 },
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Apply Discount Code
            </Typography>
          </AccordionSummary>

          <AccordionDetails sx={{ px: 0 }}>
            <Typography
              variant="caption"
              sx={{ display: "block", mb: 0.5, fontWeight: 600 }}
            >
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
