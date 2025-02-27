# **Material UI Darslari**

- `Material UI (MUI)` — bu `React` uchun ishlab chiqilgan eng mashhur `UI` kutubxonalardan biri bo‘lib, u `Google Material Design` konsepsiyasiga asoslangan. `MUI` yordamida tez va professional darajada chiroyli `UI` yaratish mumkin.

- ✅ React bilan mukammal moslik — MUI faqat React.js uchun ishlab chiqilgan.
- ✅ Tez UI yaratish — Tayyor komponentlar yordamida tez ishlaydigan dizayn qilish mumkin.
- ✅ Customization (sozlash imkoniyati) — ThemeProvider va sx prop-lari orqali butun loyiha dizaynini sozlash mumkin.
- ✅ Responsivlik va moslashuvchanlik — Mobil va desktop versiyalar avtomatik moslashadi.
- ✅ CSS-in-JS qo‘llab-quvvatlashi — Emotion.js orqali yozilgan va styled-components ga o‘xshaydi.
- ✅ Kuchli ekotizim — MUI tarkibida qo‘shimcha kutubxonalar mavjud:
  - MUI Base — eng minimal UI komponentlar
  - MUI X — murakkab UI komponentlar (DataGrid, Chart, DatePicker)
  - MUI System — responsivlik va stilizatsiya uchun maxsus tizim

---

## **📌 1-dars React va Material UI ni o'rnatish**

```bash
npx create-react-app --template typescript

```

- `React` ni o'rnatish va unga `TypeScript` qo'shish

```bash
npm install @mui/material @emotion/react @emotion/styled
```

- `npm` orqali `Material UI` ni o'rnatish

---

## **📌 2-dars Typography**

- `Typography` — bu MUI kutubxonasining matn (text) bilan ishlash uchun mo‘ljallangan componenti. U sizga sarlavhalar (h1-h6), paragraf (p), va boshqa matn elementlarini o‘ziga xos uslubda chiqarish imkonini beradi.

```tsx
import { Typography } from "@mui/material";
```

- `Typography` ni import qilish

```tsx
<Typography variant="h1">h1 Heading</Typography>
<Typography variant="h2">h2 Heading</Typography>
<Typography variant="h3">h3 Heading</Typography>
<Typography variant="h4">h4 Heading</Typography>
<Typography variant="h5">h5 Heading</Typography>
<Typography variant="h6">h6 Heading</Typography>
```

- `Typography` komponentidan foydalanib, h1 dan h6 gacha bo'lgan sarlavhalarni yaratish.
- `Typography` komponenti `Material-UI` kutubxonasidan keladi va `HTML` dagi `<h1> - <h6>` sarlavha teglariga mos keluvchi matnlarni hosil qiladi.
- `variant` xususiyati orqali matnning o‘lchami va uslubi belgilanadi.

```tsx
<Typography variant="h4" component={"h1"} gutterBottom>
  h4 Heading
</Typography>
```

`variant="h4"`

- Matnning ko'rinishini `(font-size, font-weight)` `h4` sifatida belgilaydi.
- `MUI` dizayn qoidalariga asosan `h4` ning oldindan tayyorlangan o`‘lcham` va `uslubini` qo‘llaydi.
- Natija: `h4` uslubidagi matn chiqadi.

`component={"h1"}`

- Matn real HTML tarkibida` <h1>` tegi sifatida hosil bo‘ladi.
- Ya'ni, ko'rinishi `h4`, lekin semantik jihatdan `h1` bo'ladi.
- Bu `SEO (search engine optimization)` va `accessibility (kirish imkoniyati)` uchun foydali.

`gutterBottom`

- Bu `Typography` komponentiga pastki tomonda `bo‘shliq (margin-bottom)` qo‘shadi.

```tsx
<Typography variant="subtitle1">Subtitle 1</Typography>
<Typography variant="subtitle2">Subtitle 2</Typography>
```

- `Typography` komponentidan foydalanib, `kichik sarlavhalar (subtitle)` yaratish.
- `subtitle1` kattaroq va muhimroq, `subtitle2` esa kichikroq va kamroq urg‘u berilgan sarlavha hisoblanadi.

