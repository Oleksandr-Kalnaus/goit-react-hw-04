import PropTypes from "prop-types";
import css from "./ImageCard.module.css";

const ImageCard = ({ imageCard, onImageClick }) => {
  const { smallImage, regularImage, description, likes, dateOfCreate } =
    imageCard;

  const handleClick = () => {
    onImageClick({ regularImage, description, likes, dateOfCreate });
  };

  return (
    <div className={css.imageCard} onClick={handleClick}>
      <img src={smallImage} alt={description} className={css.image} />
    </div>
  );
};

ImageCard.propTypes = {
  imageCard: PropTypes.shape({
    description: PropTypes.string.isRequired,
    smallImage: PropTypes.string.isRequired,
    regularImage: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    dateOfCreate: PropTypes.string.isRequired,
  }).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageCard;
