// Komponent Offer.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardMedia, Button, Divider, List, ListItem, ListItemText } from '@mui/material';
import { offers } from '../data/offers';
import { Gallery } from '../components/Gallery';
import { Opinions } from '../components/Opinions';
import { OpenStreetMapWindow } from '../components/OpenStreetMapWindow';

export const Offer = () => {
  const { id } = useParams();
  const offer = offers.find(offer => offer.id === parseInt(id));

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
        {offer.name}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {offer.shortDescription}
      </Typography>
      <Grid container spacing={3}>
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
          <Typography variant="h6" gutterBottom>
            Podsumowanie:
          </Typography>
          <Typography variant="body1" gutterBottom>
            Data: {offer.departureDate.toLocaleDateString()} - {offer.arrivalDate.toLocaleDateString()}
          </Typography>
          <Typography variant="body1" gutterBottom>
            Cena za osobę: {offer.pricePerPerson} {offer.currency}
          </Typography>
          <Button variant="contained" color="primary" href="#" sx={{ mt: 2 }}>
            Rezerwuj
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h6" gutterBottom>
        Opis:
      </Typography>
      <Typography variant="body1" gutterBottom>
        {offer.longDescription}
      </Typography>
      <Divider sx={{ my: 4 }} />
      <Typography variant="h6" gutterBottom>
        Atrakcje:
      </Typography>
      <List>
        {offer.attractions.map((attraction, index) => (
          <ListItem key={index}>
            <ListItemText primary={attraction} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 4 }} />
      <Gallery imgUrls={offer.imgUrls} />
      <Divider sx={{ my: 4 }} />
      <Typography variant="h6" gutterBottom>
        Lokalizacja:
      </Typography>
      <OpenStreetMapWindow coords={[offer.lat, offer.lon]} />
      <Divider sx={{ my: 4 }} />
      <Opinions opinions={offer.opinions} />
    </Container>
  );
};