```tsx
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
```

- `Typography` komponentidan foydalanib, `asosiy matn (body text)` yaratish
- `body1` kattaroq va asosiy matn, `body2` esa kichikroq va kamroq urg‘u berilgan matn uchun ishlatiladi.

---

## **📌 3-dars Buttons**

```tsx
import { Button } from "@mui/material";
```

- `Button` komponentini import qilish

```tsx
<Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
```

- `Button` komponentining turli xil variantlari

```tsx
import { Stack, Button } from "@mui/material";

<Stack spacing={2} direction={"row"}>
  <Button variant="text">Text</Button>
  <Button variant="contained">Contained</Button>
  <Button variant="outlined">Outlined</Button>
</Stack>;
```

- `<Stack>` komponenti
  - Bu `Material-UI` ning `layout` komponenti bo‘lib, elementlarni `ustun (column)` yoki `qator (row)` bo‘ylab joylash uchun ishlatiladi.
  - `spacing={2}` – ichki elementlar orasidagi bo‘shliqni (masofani) belgilaydi. 2 Material-UI’ning spacing tizimiga asosan `8px \* 2 = 16px` bo‘ladi.
  - `direction={"row"}` – elementlarni gorizontal `(row - qator)` tarzda joylashtiradi.
  - `direction` xossasi `CSS` dagi `flex-direction` bilan bir xil ishlaydi.

```tsx
<Button variant="text" href="http://google.com">
  Text
</Button>
```

- `Button` komponentidan `<a href="#"></a>` kabi foydalanish

```tsx
<Button variant="contained" color="primary">
  Primary
</Button>
<Button variant="contained" color="secondary">
  Secondary
</Button>
<Button variant="contained" color="error">
  Error
</Button>
<Button variant="contained" color="warning">
  Warning
</Button>
<Button variant="contained" color="info">
  Info
</Button>
<Button variant="contained" color="success">
  Success
</Button>
```

- `Button` komponentining orqa foniga rang berish

```tsx
<Button variant="contained" size="small">
  Small
</Button>
<Button variant="contained" size="medium">
  Medium
</Button>
<Button variant="contained" size="large">
  Large
</Button>
```

- `Button` komponentiga o'lcham rang berish

```bash
npm install @mui/icons-material
```

- `MUI` ning `icon package` ni o'rnatish

```tsx
import SendIcon from "@mui/icons-material/Send";

<Button variant="contained" startIcon={<SendIcon />}>
  Send
</Button>
<Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
```

- `Button` komponentiga yozuvdan oldin va keyin `icon` qo'shish

```tsx
import { IconButton } from "@mui/material";

<IconButton color="success" size="small">
  <SendIcon />
</IconButton>;
```

- `IconButton` komponentidan foydalanib `icon` qo'shish

```tsx
<Button variant="contained" startIcon={<SendIcon />} disableRipple>
  Send
</Button>
<Button variant="contained" endIcon={<SendIcon />} disableElevation>
  Send
</Button>
```

- `disableRipple` Tugmaga bosilganda chiqadigan `to‘lqin (ripple effect)` o‘chirib qo‘yiladi.
- `disableElevation` Tugmadagi `soyani (shadow/elevation)` olib tashlaydi.

---

## **📌 4-dars ButtonGroup**

`<ButtonGroup>` – Tugmalar Guruhini Yaratuvchi Komponent

```tsx
<ButtonGroup
  variant="contained"
  orientation="vertical"
  size="small"
  color="secondary"
>
  <Button>Left</Button>
  <Button>Center</Button>
  <Button>Right</Button>
</ButtonGroup>
```

- `variant="contained"` – tugmalarni to‘ldirilgan (solid) qilib chiqaradi.
  `"outlined"` – tugmalar chegarasi bo‘ladi, ammo ichi bo‘sh.
  `"text"` – faqat matn bo‘lib chiqadi, chegarasi yoki to‘ldirilgan qismi bo‘lmaydi.

