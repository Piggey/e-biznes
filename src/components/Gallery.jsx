// Komponent Gallery.jsx
import React from 'react';
import { Typography, Grid } from '@mui/material';

export const Gallery = ({ imgUrls }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Galeria zdjęć:
      </Typography>
      <Grid container spacing={2}>
        {imgUrls.map((url, index) => (
          <Grid item xs={6} sm={4} key={index}>
            <img src={url} alt={`Offer ${index + 1}`} style={{ maxWidth: '100%', borderRadius: 4 }} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
