import { useDispatch, useSelector } from "react-redux";
import {
  resetParams,
  setBrands,
  setOrderBy,
  setTypes,
} from "src/app/slices/catalogueSlice";
import RadioButtonGroup from "../components/RadioButtonsGroup";
import CheckboxButtons from "../components/CheckboxButtons";
import Paper from "@mui/material/Paper";
import Search from "./Search";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const sortOptions = [
  { value: "name", label: "Alphabetical" },
  { value: "priceDesc", label: "Price: High to low" },
  { value: "price", label: "Price: Low to high" },
];

export default function Filters({ filtersData }) {
  const { brands = [], types = [] } = filtersData ?? {};

  const {
    orderBy,
    types: selectedTypes,
    brands: selectedBrands,
  } = useSelector((s) => s.catalogue);
  const dispatch = useDispatch();

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Paper sx={{ p: 3 }}>
        <RadioButtonGroup
          selectedValue={orderBy}
          options={sortOptions}
          onChange={(e) => dispatch(setOrderBy(e.target.value))}
        />
      </Paper>

      <Paper sx={{ p: 3 }}>
        <CheckboxButtons
          items={brands}
          checked={selectedBrands}
          onChange={(items) => dispatch(setBrands(items))}
        />
      </Paper>

      <Paper sx={{ p: 3 }}>
        <CheckboxButtons
          items={types}
          checked={selectedTypes}
          onChange={(items) => dispatch(setTypes(items))}
        />
      </Paper>

      <Button onClick={() => dispatch(resetParams())}>Reset filters</Button>
    </Box>
  );
}
