import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, TextField, Button, Grid, Card, CardMedia, Divider, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { offers } from '../data/offers';

export const Reserve = () => {
  const { id } = useParams();
  const offer = offers.find(offer => offer.id === parseInt(id));

  const [payerData, setPayerData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [travelersData, setTravelersData] = useState([
    { name: '', age: '' }
  ]);

  const [additionalRequests, setAdditionalRequests] = useState('');
  const [open, setOpen] = useState(false);

  const handlePayerChange = (e) => {
    const { name, value } = e.target;
    setPayerData({
      ...payerData,
      [name]: value,
    });
  };

  const handleTravelerChange = (index, e) => {
    const { name, value } = e.target;
    const newTravelersData = [...travelersData];
    newTravelersData[index][name] = value;
    setTravelersData(newTravelersData);
  };

  const handleNumberOfPeopleChange = (e) => {
    const value = parseInt(e.target.value);
    setNumberOfPeople(value);

    const newTravelersData = [];
    for (let i = 0; i < value; i++) {
      newTravelersData.push({ name: '', age: '' });
    }
    setTravelersData(newTravelersData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    const formData = {
      payerData,
      numberOfPeople,
      travelersData,
      additionalRequests,
      totalPrice: numberOfPeople * offer.pricePerPerson,
    };
    console.log('Form Data Submitted:', formData);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!offer) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Oferta nie została znaleziona.
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Rezerwacja Wycieczki
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="240"
              image={offer.thumbnailUrl}
              alt={offer.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>
            {offer.name}
          </Typography>
          <Typography variant="body1" gutterBottom>
            {offer.shortDescription}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Data: {offer.departureDate.toLocaleDateString()} - {offer.arrivalDate.toLocaleDateString()}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Cena za osobę: {offer.pricePerPerson} {offer.currency}
          </Typography>
        </Grid>
      </Grid>
      <Divider sx={{ my: 4 }} />
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>
          Dane Płatnika
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Imię i nazwisko"
              name="name"
              value={payerData.name}
              onChange={handlePayerChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={payerData.email}
              onChange={handlePayerChange}
              type="email"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Telefon"
              name="phone"
              value={payerData.phone}
              onChange={handlePayerChange}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Liczba osób"
              name="numberOfPeople"
              value={numberOfPeople}
              onChange={handleNumberOfPeopleChange}
              type="number"
              required
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography variant="h6" gutterBottom>
          Dane Podróżujących
        </Typography>
        {travelersData.map((traveler, index) => (
          <Grid container spacing={3} key={index} sx={{ mb: 2 }}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={`Imię i nazwisko osoby ${index + 1}`}
                name="name"
                value={traveler.name}
                onChange={(e) => handleTravelerChange(index, e)}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label={`Wiek osoby ${index + 1}`}
                name="age"
                value={traveler.age}
                onChange={(e) => handleTravelerChange(index, e)}
                required
              />
            </Grid>
          </Grid>
        ))}
        <TextField
          fullWidth
          label="Dodatkowe uwagi"
          name="additionalRequests"
          value={additionalRequests}
          onChange={(e) => setAdditionalRequests(e.target.value)}
          multiline
          rows={4}
        />
        <Divider sx={{ my: 4 }} />
        <Typography variant="h6" gutterBottom>
          Podsumowanie
        </Typography>
        <Typography variant="body1" gutterBottom>
          Całkowity koszt: {numberOfPeople * offer.pricePerPerson} {offer.currency}
        </Typography>
        <Button variant="contained" color="primary" type="submit">
          Zarezerwuj
        </Button>
      </form>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Rezerwacja zakończona pomyślnie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Dziękujemy za dokonanie rezerwacji. Potwierdzenie zostanie przesłane na podany adres e-mail.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Zamknij
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
