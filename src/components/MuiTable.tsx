import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function MuiTable() {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const tableData = [
  {
    id: 1,
    first_name: "Reinhold",
    last_name: "Killiner",
    email: "rkilliner0@sakura.ne.jp",
    gender: "Male",
    ip_address: "159.220.157.87",
  },
  {
    id: 2,
    first_name: "Sasha",
    last_name: "Signorelli",
    email: "ssignorelli1@tinyurl.com",
    gender: "Female",
    ip_address: "98.87.210.185",
  },
  {
    id: 3,
    first_name: "Linell",
    last_name: "Morton",
    email: "lmorton2@amazonaws.com",
    gender: "Female",
    ip_address: "179.123.208.241",
  },
  {
    id: 4,
    first_name: "Agnes",
    last_name: "Ciccoloi",
    email: "aciccoloi3@mtv.com",
    gender: "Female",
    ip_address: "106.143.85.147",
  },
  {
    id: 5,
    first_name: "Fran",
    last_name: "Dummer",
    email: "fdummer4@friendfeed.com",
    gender: "Male",
    ip_address: "46.70.242.198",
  },
  {
    id: 6,
    first_name: "Gertrudis",
    last_name: "Winterbotham",
    email: "gwinterbotham5@amazon.de",
    gender: "Female",
    ip_address: "37.166.225.9",
  },
  {
    id: 7,
    first_name: "Kesley",
    last_name: "Diack",
    email: "kdiack6@shinystat.com",
    gender: "Female",
    ip_address: "184.251.197.158",
  },
  {
    id: 8,
    first_name: "April",
    last_name: "Gush",
    email: "agush7@gizmodo.com",
    gender: "Female",
    ip_address: "35.143.221.21",
  },
  {
    id: 9,
    first_name: "Rebecka",
    last_name: "Munsey",
    email: "rmunsey8@opensource.org",
    gender: "Female",
    ip_address: "19.171.250.172",
  },
  {
    id: 10,
    first_name: "Law",
    last_name: "Matthesius",
    email: "lmatthesius9@msu.edu",
    gender: "Male",
    ip_address: "75.221.54.207",
  },
];