- `orientation="vertical"` – tugmalar vertikal (ustun shaklida) joylashadi.
  - `"horizontal"` qilib qo‘ysak, tugmalar gorizontal (qator shaklida) chiqadi.
- `size="small"` – tugmalar kichik hajmda bo‘ladi.
  - `"medium"` – o‘rtacha (default).
  - `"large"` – katta tugmalar.
- `color="secondary"` – tugmalar `MUI` ning ikkinchi darajali (secondary) rangi bilan chiqadi.
  - `"primary"` – asosiy rang.
  - `"success"` – yashil (muvaffaqiyat).
  - `"error"` – qizil (xatolik).
  - `"warning"` – sariq (ogohlantirish).
  - `"info"` – moviy (axborot).
  - `"inherit"` – ota elementdan rang oladi.

---

## **📌 5-Dars ToggleButtonGroup - Matn formatlash komponenti**

Ushbu komponent **Material-UI** kutubxonasining `ToggleButtonGroup` elementidan foydalanib, matnni formatlash tugmalarini yaratadi. Foydalanuvchi matnni **qalin**, _kursiv_ yoki _tagiga chizilgan_ shaklda tanlashi mumkin.

- Foydalanuvchiga matn formatini tanlash imkonini beradi.
- Bir nechta formatni bir vaqtning o‘zida tanlash mumkin.
- **React state** bilan ishlaydi (`useState`).
- **Material-UI** kutubxonasining `ToggleButtonGroup` va `ToggleButton` komponentlaridan foydalanadi.

```tsx
import { useState } from "react";
import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

const TextFormatter = () => {
  const [formats, setFormats] = useState<string[]>([]);

  const handleFormatChange = (
    _e: React.MouseEvent<HTMLElement>,
    updateFormats: string[]
  ) => {
    setFormats(updateFormats);
  };

  return (
    <Stack direction="row">
      <ToggleButtonGroup
        aria-label="text formatting"
        value={formats}
        onChange={handleFormatChange}
        size="small"
        color="success"
      >
        <ToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </ToggleButton>
        <ToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </ToggleButton>
        <ToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};

export default TextFormatter;
```

- ToggleButton - bu Material-UI tomonidan taqdim etilgan tugma bo‘lib, foydalanuvchilarga bir yoki bir nechta variantlarni tanlash imkonini beradi. U ToggleButtonGroup ichida ishlatilganda, bir nechta tugmalar o‘zaro bog‘langan holda ishlaydi.

- value - tugmaning qiymati, tanlangan holatda onChange funksiyasiga uzatiladi.

- selected - agar ushbu atribut true bo‘lsa, tugma tanlangan holda ko‘rsatiladi.

- disabled - tugmani o‘chirib qo‘yish uchun ishlatiladi.

- color - tugma rangini belgilaydi (primary, secondary, success, va hokazo).

1. `useState` yordamida `formats` nomli **massiv holat (state)** yaratiladi.
2. `handleFormatChange` funksiyasi har safar tugmalardan birini bosganda, **tanlangan formatlar ro‘yxatini** yangilaydi.
3. `ToggleButtonGroup` komponenti tanlangan formatlarni ushlab turadi.
4. Har bir `ToggleButton` **FormatBoldIcon**, **FormatItalicIcon** va **FormatUnderlinedIcon** ikonkalari bilan matnni formatlash imkonini beradi.

```tsx
const [formats, setFormats] = useState<string | null>(null);

const handleFormatChange = (
  _e: React.MouseEvent<HTMLElement>,
  updateFormats: string | null
) => {
  setFormats(updateFormats);
};

<Stack direction={"row"}>
  <ToggleButtonGroup
    aria-label="text formatting"
    value={formats}
    onChange={handleFormatChange}
    size="small"
    color="success"
    exclusive
  >
    <ToggleButton value={"bold"} aria-label="bold">
      <FormatBoldIcon />
    </ToggleButton>
    <ToggleButton value={"italic"} aria-label="italic">
      <FormatItalicIcon />
    </ToggleButton>
    <ToggleButton value={"underlined"} aria-label="underlined">
      <FormatUnderlinedIcon />
    </ToggleButton>
  </ToggleButtonGroup>
</Stack>;
```

