import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { offers as initialOffers } from "../data/offers";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export const OffersEdit = () => {
  const [offers, setOffers] = useState(initialOffers);
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentOffer, setCurrentOffer] = useState({
    id: null,
    name: "",
    shortDescription: "",
    longDescription: "",
    thumbnailUrl: "",
    imgUrls: [],
    rating: "",
    tags: [],
    departureIATA: "",
    departureDate: "",
    arrivalIATA: "",
    arrivalDate: "",
    pricePerPerson: "",
    currency: "",
    destination: "",
    lat: "",
    lon: "",
    attractions: [],
    opinions: [],
  });

  const handleOpen = (offer) => {
    setEditMode(!!offer);
    setCurrentOffer(offer || {
      id: null,
      name: "",
      shortDescription: "",
      longDescription: "",
      thumbnailUrl: "",
      imgUrls: [],
      rating: "",
      tags: [],
      departureIATA: "",
      departureDate: "",
      arrivalIATA: "",
      arrivalDate: "",
      pricePerPerson: "",
      currency: "",
      destination: "",
      lat: "",
      lon: "",
      attractions: [],
      opinions: [],
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentOffer({ ...currentOffer, [name]: value });
  };

  const handleSave = () => {
    if (editMode) {
      setOffers(offers.map((offer) => (offer.id === currentOffer.id ? currentOffer : offer)));
    } else {
      setOffers([...offers, { ...currentOffer, id: offers.length + 1 }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setOffers(offers.filter((offer) => offer.id !== id));
  };

  return (
    <Container sx={{ mt: 12 }}>
      <Typography variant="h4" gutterBottom>
        Zarządzaj ofertami
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleOpen(null)}>
        Dodaj ofertę
      </Button>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {offers.map((offer) => (
          <Grid item xs={12} sm={6} md={4} key={offer.id}>
            <Card>
              <CardContent>
                <Typography variant="h5">{offer.name}</Typography>
                <Typography variant="body2">{offer.shortDescription}</Typography>
              </CardContent>
              <CardActions>
                <IconButton color="primary" onClick={() => handleOpen(offer)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="secondary" onClick={() => handleDelete(offer.id)}>
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editMode ? "Edytuj ofertę" : "Dodaj ofertę"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Nazwa"
            type="text"
            fullWidth
            value={currentOffer.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="shortDescription"
            label="Krótki opis"
            type="text"
            fullWidth
            value={currentOffer.shortDescription}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="longDescription"
            label="Długi opis"
            type="text"
            fullWidth
            value={currentOffer.longDescription}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="thumbnailUrl"
            label="URL miniaturki"
            type="text"
            fullWidth
            value={currentOffer.thumbnailUrl}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="pricePerPerson"
            label="Cena za osobę"
            type="number"
            fullWidth
            value={currentOffer.pricePerPerson}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="currency"
            label="Waluta"
            type="text"
            fullWidth
            value={currentOffer.currency}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="destination"
            label="Destynacja"
            type="text"
            fullWidth
            value={currentOffer.destination}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="departureIATA"
            label="IATA lotniska wylotu"
            type="text"
            fullWidth
            value={currentOffer.departureIATA}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="departureDate"
            label="Data wylotu"
            type="date"
            fullWidth
            value={currentOffer.departureDate}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="arrivalIATA"
            label="IATA lotniska przylotu"
            type="text"
            fullWidth
            value={currentOffer.arrivalIATA}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="arrivalDate"
            label="Data przylotu"
            type="date"
            fullWidth
            value={currentOffer.arrivalDate}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="lat"
            label="Szerokość geograficzna"
            type="text"
            fullWidth
            value={currentOffer.lat}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="lon"
            label="Długość geograficzna"
            type="text"
            fullWidth
            value={currentOffer.lon}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="attractions"
            label="Atrakcyje (rozdzielone przecinkami)"
            type="text"
            fullWidth
            value={currentOffer.attractions.join(", ")}
            onChange={(e) => setCurrentOffer({ ...currentOffer, attractions: e.target.value.split(", ") })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleSave} color="primary">
            Zapisz
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
