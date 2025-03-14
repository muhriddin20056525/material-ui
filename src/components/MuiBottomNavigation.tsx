import { Favorite, Home, Person } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useState } from "react";

export default function MuiBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", left: 0, bottom: 0 }}
      value={value}
      onChange={(_, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Home" icon={<Home />} />
      <BottomNavigationAction label="Favorite" icon={<Favorite />} />
      <BottomNavigationAction label="Profile" icon={<Person />} />
    </BottomNavigation>
  );
}
