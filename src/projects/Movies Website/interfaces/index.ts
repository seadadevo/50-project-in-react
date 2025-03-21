export interface IMovie {
    id: number;
    poster_path: string;
    title: string;
    vote_average: number;
    overview: string;
  }
  
 export  interface ApiResponse {
    results: IMovie[];
  }