- yuqoridagi bilan bir xil ishni bajaradi faqat bunda bir vaqtning o'zida bitta tugmani tanlash mumkin `ToggleButtonGroup` ga qo'shilgan `exclusive` xossasi va statedagi bazi o'zgarishlar sababli

---

## **📌 6-Dars MUI TextField**

`TextField` — bu foydalanuvchilardan matn kiritishni talab qiladigan komponent. U HTML `<input>` elementining yaxshilangan versiyasi bo‘lib, ichida label (yorliq), variantlar, ikonka, xatolik bildirgich, va boshqa xususiyatlarni qo‘llab-quvvatlaydi.

```tsx
import { TextField } from "@mui/material";

<TextField label="name" />;
```

- `TextField` componentidan foydalanish

```tsx
<TextField label="name" variant="outlined" />
<TextField label="name" variant="filled" />
<TextField label="name" variant="standard" />
```

- `TextField` ning variantlari

```tsx
<TextField label="Small Secondary" size="small" color="secondary" />
```

- `TextFiled` ga o'lcham va rang berish

```tsx
<TextField
  label="Form Input"
  helperText="Do not share your password with anyone"
/>
```

- `helperText` inputning tagida yordamchi matn yozib qo'yadi

```tsx
<TextField label="Read Only" InputProps={{ readOnly: true }} />
```

- Bunday inputga yozib bo'lmaydi lekin bu disabled emas

```tsx
import { InputAdornment } from "@mui/material";

<Stack direction={"row"} spacing={2}>
  <TextField
    label="Amount"
    InputProps={{
      startAdornment: <InputAdornment position="start">$</InputAdornment>,
    }}
  />
  <TextField
    label="Weight"
    InputProps={{
      endAdornment: <InputAdornment position="end">kg</InputAdornment>,
    }}
  />
</Stack>;
```

- `InputAdornment` orqali `inputning` boshi va oxiriga belgi qo'shish

```tsx
const [value, setValue] = useState("");

<TextField
  label="Form Input"
  required
  value={value}
  onChange={(e) => setValue(e.target.value)}
  error={!value}
  helperText={!value ? "Required" : "Do not share your password with anyone"}
/>;
```

- `useState` va `error` atributi orqali inputga error ko'rinishini berish bu yerda qo'yilgan shartlarga asosan inputga malumot bo'lmasa inputning borderi va helperText qizil rangda turadi

---

## **📌 7-Dars MUI Select Menu**

```tsx
import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const [country, setCountry] = useState("");

console.log(country);

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setCountry(event.target.value);
};

<Box width={"250px"}>
  <TextField
    label="Select Country"
    select
    value={country}
    onChange={handleChange}
    fullWidth
  >
    <MenuItem value="IN">India</MenuItem>
    <MenuItem value="US">USA</MenuItem>
    <MenuItem value="AU">Australia</MenuItem>
  </TextField>
</Box>;
```

- MUI da `select` dan foydalanish va uning qiymatini olish

```tsx
const [countries, setCountries] = useState<string[]>([]);

console.log(countries);

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = event.target.value;
  setCountries(typeof value === "string" ? value.split(",") : value);
};

<Box width={"250px"}>
  <TextField
    label="Select Country"
    select
    value={countries}
    onChange={handleChange}
    fullWidth
    SelectProps={{
      multiple: true,
    }}
  >
    <MenuItem value="IN">India</MenuItem>
    <MenuItem value="US">USA</MenuItem>
    <MenuItem value="AU">Australia</MenuItem>
  </TextField>
</Box>;
```

- ushbu kod bir vaqtning o'zida `selectdagi` `variantlardan` bir nechtasini tanlab array sifatida saqlash imkonini beradi

```tsx
<TextField
  label="Select Country"
  select
  value={countries}
  onChange={handleChange}
  fullWidth
  SelectProps={{
    multiple: true,
  }}
  size="small"
  color="secondary"
  helperText="Please your country"
  error
>
  <MenuItem value="IN">India</MenuItem>
  <MenuItem value="US">USA</MenuItem>
  <MenuItem value="AU">Australia</MenuItem>
</TextField>
```

