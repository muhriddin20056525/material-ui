import { Favorite } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { SyntheticEvent, useState } from "react";

export default function MuiTabs() {
  const [value, setValue] = useState("1");

  const handleChange = (_event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            centered
          >
            <Tab
              label="Tab one"
              value={"1"}
              icon={<Favorite />}
              iconPosition="start"
            />
            <Tab label="Tab two" value={"2"} />
            <Tab label="Tab three" value={"3"} />
          </TabList>
        </Box>
        <TabPanel value={"1"}>Panel one</TabPanel>
        <TabPanel value={"2"}>Panel two</TabPanel>
        <TabPanel value={"3"}>Panel three</TabPanel>
      </TabContext>
    </Box>
  );
}
