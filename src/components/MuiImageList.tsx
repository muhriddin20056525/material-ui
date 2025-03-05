import { ImageList, ImageListItem, Stack } from "@mui/material";

export default function MuiImageList() {
  return (
    <Stack spacing={4}>
      <h2>Image List 1</h2>
      <ImageList cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>

      <h2>Image List 2</h2>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>

      <h2>Image List 3</h2>
      <ImageList variant="woven" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Stack>
  );
}

const itemData = [
  {
    img: "https://i.pinimg.com/736x/81/ae/08/81ae08084c78f8222eef86ea608bdfe5.jpg",
    title: "wang ling",
  },
  {
    img: "https://i.pinimg.com/736x/e6/d4/49/e6d449bd6bbe5b81137bc85329a507ce.jpg",
    title: "xiao yan",
  },

  {
    img: "https://i.pinimg.com/736x/98/00/60/980060bc876b0f76b94232c8d31fda5e.jpg",
    title: "yun shan",
  },

  {
    img: "https://i.pinimg.com/736x/70/b1/5b/70b15bcd1146374378988140dc7c0347.jpg",
    title: "tianhuo",
  },
  {
    img: "https://i.pinimg.com/736x/c9/81/85/c981858041c8d33aa5f2a2ce6e0c3278.jpg",
    title: "yao chen",
  },
  {
    img: "https://i.pinimg.com/736x/81/ae/08/81ae08084c78f8222eef86ea608bdfe5.jpg",
    title: "wang ling",
  },
  {
    img: "https://i.pinimg.com/736x/e6/d4/49/e6d449bd6bbe5b81137bc85329a507ce.jpg",
    title: "xiao yan",
  },

  {
    img: "https://i.pinimg.com/736x/98/00/60/980060bc876b0f76b94232c8d31fda5e.jpg",
    title: "yun shan",
  },

  {
    img: "https://i.pinimg.com/736x/70/b1/5b/70b15bcd1146374378988140dc7c0347.jpg",
    title: "tianhuo",
  },
  {
    img: "https://i.pinimg.com/736x/c9/81/85/c981858041c8d33aa5f2a2ce6e0c3278.jpg",
    title: "yao chen",
  },
];