- `size`, `color`, `helperText` va `error` ko'rinishlarini berish

---

## **📌 8-Dars MUI RadioButton**

`Radio Button` komponenti bir nechta variantlardan bittasini tanlash uchun ishlatiladi. Bu komponent `<Radio />` yoki `<RadioGroup />` bilan ishlaydi.

```tsx
import {
  Box,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
} from "@mui/material";

<Box>
  <FormControl>
    <FormLabel id="job-experience-group-label">Years of exprience</FormLabel>
    <RadioGroup
      name="job-experience-group"
      aria-labelledby="job-experience-group-label"
    >
      <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
      <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
      <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
    </RadioGroup>
  </FormControl>
</Box>;
```

- `<FormControl>` Barcha form elementlarini guruhlash va ularning birga ishlashini ta’minlash uchun ishlatiladi.
- `<FormLabel>` Bu Radio Group uchun sarlavha (label) qo‘shish uchun ishlatiladi.
  - `id="job-experience-group-label"` → Bu `aria-labelledby` bilan bog‘lanib, `ekran o‘qiydiganlar` `(screen readers)` uchun qo‘shimcha ma’lumot beradi.
- `<RadioGroup>` Bu bir nechta radio tugmalarni bir guruhga joylashtirish uchun ishlatiladi.
  - `name="job-experience-group"` → Shu guruh ichidagi radio tugmalar bir-biri bilan bog‘lanadi (faqat bitta tanlanadi).
  - `aria-labelledby="job-experience-group-label"` → `FormLabel` bilan bog‘lanib, ekran o‘qiydiganlar uchun yaxshi accessibility (foydalanuvchanlik) ta’minlaydi.
- `<FormControlLabel>` Har bir Radio Button uchun yorliq (label) qo‘shish uchun ishlatiladi.
  - `control={<Radio />}` → Radio tugmani ko‘rsatadi.
  - `label="0-2"` → Tugma yonida ko‘rinadigan matn.
  - `value="0-2"` → Agar ushbu tugma tanlansa, RadioGroup ichida shu qiymat bo‘ladi.

```tsx
const [value, setValue] = useState("");

console.log({ value });

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setValue(event.target.value);
};

<RadioGroup
  name="job-experience-group"
  aria-labelledby="job-experience-group-label"
  value={value}
  onChange={handleChange}
>
  <FormControlLabel control={<Radio />} label="0-2" value="0-2" />
  <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
  <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
</RadioGroup>;
```

- state yaratib tanlangan radio buttoning qiymatini olish. Oddiy input qiymatini olish bilan bir xil

```tsx
<RadioGroup
  name="job-experience-group"
  aria-labelledby="job-experience-group-label"
  value={value}
  onChange={handleChange}
  row
></RadioGroup>
```

- `row` `RadioGroup` ichidagi barcha `RadioButton` larni yonma-yon tushuradi

```tsx
<FormControlLabel
  control={<Radio size="medium" color="secondary" />}
  label="0-2"
  value="0-2"
/>
```

- `control={<Radio size="medium" color="secondary" />}` RadioButton ga o'lcham va rang berish

```tsx
<FormControl error></FormControl>
```

- `error` atributi formani error ko'rinishiga o'tkazadi

---

## **📌 9-Dars MUI Checkbox**

📌 `Checkbox` – bu belgilash uchun ishlatiladigan komponent bo‘lib, foydalanuvchilarga bir yoki bir nechta variantlarni tanlash imkonini beradi.

```tsx
import { Box, FormControlLabel, Checkbox } from "@mui/material";

<Box>
  <FormControlLabel
    label="I accept terms and conditions"
    control={<Checkbox />}
  />
</Box>;
```

- `checkbox` yaratish
- `label` checkbox yonidagi matn

```tsx
const [acceptTnC, setAcceptTnC] = useState(false);
console.log(acceptTnC);

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setAcceptTnC(event.target.checked);
};

<Box>
  <FormControlLabel
    label="I accept terms and conditions"
    control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
  />
</Box>;
```

