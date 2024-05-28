import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import { format } from "date-fns";
import { offers } from "../data/offers";
import { OfferElement } from "../components/OfferElement";

export const Offers = () => {
  const location = useLocation();
  const { destination, dateFrom, dateTo, numPeople } = location.state;

  const filteredOffers = offers.filter((offer) =>
    offer.destination.toLowerCase().includes(destination.toLowerCase())
  );

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Oferty dla: {destination} ({numPeople} osób, od{" "}
        {format(new Date(dateFrom), "dd-MM-yyyy")} do{" "}
        {format(new Date(dateTo), "dd-MM-yyyy")})
      </Typography>
      <Grid container spacing={2}>
        {filteredOffers.map((offer) => (
          <Link to={`/offer/${offer.id}`} key={offer.id} style={{ textDecoration: 'none' }}>
            <OfferElement offer={offer} />
          </Link>
        ))}
      </Grid>
    </Container>
  );
}
