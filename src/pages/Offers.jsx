import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';
import { format } from 'date-fns';
import OfferCard from '../components/OfferCard';
import { offers } from '../data/offers';

export default function Offers() {
  const location = useLocation();
  const { destination, dateFrom, dateTo, numPeople } = location.state;

  const filteredOffers = offers.filter(
    (offer) => offer.destination.toLowerCase().includes(destination.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Oferty dla: {destination} ({numPeople} osób, od {format(new Date(dateFrom), 'dd-MM-yyyy')} do {format(new Date(dateTo), 'dd-MM-yyyy')})
      </Typography>
      <Grid container spacing={2}>
        {filteredOffers.map((offer) => (
          <Grid item xs={12} sm={6} md={4} key={offer.id}>
            <OfferCard offer={offer} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
