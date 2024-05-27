import { Grid, Typography, Container } from "@mui/material";
import { offers } from '../data/offers'
import OfferCard from "./OfferCard";

export const OfferGallery = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" mt={4} align="center" gutterBottom>
          Popularne kierunki 
        </Typography>
      </Grid>

      <Container sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {offers.map((offer) => (
          <Grid item xs={12} sm={6} md={4} key={offer.name}>
            <OfferCard offer={offer} />
          </Grid>
        ))}
      </Grid>
    </Container>
    </Grid>
  );
};
