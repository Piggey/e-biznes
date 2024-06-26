import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export const OfferCard = ({ offer }) => {
  return (
    <Card sx={{ minHeight: 400 }}>
      <CardMedia
        component="img"
        image={offer.thumbnailUrl}
        alt={offer.name}
        sx={{
          height: 240,
          width: '100%',
          objectFit: 'cover'
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {offer.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {offer.shortDescription}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <StarIcon sx={{ color: 'gold' }} />
            <Typography variant="body1" component="div">
              {offer.rating}
            </Typography>
          </Box>
          <Typography variant="body1" component="div">
            <strong>{offer.pricePerPerson}</strong> {offer.currency}/os.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
