import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Rating, Box } from '@mui/material';

export const OfferElement = ({ offer }) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
      <CardMedia
        component="img"
        sx={{ width: { xs: '100%', sm: 240 }, objectFit: 'cover' }}
        image={offer.thumbnailUrl}
        alt={offer.name}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {offer.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {offer.shortDescription}
        </Typography>
        <Box sx={{ display: 'flex', my: 1 }}>
          {offer.tags.map((tag, index) => (
            <Chip key={index} label={tag} variant="outlined" size="small" sx={{ mr: 1 }} />
          ))}
        </Box>
        <Typography variant="body1" gutterBottom>
          {offer.longDescription}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Wylot: {offer.departureIATA} - {offer.departureDate.toLocaleDateString()}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Przylot: {offer.arrivalIATA} - {offer.arrivalDate.toLocaleDateString()}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Cena za osobę: {offer.pricePerPerson} {offer.currency}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Rating name="read-only" value={offer.rating} precision={0.1} readOnly />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({offer.opinions.length} opinii)
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
