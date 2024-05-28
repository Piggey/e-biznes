import { Box } from "@mui/material"
import { OfferGallery } from "../components/OfferGallery";
import { Location } from "../components/Location";
import SearchForm from "../components/SearchForm";
import { ImageGallery } from "../components/ImageGallery";

export const Home = () => {
  return (
    <Box>
      <SearchForm />
      <OfferGallery />
      <ImageGallery />
      <Location />
    </Box>
  );
};
