import React from "react";

interface MovieListProps {
    movies: Array<{ id: number, title: string; poster_path: string }>;
    onGenerateRecommendations: (movieId: number) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onGenerateRecommendations }) => {
    return (
        <div>
            <h2>Movie Search List</h2>
            <ul>
                {
                    movies.map((movie) => (
                        <li key={movie.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} // Construct the image URL
                                alt={`${movie.title} Poster`}
                                width={100}
                            />
                            {movie.title}
                            <button onClick={() => onGenerateRecommendations(movie.id)}>Generate Recommendations</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MovieList;