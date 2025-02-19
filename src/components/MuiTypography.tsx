import { Typography } from "@mui/material";

export default function MuiTypography() {
  return (
    <div className="typography">
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component={"h1"} gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque odio
        fuga quam temporibus, quos ad magni necessitatibus praesentium in iste
        architecto doloremque maiores autem delectus, eaque dolorem libero!
        Minus modi quia quae iure, incidunt similique hic eaque harum aliquid
        sed est provident tempore veniam, eligendi quasi accusamus. Ratione,
        aliquam.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt atque odio
        fuga quam temporibus, quos ad magni necessitatibus praesentium in iste
        architecto doloremque maiores autem delectus, eaque dolorem libero!
        Minus modi quia quae iure, incidunt similique hic eaque harum aliquid
        sed est provident tempore veniam, eligendi quasi accusamus. Ratione,
        aliquam.
      </Typography>
    </div>
  );
}
