

// const AddFavouriteMovie = () => {
//     console.log("todo");
//   };

//   export default AddFavouriteMovie;

  export async function addToFavorites(movie_id, isFavorite) {
    await fetch('/shows', {
        method: isFavorite ? 'PUT' : 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({id: movie_id})
    });
}