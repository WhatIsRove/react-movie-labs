import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import PageTemplate from "../components/templateMoviePage"
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { getMovieRecommends } from "../api/tmdb-api";
import MovieRecommends from "../components/movieRecommendations";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";

const MovieRecommendsPage = (props) => {

    const { id } = useParams();
    let location = useLocation();
    const { movie } = location.state;
    const { data: recommends, error, isLoading, isError } = useQuery(
        ["recommends", { id: id }],
        getMovieRecommends
    );

    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }


    return (
        <>
            {recommends ? (
                <>
                    <PageTemplate movie={movie}>
                        <MovieRecommends recommends={recommends} action={(movie) => {
                            return <AddToFavouritesIcon movie={movie} />
                        }} />
                    </PageTemplate>
                </>
            ) : (
                <h2>Waiting for movie recommends</h2>
            )}
        </>
    );
};

export default MovieRecommendsPage;