import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

export default function MuiMenu() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button onClick={handleClick}>Menyuni ochish</Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Variant 1</MenuItem>
        <MenuItem onClick={handleClose}>Variant 2</MenuItem>
        <MenuItem onClick={handleClose}>Variant 3</MenuItem>
      </Menu>
    </div>
  );
}
