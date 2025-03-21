import { ApiResponse, IMovie } from "../interfaces";

const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";

export const getMovies = async (): Promise<IMovie[]> => {
    const res = await fetch(API_URL);
    const data: ApiResponse = await res.json();
    return data.results
  };