import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import { format } from "date-fns";
import { OfferElement } from "../components/OfferElement";
import { useOffers } from "../data/OffersContext";

export const Offers = () => {
  const { offers } = useOffers();
  const location = useLocation();
  const { destination, dateFrom, dateTo, numPeople } = location.state;

  const filteredOffers = offers.filter((offer) =>
    offer.destination.toLowerCase().includes(destination.toLowerCase())
  );

  return (
    <Container sx={{ mt: 12 }}>
      <Typography variant="h4" gutterBottom>
        Oferty dla: {destination} ({numPeople} osób, od{" "}
        {format(new Date(dateFrom), "dd-MM-yyyy")} do{" "}
        {format(new Date(dateTo), "dd-MM-yyyy")})
      </Typography>
      <Grid container spacing={3}>
        {filteredOffers.map((offer) => (
          <Grid item xs={12} key={offer.id}>
            <Link to={`/offer/${offer.id}`} style={{ textDecoration: 'none' }}>
              <OfferElement offer={offer} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
