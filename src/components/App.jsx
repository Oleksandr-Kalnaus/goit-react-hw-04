import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Loader from "./Loader/Loader";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import ImageModal from "./ImageModal/ImageModal";

import axios from "axios";
import "modern-normalize";
import { ErrorMessage } from "formik";

export default function App() {
  return (
    <>
      <div>
        <SearchBar />

        <ImageGallery />

        <Loader />

        <LoadMoreBtn />

        <ErrorMessage />

        <ImageModal />
      </div>
    </>
  );
}
