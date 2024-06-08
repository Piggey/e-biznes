import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Copyright } from "./Copyright";

export const StickyFooter = () => {
  return (
    <Box mt={12}>
      <Box
        component="footer"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          py: 3,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="src/assets/logo.png"
              alt="Globetrotter Travel Logo"
              style={{ width: 50, marginRight: 10 }}
            />
            <div>
              <Typography variant="h6">
                Biuro Podróży Globetrotter Travel
              </Typography>
              <Copyright />
            </div>
          </div>
        </Container>
        <Container maxWidth="sm">
          <Typography variant="body2">
            Al. Politechniki 8
            <br />
            93-590 Łódź
            <br />
            tel. (+48) 42 631 39 51
            <br />
            e-mail: w2k23@adm.p.lodz.pl
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};
