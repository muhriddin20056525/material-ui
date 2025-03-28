import { CircularProgress, LinearProgress, Stack } from "@mui/material";

export default function MuiProgress() {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" value={60} />

      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress variant="determinate" value={60} />
    </Stack>
  );
}
