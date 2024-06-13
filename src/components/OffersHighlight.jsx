import { Grid, Typography, IconButton, Paper, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOffers } from "../data/OffersContext";

export const OffersHighlight = () => {
  const { offers } = useOffers();
  const [selectedOfferIndex, setSelectedOfferIndex] = useState(0);
  const navigate = useNavigate();

  const maxOffers = 3;
  const visibleOffers = offers.slice(0, maxOffers);
  const { id, name, shortDescription, destination, pricePerPerson, thumbnailUrl, currency } = visibleOffers[selectedOfferIndex];

  const handleNextImage = () => {
    setSelectedOfferIndex(
      (prevIndex) => (prevIndex + 1) % maxOffers
    );
  };

  const handlePrevImage = () => {
    setSelectedOfferIndex(
      (prevIndex) =>
        (prevIndex - 1 + maxOffers) % maxOffers
    );
  };

  const handleNavigateToOffer = () => {
    navigate(`/offer/${id}`);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" mt={4} align="center" gutterBottom>
          Wymarzone wakacje czekają!
        </Typography>
      </Grid>

      <Grid item xs={12} md={8} style={{ position: "relative" }}>
        <Paper elevation={3} style={{ position: "relative" }}>
          <img
            src={thumbnailUrl}
            alt={name}
            style={{ width: "100%", height: "auto", maxHeight: "400px" }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <IconButton
              onClick={handlePrevImage}
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "8px",
                position: "absolute",
                left: "8px",
              }}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              onClick={handleNextImage}
              style={{
                backgroundColor: "white",
                borderRadius: "50%",
                padding: "8px",
                position: "absolute",
                right: "8px",
              }}
            >
              <ArrowForwardIcon />
            </IconButton>
          </div>
        </Paper>
      </Grid>

      <Grid
        item
        xs={12}
        md={4}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Typography variant="h4" style={{ marginBottom: "16px" }}>
          {name}
        </Typography>
        <Typography variant="h6" style={{ marginBottom: "16px" }}>
          {destination}
        </Typography>
        <Typography variant="body1" style={{ marginBottom: "16px" }}>
          {shortDescription}
        </Typography>
        <Typography variant="body1" style={{ marginBottom: "16px" }}>
          Cena za osobę: {pricePerPerson} {currency}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleNavigateToOffer}>
          Przejdź do oferty
        </Button>
      </Grid>

      <Grid
        item
        xs={12}
        md={8}
        style={{
          marginTop: "16px",
          display: "flex",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        {visibleOffers.map((offer, index) => (
          <img
            key={index}
            src={offer.thumbnailUrl}
            alt={offer.name}
            style={{
              width: "64px",
              height: "64px",
              cursor: "pointer",
              border: index === selectedOfferIndex ? "2px solid blue" : "none",
            }}
            onClick={() => setSelectedOfferIndex(index)}
          />
        ))}
      </Grid>
    </Grid>
  );
};
