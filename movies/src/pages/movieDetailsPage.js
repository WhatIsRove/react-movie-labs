import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage"
import useMovie from "../hooks/useMovie"

const MoviePage = (props) => {

    const { id } = useParams();
    const [movie] = useMovie(id);

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