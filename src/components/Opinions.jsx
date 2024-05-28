// Komponent Opinions.jsx
import React from 'react';
import { Card, CardContent, Avatar, Typography, Rating } from '@mui/material';

export const Opinions = ({ opinions }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Opinie użytkowników:
      </Typography>
      {opinions.map(opinion => (
        <Card key={opinion.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="body1" gutterBottom>
              {opinion.opinion}
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar sx={{ mr: 1 }}>{opinion.name[0]}</Avatar>
              <Typography variant="subtitle1" gutterBottom>
                {opinion.name}
              </Typography>
            </div>
            <Rating name="read-only" value={opinion.rating} readOnly />
          </CardContent>
        </Card>
      ))}
    </>
  );
};
