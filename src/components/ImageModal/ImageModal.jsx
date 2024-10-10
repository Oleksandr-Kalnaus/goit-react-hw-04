import Modal from "react-modal";
import { useEffect } from "react";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const ImageModal = ({
  isOpen,
  onClose,
  imageUrl,
  altText,
  description,
  likes,
  dateOfCreate,
}) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      onClick={handleOverlayClick}
    >
      <div className={css.content}>
        <img src={imageUrl} alt={altText} className={css.image} />
        <div className={css.imageDetails}>
          <p className={css.imageNamed}>Description: {description}</p>
          <p className={css.imageLikes}>Likes: {likes}</p>
          <p className={css.imageDateOfCreate}>When: {dateOfCreate}</p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
