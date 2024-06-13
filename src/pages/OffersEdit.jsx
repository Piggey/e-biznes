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
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useOffers } from "../data/OffersContext";

const OfferForm = ({ offer, handleChange, handleSave, handleClose, editMode }) => (
  <Dialog open onClose={handleClose}>
    <DialogTitle>{editMode ? "Edytuj ofertę" : "Dodaj ofertę"}</DialogTitle>
    <DialogContent>
      <TextField
        autoFocus
        margin="dense"
        name="name"
        label="Nazwa"
        type="text"
        fullWidth
        value={offer.name}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        name="shortDescription"
        label="Krótki opis"
        type="text"
        fullWidth
        value={offer.shortDescription}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        name="longDescription"
        label="Długi opis"
        type="text"
        fullWidth
        value={offer.longDescription}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        name="thumbnailUrl"
        label="URL miniaturki"
        type="text"
        fullWidth
        value={offer.thumbnailUrl}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        name="pricePerPerson"
        label="Cena za osobę"
        type="number"
        fullWidth
        value={offer.pricePerPerson}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        name="currency"
        label="Waluta"
        type="text"
        fullWidth
        value={offer.currency}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        name="destination"
        label="Destynacja"
        type="text"
        fullWidth
        value={offer.destination}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        name="departureIATA"
        label="IATA lotniska wylotu"
        type="text"
        fullWidth
        value={offer.departureIATA}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        name="departureDate"
        label="Data wylotu"
        type="date"
        fullWidth
        value={offer.departureDate}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        name="arrivalIATA"
        label="IATA lotniska przylotu"
        type="text"
        fullWidth
        value={offer.arrivalIATA}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        name="arrivalDate"
        label="Data przylotu"
        type="date"
        fullWidth
        value={offer.arrivalDate}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        name="lat"
        label="Szerokość geograficzna"
        type="text"
        fullWidth
        value={offer.lat}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        name="lon"
        label="Długość geograficzna"
        type="text"
        fullWidth
        value={offer.lon}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        name="attractions"
        label="Atrakcje (rozdzielone przecinkami)"
        type="text"
        fullWidth
        value={offer.attractions.join(", ")}
        onChange={(e) =>
          handleChange({
            target: {
              name: "attractions",
              value: e.target.value.split(", "),
            },
          })
        }
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
);

export const OffersEdit = () => {
  const { offers, setOffers } = useOffers();
  const [open, setOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [currentOffer, setCurrentOffer] = useState({});
  const [offerToDelete, setOfferToDelete] = useState(null);

  const handleOpen = (offer) => {
    setEditMode(!!offer);
    setCurrentOffer(
      offer || {
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
      }
    );
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

  const handleDelete = () => {
    setOffers(offers.filter((offer) => offer.id !== offerToDelete));
    setDeleteDialogOpen(false);
  };

  const openDeleteDialog = (id) => {
    setOfferToDelete(id);
    setDeleteDialogOpen(true);
  };

  const closeDeleteDialog = () => {
    setDeleteDialogOpen(false);
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
          <Grid item xs={12} key={offer.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">ID: {offer.id}</Typography>
                <Typography variant="h5">{offer.name}</Typography>
                <Typography variant="body2">{offer.shortDescription}</Typography>
              </CardContent>
              <CardActions>
                <IconButton color="primary" onClick={() => handleOpen(offer)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="error" onClick={() => openDeleteDialog(offer.id)}>
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {open && (
        <OfferForm
          offer={currentOffer}
          handleChange={handleChange}
          handleSave={handleSave}
          handleClose={handleClose}
          editMode={editMode}
        />
      )}
      <Dialog open={deleteDialogOpen} onClose={closeDeleteDialog}>
        <DialogTitle>Potwierdź usunięcie</DialogTitle>
        <DialogContent>
          <Typography>Czy na pewno chcesz usunąć tę ofertę?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteDialog} color="primary">
            Anuluj
          </Button>
          <Button onClick={handleDelete} color="error">
            Usuń
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};
