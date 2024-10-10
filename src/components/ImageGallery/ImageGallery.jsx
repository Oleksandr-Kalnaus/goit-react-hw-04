import ImageCard from "../ImageCard/ImageCard";
import PropTypes from "prop-types";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ imageCards, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {imageCards.map((imageCard) => (
        <li key={imageCard.id} className={css.galleryItem}>
          <ImageCard imageCard={imageCard} onImageClick={onImageClick} />
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  imageCards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      smallImage: PropTypes.string.isRequired,
      regularImage: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      dateOfCreate: PropTypes.string.isRequired,
    })
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
