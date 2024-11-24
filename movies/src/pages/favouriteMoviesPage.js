import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage"
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";

const FavouriteMoviesPage = () => {
    const {favourites: movieIds, language} = useContext(MoviesContext)

    const favouriteMovieQueries = useQueries(
        movieIds.map((movieId) => {
            return {
                queryKey: ["movie", {id : movieId}, {language: language}],
                queryFn: getMovie
            }
        })
    )

    const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true)

    if (isLoading) {
        return <Spinner />
    }

    const movies = favouriteMovieQueries.map((q) => {
        q.data.genre_ids = q.data.genres.map(g => g.id)
        return q.data
    })

    const toDo = () => true;

    return (
        <PageTemplate 
            title="Favourite Movies"
            movies={movies}
            action={(movie) => {
                return (
                    <>
                        <RemoveFromFavourites movie={movie} />
                        <WriteReview movie={movie} />
                    </>
                )
            }}
        />
    )
}

export default FavouriteMoviesPage