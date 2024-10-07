import PropTypes from "prop-types";
import Contact from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = () => {
  return (
    <ul>
      <li>
        <ImageCard />
      </li>
    </ul>
  );
};

ImageGallery.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ImageGallery;
