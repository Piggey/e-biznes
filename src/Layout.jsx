import { CssBaseline, Container, Box } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar } from "./components/Navbar";
import { StickyFooter } from "./components/StickyFooter";
import { useEffect, useState } from "react";

const theme = createTheme();

// eslint-disable-next-line react/prop-types
export const Layout = ({ children }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storageEmail = localStorage.getItem("email") ?? '';
    setEmail(storageEmail);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box 
        display="flex"
        flexDirection="column"
        minHeight="100vh"
      >
        <Navbar loggedIn={email !== ''} email={email} />
        <Container sx={{ mt: 8, mb: 2, flexGrow: 1 }}>
          {children}
        </Container>
        <StickyFooter />
      </Box>
    </ThemeProvider>
  );
};
