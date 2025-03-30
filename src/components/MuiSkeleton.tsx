import { Avatar, Box, Skeleton, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function MuiSkeleton() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Stack spacing={1} width={"250px"}>
      {/* <Skeleton variant="text" />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton
        variant="rectangular"
        width={250}
        height={125}
        animation="wave"
      /> */}

      <Box sx={{ width: "250px" }}>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={256}
            height={144}
            animation="wave"
          />
        ) : (
          <img
            src="https://i.pinimg.com/736x/8f/df/d0/8fdfd06b254a3c22fc416a987f7231d3.jpg"
            width={256}
            height={144}
            alt="image"
          />
        )}

        <Stack
          direction={"row"}
          spacing={1}
          sx={{ width: "100%", marginTop: "12px" }}
        >
          {loading ? (
            <Skeleton
              variant="circular"
              width={40}
              height={40}
              animation="wave"
            />
          ) : (
            <Avatar>V</Avatar>
          )}

          <Stack sx={{ width: "80%" }}>
            {loading ? (
              <>
                <Typography variant="body1">
                  <Skeleton variant="text" width={"100%"} animation="wave" />
                </Typography>
                <Typography variant="body2">
                  <Skeleton variant="text" width={"100%"} animation="wave" />
                </Typography>
              </>
            ) : (
              <>
                <Typography>React MUI Tutorial</Typography>
              </>
            )}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
