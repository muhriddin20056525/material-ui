import { Link, Stack, Typography } from "@mui/material";

export default function MuiLink() {
  return (
    <Stack spacing={2} direction={"row"} m={4}>
      <Link href="#" variant="h6">
        Link
      </Link>
      <Typography variant="h6">
        <Link href="#" color="secondary" underline="none">
          Secondary
        </Link>
      </Typography>
    </Stack>
  );
}
