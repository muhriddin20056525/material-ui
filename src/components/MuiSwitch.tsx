import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

export default function MuiSwitch() {
  const [checked, setChecked] = useState(false);

  console.log({ checked });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            size="small"
            color="success"
          />
        }
      />
    </Box>
  );
}
