import { TextField, InputAdornment, IconButton, Divider } from "@mui/material";
import { debounce } from "@mui/material/utils";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "src/app/slices/catalogueSlice";

export default function Search({ size = "small", sx }) {
  const searchTerm = useSelector((s) => s.catalogue.searchTerm);
  const dispatch = useDispatch();
  const [term, setTerm] = useState(searchTerm);

  useEffect(() => setTerm(searchTerm), [searchTerm]);

  const debounced = useMemo(
    () => debounce((value) => dispatch(setSearchTerm(value)), 500),
    [dispatch]
  );

  useEffect(() => () => debounced.clear(), [debounced]);

  const triggerSearch = () => dispatch(setSearchTerm(term));

  return (
    <TextField
      variant="outlined"
      fullWidth
      type="search"
      size={"medium"}
      placeholder="Search products..."
      value={term}
      onChange={(e) => {
        const v = e.target.value;
        setTerm(v);
        debounced(v);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") triggerSearch();
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" sx={{ ml: 0.5 }}>
            <Divider orientation="vertical" flexItem sx={{ mr: 1 }} />
            <IconButton aria-label="search" onClick={triggerSearch} edge="end" size="small">
              <SearchIcon fontSize="small" />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        "& .MuiInputBase-input": { py: 0.5 },
        ...sx,
      }}
    />
  );
}
