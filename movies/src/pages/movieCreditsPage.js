import React, { useState, useEffect, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage"
import MovieCredits from "../components/movieCredits";
import { getMovieCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { MoviesContext } from "../contexts/moviesContext";

const MovieCreditsPage = (props) => {

    const { id } = useParams();
    let location = useLocation();
    const {movie} = location.state;
    const {language} = useContext(MoviesContext)
    const { data: credits, error, isLoading, isError } = useQuery(
        ["credits", { id: id }, {language: language}],
        getMovieCredits
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    
    return (
        <>
            {credits ? (
                <>
                    <PageTemplate movie={movie}>
                        <MovieCredits credits={credits} />
                    </PageTemplate>
                </>
            ) : (
                <h2>Waiting for movie credits</h2>
            )}
        </>
    );
};

export default MovieCreditsPage;