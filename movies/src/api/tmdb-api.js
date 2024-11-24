export const getMovies = (args) => {
    const [, languagePart] = args.queryKey
    const {language} = languagePart;
    return fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=${language}&include_adult=false&page=1`
    )
        .then((response) => {
            if (!response.ok) {
                return response.json().then((error) => {
                    throw new Error(error.status_message || "Something went wrong");
                })
            }
            return response.json();
        })
        .catch((error) => {
            throw error
        })
};

export const getUpcomingMovies = (args) => {
    const [, languagePart] = args.queryKey
    const {language} = languagePart;
    return fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=${language}&page=1`
    )
        .then((response) => {
            if (!response.ok) {
                return response.json().then((error) => {
                    throw new Error(error.status_message || "Something went wrong");
                })
            }
            return response.json();
        })
        .catch((error) => {
            throw error
        })
};

export const getNowPlayingMovies = (args) => {
    const [, languagePart] = args.queryKey
    const {language} = languagePart;
    return fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=${language}&page=1`
    )
        .then((response) => {
            if (!response.ok) {
                return response.json().then((error) => {
                    throw new Error(error.status_message || "Something went wrong");
                })
            }
            return response.json();
        })
        .catch((error) => {
            throw error
        })
};

export const getTopRatedMovies = (args) => {
    const [, languagePart] = args.queryKey
    const {language} = languagePart;
    return fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=${language}&page=1`
    )
        .then((response) => {
            if (!response.ok) {
                return response.json().then((error) => {
                    throw new Error(error.status_message || "Something went wrong");
                })
            }
            return response.json();
        })
        .catch((error) => {
            throw error
        })
};

export const getMovie = (args) => {
    const [, idPart, languagePart] = args.queryKey;
    const { id } = idPart;
    const {language} = languagePart;
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=${language}`
    ).then((response) => {
        if (!response.ok) {
            return response.json().then((error) => {
                throw new Error(error.status_message || "Something went wrong");
            });
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getMovieCredits = (args) => {
    const [, idPart, languagePart] = args.queryKey;
    const { id } = idPart;
    const {language} = languagePart;
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=${language}`
    ).then((response) => {
        if (!response.ok) {
            return response.json().then((error) => {
                throw new Error(error.status_message || "Something went wrong");
            });
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getMovieRecommends = (args) => {
    const [, idPart, languagePart] = args.queryKey;
    const { id } = idPart;
    const {language} = languagePart;
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_KEY}&language=${language}`
    ).then((response) => {
        if (!response.ok) {
            return response.json().then((error) => {
                throw new Error(error.status_message || "Something went wrong");
            });
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getGenres = (args) => {
    const [, languagePart] = args.queryKey
    const {language} = languagePart;
    return fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=" + language
    )
        .then((response) => {
            if (!response.ok) {
                return response.json().then((error) => {
                    throw new Error(error.status_message || "Something went wrong")
                })
            }
            return response.json();
        })
        .catch((error) => {
            throw error
        })
};

export const getMovieImages = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
        if (!response.ok) {
            return response.json().then((error) => {
                throw new Error(error.status_message || "Something went wrong");
            });
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};

export const getMovieReviews = ({ queryKey }) => {
    const [, idPart, languagePart] = queryKey;
    const { id } = idPart;
    const {language} = languagePart;
    return fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}&language=${language}`
    ).then((response) => {
        if (!response.ok) {
            return response.json().then((error) => {
                throw new Error(error.status_message || "Something went wrong");
            });
        }
        return response.json();
    })
        .catch((error) => {
            throw error
        });
};