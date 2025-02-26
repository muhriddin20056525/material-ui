import { Box } from "@mui/material";

export default function MuiLayout() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Codeevolution
      </Box>

      <Box
        display={"flex"}
        height={"100px"}
        bgcolor={"success.light"}
        p={2}
      ></Box>
    </>
  );
}
