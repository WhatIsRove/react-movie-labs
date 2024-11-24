import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage"
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { MoviesContext } from "../contexts/moviesContext";

const MoviePage = (props) => {
    const {language} = useContext(MoviesContext)
    const { id } = useParams();
    const { data: movie, error, isLoading, isError } = useQuery(
        ["movie", { id: id }, { language: language }],
        getMovie
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }
    
    return (
        <>
            {movie ? (
                <>
                    <PageTemplate movie={movie}>
                        <MovieDetails movie={movie} />
                    </PageTemplate>
                </>
            ) : (
                <h2>Waiting for movie details</h2>
            )}
        </>
    );
};

export default MoviePage;