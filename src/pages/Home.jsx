import { Box } from "@mui/material"
import { OfferGallery } from "../components/OfferGallery";
import { Reviews } from "../components/Reviews";
import { Location } from "../components/Location";
import SearchForm from "../components/SearchForm";
import OfferCard from "../components/OfferCard";

export const Home = () => {
  return (
    <Box>
      <SearchForm />
      <OfferGallery />
      <Reviews />
      <Location />
    </Box>
  );
};
