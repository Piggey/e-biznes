import OpenStreetMapWindow from './OpenStreetMapWindow';
import { Typography, Grid, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Location = () => {
  const locationCoordinates = [51.747059, 19.453930];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" mt={4} align="center" gutterBottom>
          Odwiedź nasze biuro
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <ListItem disableGutters>
          <ListItemIcon>
            <LocationOnIcon color="primary" fontSize="large" />
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="h4">
                Łódź <br />
                Al. Politechniki 8
              </Typography>
            }
          />
        </ListItem>
        <Typography variant="h5">
          Godziny otwarcia
        </Typography>
        <Typography>
          Poniedziałek - Piątek: 9:00 - 16:00 <br />
          Sobota - Niedziela: 8:00 - 15:00
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <OpenStreetMapWindow coords={locationCoordinates} />
      </Grid>
    </Grid>
  );
};