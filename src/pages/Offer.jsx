import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { offers } from '../data/offers';

export const Offer = () => {
  const { id } = useParams(); // Pobieramy id oferty z adresu URL
  const offer = offers.find(offer => offer.id === parseInt(id)); // Znajdujemy ofertę na podstawie id

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
        {offer.longDescription}
      </Typography>
      {/* Tutaj możesz wyświetlić inne szczegóły oferty */}
    </Container>
  );
};