- `useState(false)` orqali checkboxning holati (belgilangan yoki belgilanmagan) saqlanadi.

- Foydalanuvchi checkboxni bosganda, `handleChange` funksiyasi ishga tushadi va `checkbox` holatini `(true yoki false)` yangilaydi.

- `FormControlLabel` va `Checkbox` orqali foydalanuvchiga tushunarli interfeys taqdim etiladi.

```tsx
<Box>
  <Checkbox
    icon={<BookMarkBorderIcon />}
    checkedIcon={<BookMarkIcon />}
    checked={acceptTnC}
    onChange={handleChange}
  />
</Box>
```

- icon ga ega checkbox yaratish oddiy

- `icon` atributiga dastlabki holatdagi icon yuklanadi
- `checkedIcon` atributiga checked bo'lgan holatdagi icon yuklanadi

```tsx
const [skills, setSkills] = useState<string[]>([]);

const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const index = skills.indexOf(event.target.value);

  if (index === -1) {
    setSkills([...skills, event.target.value]);
  } else {
    setSkills(skills.filter((skill) => skill !== event.target.value));
  }
};

<Box>
  <FormControl>
    <FormLabel>Skills</FormLabel>
    <FormGroup row>
      <FormControlLabel
        label="HTML"
        value={"html"}
        control={
          <Checkbox
            checked={skills.includes("html")}
            onChange={handleSkillChange}
          />
        }
      />
      <FormControlLabel
        label="CSS"
        value={"css"}
        control={
          <Checkbox
            checked={skills.includes("css")}
            onChange={handleSkillChange}
          />
        }
      />
      <FormControlLabel
        label="JavaScript"
        value={"javascript"}
        control={
          <Checkbox
            checked={skills.includes("javascript")}
            onChange={handleSkillChange}
          />
        }
      />
    </FormGroup>
  </FormControl>
</Box>;
```

Ushbu kodning umumiy vazifasi – foydalanuvchining tanlagan ko‘nikmalarini (Skills) checkboxlar orqali boshqarish.

**Asosiy funksiyalar:**

- Foydalanuvchi checkbox orqali HTML, CSS yoki JavaScript'ni tanlashi mumkin.
- Tanlangan skill’lar massiv (skills) ichida saqlanadi.
- Agar checkbox belgilansa – skill massivga qo‘shiladi, aks holda – o‘chiriladi.
- Tanlangan skill’lar avtomatik ravishda UI da aks etadi.

```tsx
<Box>
  <FormControlLabel
    label="I accept terms and conditions"
    control={
      <Checkbox
        checked={acceptTnC}
        onChange={handleChange}
        size="small"
        color="secondary"
      />
    }
  />
</Box>
```

- checkbox ga o'lcham va rang berish

---

## **📌 10-Dars MUI Switch**

Material UI'dagi Switch – bu kalit (toggle) shaklidagi komponent bo‘lib, foydalanuvchiga ikki holat (yoqilgan va o‘chirilgan) o‘rtasida almashish imkonini beradi. U asosan sozlamalar yoki oddiy yoqish/o‘chirish funksiyalari uchun ishlatiladi.

```tsx
import { Box, FormControlLabel, Switch } from "@mui/material";
<Box>
  <FormControlLabel label="Dark Mode" control={<Switch />} />
</Box>;
```

- `Switch` komponentidan foydalanish

```tsx
const [checked, setChecked] = useState(false);

console.log({ checked });

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setChecked(event.target.checked);
};

<Box>
  <FormControlLabel
    label="Dark Mode"
    control={<Switch checked={checked} onChange={handleChange} />}
  />
</Box>;
```

- `Switch` ning qiymatini olish

```tsx
<Box>
  <FormControlLabel
    label="Dark Mode"
    control={
      <Switch
        checked={checked}
        onChange={handleChange}
        size="small"
        color="success"
      />
    }
  />
</Box>
```

- `Switch` ga `rang` va `o'lcham` berish

