// import React, { useState, useEffect } from "react";
// import Axios from "axios";
// //import Moviedetails from './Moviedetails'

// const Watchlist = () => {
//   const [isloading, setIsloading] = useState(true);
//   const [towatch, setTowatch] = useState();
//   const [moviedetails, setMoviedetails] = useState();

//   useEffect(() => {
//     const fetchitems = async () => {
//       const movies = JSON.parse(localStorage.getItem("favourites"));
//       setTowatch(movies);
//       const result = await Axios(
//         `https://api.themoviedb.org/3/movie/${movies[0]}?api_key=(8f1854fd15dd3a879136a1cb5de87d51)`
//       );
//       setMoviedetails(result.data);
//       setIsloading(false);
//     };
//     fetchitems();
//   }, [isloading]);

//   return <div></div>;
// };

// export default Watchlist;
