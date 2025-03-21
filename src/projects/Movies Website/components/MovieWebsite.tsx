import { useEffect, useState } from "react";
import "../moviestyle.css";
import Header from "./Header";
import MoviesList from "./MoviesList";
import { IMovie } from "../interfaces";
import { getMovies } from "../services/movieService";

const MovieWebsite = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetchMoves();
  }, []);

  const fetchMoves = async () => {
    const moviesData = await getMovies();
    setMovies(moviesData);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="">
      <Header onSearch={setSearchTerm} />
      <MoviesList movies={filteredMovies} />
    </div>
  );
};

export default MovieWebsite;
