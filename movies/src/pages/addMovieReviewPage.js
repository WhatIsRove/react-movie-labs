import React, { useContext } from "react";
import PageTemplate from "../components/templateMoviePage";
import ReviewForm from "../components/reviewForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { MoviesContext } from "../contexts/moviesContext";

const WriteReviewPage = (props) => {
  const location = useLocation();
  const movieId = location.state.movieId;
  const {language} = useContext(MoviesContext);
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: movieId }, {language: language}],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate movie={movie}>
      <ReviewForm movie={movie} />
    </PageTemplate>
  );
};

export default WriteReviewPage;