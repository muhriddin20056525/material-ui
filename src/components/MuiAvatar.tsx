import { Avatar, AvatarGroup, Stack } from "@mui/material";

export default function MuiAvatar() {
  return (
    <Stack spacing={4}>
      <Stack direction={"row"} spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>

      <Stack direction={"row"} spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
          <Avatar
            src="https://i.pinimg.com/736x/fe/8a/f2/fe8af205003607f12f922a62db6f1a1f.jpg"
            alt="Wang Ling"
          />

          <Avatar
            src="https://i.pinimg.com/736x/2c/43/3f/2c433f9e7a6a295169c4382c9b25c836.jpg"
            alt="Au Bin"
          />
        </AvatarGroup>
      </Stack>

      <Stack direction={"row"} spacing={1}>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 48, height: 48 }}
        >
          BW
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "success.light", width: 48, height: 48 }}
        >
          CK
        </Avatar>
      </Stack>
    </Stack>
  );
}
