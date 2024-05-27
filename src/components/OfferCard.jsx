import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export default function OfferCard({ offer }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={offer.imgUrl}
        alt={offer.destination}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {offer.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {offer.description}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Typography variant="body1">
            <StarIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} />
            {offer.rating}
          </Typography>
          <Typography variant="body1">
            <strong>{offer.price}</strong>/os.
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
