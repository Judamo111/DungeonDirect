import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

export default function RadioButtonGroup({ options, onChange, selectedValue }) {
  return (
    <FormControl>
      <RadioGroup onChange={onChange} value={selectedValue} sx={{ my: 0 }}>
        {options.map(({ value, label }) => (
          <FormControlLabel
            key={label}
            control={<Radio color="secondary" sx={{ py: 0.7 }} />}
            label={label}
            value={value}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
