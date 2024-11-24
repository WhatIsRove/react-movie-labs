import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage"
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromWatchlist from "../components/cardIcons/removeFromWatchlist";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const WatchlistMoviesPage = () => {
    const {mustWatch: movieIds, language } = useContext(MoviesContext)

    const watchlistMoviesQueries = useQueries(
        movieIds.map((movieId) => {
            return {
                queryKey: ["movie", {id : movieId}, {language: language}],
                queryFn: getMovie
            }
        })
    )

    const isLoading = watchlistMoviesQueries.find((m) => m.isLoading === true)

    if (isLoading) {
        return <Spinner />
    }

    const movies = watchlistMoviesQueries.map((q) => {
        q.data.genre_ids = q.data.genres.map(g => g.id)
        return q.data
    })

    return (
        <PageTemplate 
            title="Watchlist"
            movies={movies}
            action={(movie) => {
                return (
                    <>
                        <AddToFavouritesIcon movie={movie} />
                        <RemoveFromWatchlist movie={movie} />
                    </>
                )
            }}
        />
    )
}

export default WatchlistMoviesPage