import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useNavigate } from "react-router-dom";
import { offers } from "../data/offers";

export const SearchForm = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(null);
  const [numPeople, setNumPeople] = useState(1);

  const handleSearch = () => {
    navigate("/offers", {
      state: {
        destination,
        dateFrom,
        dateTo,
        numPeople,
      },
    });
  };

  const uniqueDestinations = [
    ...new Set(offers.map((offer) => offer.destination)),
  ];

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Grid item xs={12}>
          <Typography variant="h2" mt={12} align="center" gutterBottom>
            Wyszukaj oferty
          </Typography>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "center",
          }}
        >
          <TextField
            select
            label="Dokąd chcesz jechać?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            variant="outlined"
            sx={{ minWidth: 150 }}
          >
            {uniqueDestinations.map((dest) => (
              <MenuItem key={dest} value={dest}>
                {dest}
              </MenuItem>
            ))}
          </TextField>
          <DatePicker
            label="Od"
            value={dateFrom}
            onChange={(newValue) => setDateFrom(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
          <DatePicker
            label="Do"
            value={dateTo}
            onChange={(newValue) => setDateTo(newValue)}
            renderInput={(params) => <TextField {...params} fullWidth />}
          />
          <TextField
            label="Liczba osób"
            value={numPeople}
            onChange={(e) => setNumPeople(e.target.value)}
            inputProps={{ min: 1 }}
            variant="outlined"
            sx={{ maxWidth: 100 }}
          />
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Szukaj
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
