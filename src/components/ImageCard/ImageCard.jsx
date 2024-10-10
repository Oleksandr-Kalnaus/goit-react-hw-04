import PropTypes from "prop-types";
import css from "./ImageCard.module.css";

const ImageCard = ({ imageCard, onImageClick }) => {
  const { description, smallImage, regularImage, likes, dateOfCreate } =
    imageCard;

  const handleClick = () => {
    onImageClick(regularImage);
  };

  return (
    <div className={css.imageCard} onClick={handleClick}>
      <img src={smallImage} alt={description} className={css.image} />
      <div className={css.imageDescr}>
        <p className={css.imageNamed}>{description}</p>
        <p className={css.imageLikes}>Likes: {likes}</p>
        <p className={css.imageDateOfCreate}>Date: {dateOfCreate}</p>
      </div>
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
