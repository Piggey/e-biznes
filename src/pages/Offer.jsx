import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Grid, Card, CardMedia, Button, Divider } from '@mui/material';
import { offers } from '../data/offers';
import { Gallery } from '../components/Gallery';
import { Opinions } from '../components/Opinions';

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
      <Gallery imgUrls={offer.imgUrls} />
      <Divider sx={{ my: 4 }} />
      <Opinions opinions={offer.opinions} />
    </Container>
  );
};
