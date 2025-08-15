import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

export default function CheckboxButtons({ items = [], checked = [], onChange }) {
  const handleToggle = (value) => {
    const next = checked.includes(value)
      ? checked.filter((v) => v !== value)
      : [...checked, value];
    onChange?.(next);
  };

  return (
    <FormGroup>
      {items.map((item) => (
        <FormControlLabel
          key={item}
          control={
            <Checkbox
              checked={checked.includes(item)}
              onChange={() => handleToggle(item)}
              color="secondary"
              sx={{ py: 0.7, "& .MuiSvgIcon-root": { fontSize: 20 } }}
            />
          }
          label={item}
        />
      ))}
    </FormGroup>
  );
}
