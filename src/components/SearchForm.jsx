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
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

const destinations = ["Paryż", "Londyn", "Nowy Jork", "Tokyo", "Sydney"];

export default function SearchForm() {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [people, setPeople] = useState(1);

  const handleSearch = () => {
    console.log("Destination:", destination);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Number of People:", people);
  };

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
            label="Dokąd?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            variant="outlined"
            sx={{ minWidth: 150 }}
          >
            {destinations.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Od"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
            <DatePicker
              label="Do"
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <TextField
            type="number"
            label="Liczba osób"
            value={people}
            onChange={(e) => setPeople(e.target.value)}
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
}