---

## **📌 11-Dars MUI Rating**

Material UI Rating komponenti foydalanuvchilarga yulduzlar orqali baho berish imkonini beradi. U interaktiv bo‘lib, baholarni hover yoki bosish orqali o‘zgartirish mumkin. Shuningdek, precision, icon, va size kabi propslar yordamida moslashtiriladi

```tsx
import { Rating } from "@mui/material";
<Rating />;
```

- `Mui` ning `Rating` komponentidan foydalanish

```tsx
const [value, setValue] = useState<number | null>(null);

console.log({ value });

const handleChange = (
  _event: React.ChangeEvent<{}>,
  newValue: number | null
) => {
  setValue(newValue);
};

<Rating value={value} onChange={handleChange} />;
```

- `Rating` komponentidan nechta yuldzcha tanlanganligining qiymatini olish 5 yulduzlik tizimda bosilgan yulduzchaga qarab 1 dan 5 gacha raqam qaytaradi

```tsx
<Rating value={value} onChange={handleChange} precision={0.5} size="large" />
```

- `size` o'lcham berish uchun
- `precision` yulduzchaning yarmini tanlash imkoniyatini qo'shish uchun

```tsx
<Rating
  value={value}
  onChange={handleChange}
  precision={0.5}
  size="large"
  icon={<FavouriteIcon fontSize="inherit" color="error" />}
  emptyIcon={<FavouriteBorderIcon fontSize="inherit" />}
/>
```

- `Rating` komponentiga yulduzcha o'rniga icon qo'shish
- `icon` - bosilganda ko'rinadigna icon
- `emptyIcon` - default holatda ko'rinadigna icon

```tsx
const [value, setValue] = useState<number | null>(3);

console.log({ value });

const handleChange = (
  _event: React.ChangeEvent<{}>,
  newValue: number | null
) => {
  setValue(newValue);
};

<Rating
  value={value}
  onChange={handleChange}
  precision={0.5}
  size="large"
  icon={<FavouriteIcon fontSize="inherit" color="error" />}
  emptyIcon={<FavouriteBorderIcon fontSize="inherit" />}
  readOnly
/>;
```

- boshidan 3 ta icon belgilanib turadi va uni o'zgartirib bo'lmaydi

```tsx
<Rating
  value={value}
  onChange={handleChange}
  precision={0.5}
  size="large"
  icon={<FavouriteIcon fontSize="inherit" color="error" />}
  emptyIcon={<FavouriteBorderIcon fontSize="inherit" />}
  highlightSelectedOnly
/>
```

- `highlightSelectedOnly` faqat bitta iconni tanlash mumkin

---

## **📌 12-Dars Autocomplete**

MUI'dagi Autocomplete komponenti foydalanuvchilarga matn kiritish jarayonida mos variantlarni tavsiya qiluvchi dropdown menyu yaratish uchun ishlatiladi. U qidiruv funksiyasini qo‘llab-quvvatlaydi va statik yoki dinamik ma'lumotlar bilan ishlashi mumkin. Shuningdek, freeSolo, multiple, va disableClearable kabi xususiyatlar orqali moslashuvchanligi oshiriladi.

```tsx
import { Autocomplete, Stack, TextField } from "@mui/material";
import { useState } from "react";

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const [value, setValue] = useState<string | null>(null);
console.log({ value });

<Autocomplete
  options={skills}
  value={value}
  onChange={(_, newValue: string | null) => setValue(newValue)}
  renderInput={(params) => <TextField {...params} label={"Skills"} />}
/>;
```

- `Autocomplete` componentidan foydalanish
- `options={skills}` – skills massivini variantlar (options) sifatida beradi, ya'ni foydalanuvchi shu massiv ichidagi qiymatlardan tanlaydi.
- `value={value}` – Hozirgi tanlangan qiymatni boshqaradi va `value` o‘zgaruvchisiga bog‘langan.
- `onChange={(_, newValue: string | null) => setValue(newValue)}` – Foydalanuvchi yangi qiymat tanlaganda `setValue(newValue)` orqali valueni yangilaydi.
- `newValue` – bu MUI Autocomplete komponenti tomonidan beriladigan ikkinchi parametr bo‘lib, foydalanuvchi tanlagan yangi qiymatni ifodalaydi.
- `renderInput={(params) => <TextField {...params} label={"Skills"} />}` – Autocomplete ichidagi qidiruv inputi sifatida MUI TextField komponentini ishlatadi va unga "Skills" labelini beradi.

