const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "8f1854fd15dd3a879136a1cb5de87d51",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
