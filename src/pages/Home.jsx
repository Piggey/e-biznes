import { Box } from "@mui/material";
import { OfferGallery } from "../components/OfferGallery";
import { Location } from "../components/Location";
import { SearchForm } from "../components/SearchForm";
import { OffersHighlight } from "../components/OffersHighlight";

export const Home = () => {
  return (
    <Box>
      <SearchForm />
      <OfferGallery />
      <OffersHighlight />
      <Location />
    </Box>
  );
};
