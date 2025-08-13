// Catalogue.jsx
import { Outlet } from "react-router-dom";
import { useFetchProductsQuery } from "./catalogueApi";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function Catalogue() {
  const { data = [], isLoading, isFetching, error, refetch } =
    useFetchProductsQuery(undefined, { refetchOnMountOrArgChange: true });

  if (!data.length && isLoading) return <div>Loading...</div>;
  if (!data.length && error) return <div>Failed to load.</div>;

  return (
    <>
      <Box sx={{display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 1, mb: 1, mr: 20}}>
        <Button
          onClick={() => refetch()}
          size="small"
          variant="text"
          startIcon={isFetching ? <CircularProgress size={14} /> : <RefreshIcon />}
        >
        </Button>
        {isFetching && <Typography variant="caption">Updating…</Typography>}
      </Box>

      <Outlet context={{ products: data }} />
    </>
  );
}
