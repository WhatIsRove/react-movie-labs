import React, { useState, useEffect, useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getMovies } from "../api/tmdb-api"
import { useQuery } from "react-query";
import Spinner from "../components/spinner"
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import { Pagination } from "@mui/material";
import { MoviesContext } from "../contexts/moviesContext";

const HomePage = (props) => {
    const {language} = useContext(MoviesContext)
    const { data, error, isLoading, isError } = useQuery(['discover', {language: language}], getMovies);

    if (isLoading) {
        return <Spinner />
    }

    if (isError) {
        return <h1>{error.message}</h1>
    }

    const movies = data.results;

    const favourites = movies.filter(m => m.favourite)
    localStorage.setItem('favourites', JSON.stringify(favourites))
    
    const addToFavourites = (movieId) => true;

    return (
        <PageTemplate 
            title='Discover Movies'
            movies={movies}
            action={(movie) => {
                return <AddToFavouritesIcon movie={movie} />
            }}
        />
        
    );
};
export default HomePage;