import { Delete } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

export default function MuiToolTip() {
  return (
    <Tooltip
      title="Delete"
      placement="right"
      arrow
      enterDelay={500}
      leaveDelay={200}
    >
      <IconButton>
        <Delete />
      </IconButton>
    </Tooltip>
  );
}
