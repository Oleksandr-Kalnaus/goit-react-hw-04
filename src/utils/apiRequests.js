import axios from "axios";
import { formatDateToNow } from "../utils/formatDateToNow";

const API_KEY = "5lHJ2OqWLWMw0_gWg9zCraP9kyB_obaX4JZ46iTNsW8";

const ApiRequests = async (query, page) => {
  const perPage = 12;

  try {
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        query,
        client_id: API_KEY,
        per_page: perPage,
        page,
        orientation: "landscape",
      },
    });

    const images = response.data.results.map((image) => ({
      id: image.id,
      description: image.alt_description || "No description",
      smallImage: image.urls.small,
      regularImage: image.urls.regular,
      likes: image.likes,
      dateOfCreate: formatDateToNow(image.created_at),
    }));

    return { images };
  } catch (error) {
    throw error;
  }
};

export default ApiRequests;
