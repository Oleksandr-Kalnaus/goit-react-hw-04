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

export default ImageGallery;
