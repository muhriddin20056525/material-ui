import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";

export default function MuiBadge() {
  return (
    <Stack spacing={2} direction={"row"}>
      <Badge badgeContent={5} color="primary">
        <Mail />
      </Badge>

      <Badge badgeContent={0} color="secondary" showZero>
        <Mail />
      </Badge>

      <Badge badgeContent={100} max={999} color="secondary" showZero>
        <Mail />
      </Badge>

      <Badge variant="dot" color="secondary">
        <Mail />
      </Badge>
    </Stack>
  );
}
