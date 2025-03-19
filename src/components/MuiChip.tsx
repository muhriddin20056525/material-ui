import { Face } from "@mui/icons-material";
import { Avatar, Chip, Stack } from "@mui/material";
import { useState } from "react";

export default function MuiChip() {
  const [chips, setChips] = useState(["Chip1", "Chip2", "Chip3"]);

  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <Stack direction={"row"} spacing={1}>
      <Chip label="Chip" color="primary" size="small" icon={<Face />} />
      <Chip
        label="Chip"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />

      <Chip label="Click" color="success" onClick={() => alert("click")} />
      <Chip
        label="Label"
        color="error"
        onClick={() => alert("click")}
        onDelete={() => alert("Delete handler")}
      />

      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
}
