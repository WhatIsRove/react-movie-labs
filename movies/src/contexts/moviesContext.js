import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
    const [favourites, setFavourites] = useState ([])
    const [myReviews, setMyReviews] = useState ([])
    const [mustWatch, setMustWatch] = useState ([])
    const [language, setLanguage] = useState ("en-US")

    const addToFavourites = (movie) => {
        let newFavourites = [];
        if (!favourites.includes(movie.id)){
            newFavourites = [...favourites, movie.id];
        } else {
            newFavourites = [...favourites];
        }
        setFavourites(newFavourites);
    };

    const removeFromFavourites = (movie) => {
        setFavourites( favourites.filter(
            (mId) => mId !== movie.id
        ) )
    }

    const addReview = (movie, review) => {
        setMyReviews( {...myReviews, [movie.id]: review } )
    };

    const addToPlaylist = (movie) => {
        let newMustWatch = [];
        if (!mustWatch.includes(movie.id)) {
            newMustWatch = [...mustWatch, movie.id];
        } else {
            newMustWatch = [...mustWatch];
        }
        setMustWatch(newMustWatch);
    };

    const removeFromWatchlist = (movie) => {
        setMustWatch( mustWatch.filter(
            (mId) => mId !== movie.id
        ) )
    }

    return (
        <MoviesContext.Provider
            value={{
                favourites,
                mustWatch,
                language,
                addToFavourites,
                removeFromFavourites,
                addReview,
                addToPlaylist,
                removeFromWatchlist,
                setLanguage,
            }}
        >
            {props.children}
        </MoviesContext.Provider>
    )
}

export default MoviesContextProvider;