import { IMovie } from "../interfaces";

const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const MoviesList = ({ movies }: { movies: IMovie[] }) => {
  return (
    <div
      className="container grid sm:grid-cols-2 md:grid-cols-2
      lg:grid-cols-3 gap-3 p-[20px] xl:grid-cols-4"
    >
      {movies.map(
        ({ id, title, poster_path, overview, vote_average }: IMovie) => (
          <div
            key={id}
            className="group z-50 relative bg-[#373b69] rounded-[5px]
              overflow-hidden"
          >
            <img
              className="w-full max-w-full h-[400px] object-cover
                rounded-t-[5px]"
              src={IMG_PATH + poster_path}
              alt={title}
            />

            <div
              className="p-[10px] flex items-center w-full 
             gap-[10px] justify-between"
            >
              <h2 className="text-[18px] font-bold">{title}</h2>
              <p
                className={`text-sm font-semibold bg-[#22254b]
                    p-[5px] rounded-[5px] ${
                      vote_average > 8
                        ? "text-green-400"
                        : vote_average > 6
                        ? "text-orange-400"
                        : "text-red-400"
                    }`}
              >
                {vote_average.toFixed(1)}
              </p>
            </div>

            <div
              className={`overview absolute bottom-0 left-0 w-full 
                 p-[10px] text-black bg-white 
       transform translate-y-full transition-transform duration-300 ${
         overview && "group-hover:translate-y-0"
       }`}
            >
              <p className="mb-[10px] font-bold text-[22px]">Overview</p>
              <p className="text-[16px] font-semibold">{overview}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default MoviesList;
