import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage"
import MovieCredits from "../components/movieCredits";
import { getMovieCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'

const MovieCreditsPage = (props) => {

    const { id } = useParams();
    let location = useLocation();
    const {movie} = location.state;
    const { data: credits, error, isLoading, isError } = useQuery(
        ["credits", { id: id }],
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
                <h2>Waiting for movie details</h2>
            )}
        </>
    );
};

export default MovieCreditsPage;