```tsx
<Autocomplete
  options={skills}
  value={value}
  onChange={(_, newValue: string | null) => setValue(newValue)}
  renderInput={(params) => <TextField {...params} label={"Skills"} />}
  freeSolo
/>
```

- `freeSolo` ning vazifasi shundaki, u foydalanuvchiga variantlar ro‘yxatidan tashqari ixtiyoriy matn kiritishga ruxsat beradi.
- Agar `freeSolo` bo‘lmasa, foydalanuvchi faqat options={skills} massivida bor bo‘lgan qiymatlardan tanlashi mumkin.
- Foydalanuvchi variantlardan tanlash yoki o‘z xohishicha matn kiritishi mumkin.
- `newValue` tanlangan yoki kiritilgan matnga teng bo‘ladi.
- Foydalanuvchi `Enter` bosganda, kiritilgan matn `value` sifatida saqlanadi.

---

## **📌 13-Dars Box**

MUI'dagi `Box` komponenti `div` kabi ishlaydi, lekin `sx` prop orqali styling berish osonlashadi. U CSS Flexbox va Grid tizimlarini qo‘llab-quvvatlaydi va responsive dizayn yaratishda juda qulay.

```tsx
<Box component={"span"}>Codeevolution</Box>
```

- Box komponenti `div` kabidir lekin `component` atributi orqali uni boshqa html elementlari singari ishlatish mumkin

```tsx
<Box
  sx={{
    backgroundColor: "primary.main",
    color: "white",
    height: "100px",
    width: "100px",
    padding: "16px",
    "&:hover": {
      backgroundColor: "primary.light",
    },
  }}
>
  Codeevolution
</Box>
```

- `Box` komponentiga `sx` orqali style berish

```tsx
<Box display={"flex"} height={"100px"} bgcolor={"success.light"} p={2}></Box>
```

- `Box` komponentida `CSS` stylelarini `atribut` sifatida ishlatish

---

## **📌 14-Dars Stack**

MUI'dagi Stack komponenti flexbox asosida ishlaydi va uning yordamida elementlarni vertikal yoki gorizontal joylash mumkin. Asosan, row (qator) yoki column (ustun) ko'rinishida elementlarni tartibga solish uchun ishlatiladi.

- `direction` – Joylashuv yo‘nalishini belgilaydi (row, column, row-reverse, column-reverse).
- `spacing` – Elementlar orasidagi masofani belgilaydi.
- `divider` – Elementlar orasiga ajratuvchi chiziq qo‘shish mumkin.
- `alignItems` va justifyContent – Flexbox uslubida joylashuvni sozlash imkonini beradi.

```tsx
<Stack direction="row" spacing={2}>
  <Button variant="contained">Button 1</Button>
  <Button variant="contained">Button 2</Button>
  <Button variant="contained">Button 3</Button>
</Stack>
```

- `direction="row"` – Tugmalar qator bo‘lib joylashadi.
- `spacing={2}` – Tugmalar orasidagi bo‘shliq o‘lchami 2 bo‘ladi.

```tsx
<Stack
  direction="column"
  spacing={2}
  divider={<Divider orientation="vertical" flexItem />}
>
  <Typography variant="h6">Bo'lim 1</Typography>
  <Typography variant="h6">Bo'lim 2</Typography>
  <Typography variant="h6">Bo'lim 3</Typography>
</Stack>
```

- `divider={<Divider />}` – Har bir element orasiga chiziq qo‘shadi.
- `orientation="horizontal"` – Ajratgich gorizontal yo‘nalishda bo‘ladi.
- `flexItem` – Ajratgich Stack ichidagi elementlarga moslashadi.
