import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

// eslint-disable-next-line react/prop-types
export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const { email, logout } = useAuth();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleClose();
  };

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="Logo"
            src="https://raw.githubusercontent.com/Piggey/e-biznes/161b0016266b84f7f9b11a5e94da24aa2a4dc815/src/assets/logo.png"
            component={Link}
            to="/"
            sx={{ width: 64, height: 64 }}
          />
          <Typography variant="h4" component="div">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Globetrotter Travel
            </Link>
          </Typography>
        </div>

        <div style={{ display: "flex", justifyContent: "right", flexGrow: 1 }}>
          {email && (
            <Grid>
              <Button color="inherit" component={Link} to="/offers/edit">
                Wycieczki
              </Button>
            </Grid>
          )}
        </div>

        {email ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginRight: "8px",
            }}
          >
            <Typography variant="body1" style={{ marginRight: "8px" }}>
              {email}
            </Typography>
            <Avatar alt="User Avatar" onClick={handleMenuClick} />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleClose}>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Wyloguj się
                </Link>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Zaloguj się
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
