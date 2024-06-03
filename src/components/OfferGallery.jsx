import { Grid, Typography, Container } from "@mui/material";
import { offers } from '../data/offers'
import { OfferCard } from "./OfferCard";
import { Link } from "react-router-dom";

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
        {offers.slice(0, 3).map((offer) => (
          <Grid item xs={12} sm={6} md={4} key={offer.name}>
            <Link to={`/offer/${offer.id}`} style={{ textDecoration: 'none' }}>
              <OfferCard offer={offer} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
    </Grid>
  );
};
