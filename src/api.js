import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID FM6OORlPo0Q-EmjfgA9FLR6rjL6v4fZLJQGifsCIyS8",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
