import PropTypes from "prop-types";
import styles from "./ImageCard.module.css";

const ImageCard = () => {
  return <div></div>;
};

ImageCard.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ImageCard;
