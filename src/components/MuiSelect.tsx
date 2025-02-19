import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

export default function MuiSelect() {
  const [countries, setCountries] = useState<string[]>([]);

  console.log(countries);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width={"250px"}>
      <TextField
        label="Select Country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please your country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
}
