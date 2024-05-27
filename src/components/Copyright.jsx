import { Typography, Link } from "@mui/material";

export const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Biuro Podróży Globetrotter Travel
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};
