import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export default function MuiCard() {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component={"img"}
          height={"140px"}
          image="https://i.pinimg.com/736x/39/94/10/3994108472c6c7dac6d7072124edf5eb.jpg"
          alt="image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component={"div"}>
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolor
            ad inventore voluptates maiores tempore reiciendis dicta corrupti
            vel animi!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
