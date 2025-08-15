import { Outlet } from "react-router-dom";
import {
  useFetchFiltersQuery,
  useFetchProductsQuery,
} from "../../app/api/catalogueApi";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import Filters from "./Filters";
import { useDispatch, useSelector } from "react-redux";
import AppPagination from "../components/AppPagination";
import { setPageNumber } from "src/app/slices/catalogueSlice";
import ProductList from "./ProductList";

export default function Catalogue() {
  const productParams = useSelector((state) => state.catalogue);

  const {
    data = [],
    isLoading,
    isFetching,
    error,
    refetch,
  } = useFetchProductsQuery(productParams, undefined, {
    refetchOnMountOrArgChange: true,
  });
  const dispatch = useDispatch();
  const { data: filtersData, isLoading: filtersLoading } =
    useFetchFiltersQuery();

  if (!data.length && isLoading) return <Typography>Loading...</Typography>;
  if (!data.length && error) return <Typography>Failed to load.</Typography>;

  if (isLoading || !data || filtersLoading || !filtersData)
    return <div>Loading...</div>;

  return (
    <>
      <Container>
        <Button
          onClick={() => refetch()}
          size="small"
          variant="text"
          startIcon={
            isFetching ? <CircularProgress size={14} /> : <RefreshIcon />
          }
        ></Button>
        {isFetching && <Typography variant="caption">Updating…</Typography>}
        <Grid container spacing={4}>

          <Grid size={3}>
            <Grid>
              <Filters filtersData={filtersData} />
            </Grid>
          </Grid>

          <Grid size={9}>
            <ProductList products={data.items} />

            {data.items && data.items.length > 0 ? (
              <>
                <AppPagination
                  metadata={data.pagination}
                  onPageChange={(page) => {
                    dispatch(setPageNumber(page));
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                />
              </>
            ) : (
              <Typography variant="h5">
                There are no results for this filter
              </Typography>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
