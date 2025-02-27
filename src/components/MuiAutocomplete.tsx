import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

type Skill = {
  id: number;
  label: string;
};

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

export default function MuiAutocomplete() {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null);

  console.log(skill);

  return (
    <Stack spacing={2} width={"250px"}>
      <Autocomplete
        options={skills}
        value={value}
        onChange={(_, newValue: string | null) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} label={"Skills"} />}
        freeSolo
      />

      <Autocomplete
        options={skillsOptions}
        value={skill}
        onChange={(_, newValue: Skill | null) => setSkill(newValue)}
        renderInput={(params) => <TextField {...params} label={"Skills"} />}
      />
    </Stack>
  );
}
