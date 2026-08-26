import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Play } from "lucide-react";

const Moviepage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [trailerkey, setTrailerkey] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NThiNWYyYjNlZTUxODEwNzk4YTc5YTFiMTE0ZTdhNiIsIm5iZiI6MTc4NzI5MzI1NS4wNDQ5OTk4LCJzdWIiOiI2YTg3ZWU0NzkwMThiMzRjOTk1Y2Q5YjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iJDOSoQfG0_v7WT_5n3rqRaEK_EverRmqiXij-UtW8o",
    },
  };

  useEffect(() => {
    setMovie(null);

    console.log("Movie ID:", id);

    fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    )
      .then(async (res) => {
        const data = await res.json();

        console.log("STATUS:", res.status);
        console.log("MOVIE ID:", id);
        console.log("RESPONSE:", data);

        return data;
      })
      .then((res) => {
        setMovie(res);
      })
      .catch((err) => console.error(err));

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => setRecommendations(res.results || []))
      .catch((err) => console.error(err));

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        const trailer = res.results?.find(
          (vid) => vid.site === "YouTube" && vid.type === "Trailer"
        );

        setTrailerkey(trailer?.key || null);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) {
    return (
      <div className="flex h-screen items-center justify-center bg-black">
        <span className="text-xl text-red-500">Loading..</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#151515] text-white">

      {/* Hero Section */}
      <div className="relative h-[70vh] w-full overflow-hidden">

        {/* Background Image */}
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt={movie.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-black/40 to-transparent" />

        {/* Movie Details */}
        <div className="absolute bottom-10 left-0 z-10 w-full px-6 md:px-10">

          <div className="mx-auto flex max-w-7xl items-end gap-6">

            {/* Poster */}
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="hidden h-30 w-28 object-cover shadow-lg sm:block md:h-40 md:w-40"
            />

            {/* Details */}
            <div className="pb-2">

              {/* Title */}
              <h1 className="mb-3 text-3xl font-bold md:text-5xl">
                {movie.title}
              </h1>

              {/* Rating / Date / Runtime */}
              <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-gray-200">

                <span>
                  ⭐ {movie.vote_average?.toFixed(1)}
                </span>

                <span>
                  {movie.release_date}
                </span>

                <span>
                  {movie.runtime} min
                </span>

              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-2">

                {movie.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="text-sm text-gray-300"
                  >
                    {genre.name}
                  </span>
                ))}

              </div>

              <p className="max-w-2xl text-gray-200">
                {movie.overview}
              </p>

              {trailerkey && (
                <a
                  href={`https://www.youtube.com/watch?v=${trailerkey}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="mt-4 flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-red-700">
                    <Play
                      size={17}
                      strokeWidth={2}
                      fill="currentColor"
                    />
                    Watch Now
                  </button>
                </a>
              )}

            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="p-8">

        <h2 className="mb-4 text-2xl font-semibold">
          Details
        </h2>

        <div className="rounded-lg bg-[#232323] p-6 shadow-lg">

          <div className="flex flex-col gap-8 md:flex-row">

            {/* Left Column */}
            <div className="flex-1">

              <ul className="space-y-3 text-gray-300">

                <li>
                  <span className="font-semibold text-white">
                    Status:{" "}
                  </span>

                  <span>
                    {movie.status}
                  </span>
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Release Date:{" "}
                  </span>

                  <span>
                    {movie.release_date}
                  </span>
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Original Language:{" "}
                  </span>

                  <span>
                    {movie.original_language?.toUpperCase()}
                  </span>
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Budget:{" "}
                  </span>

                  <span>
                    ${movie.budget?.toLocaleString()}
                  </span>
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Revenue:{" "}
                  </span>

                  <span>
                    ${movie.revenue?.toLocaleString()}
                  </span>
                </li>

              </ul>

            </div>

            {/* Right Column */}
            <div className="flex-1">

              <ul className="space-y-3 text-gray-300">

                <li>
                  <span className="font-semibold text-white">
                    Production Companies:{" "}
                  </span>

                  <span>
                    {movie.production_companies
                      ?.map((company) => company.name)
                      .join(", ")}
                  </span>
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Production Countries:{" "}
                  </span>

                  <span>
                    {movie.production_countries
                      ?.map((country) => country.name)
                      .join(", ")}
                  </span>
                </li>

                <li>
                  <span className="font-semibold text-white">
                    Spoken Languages:{" "}
                  </span>

                  <span>
                    {movie.spoken_languages
                      ?.map((language) => language.english_name)
                      .join(", ")}
                  </span>
                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

      {/* Recommendations */}
      {recommendations.length > 0 && (
        <div className="px-8 pb-10">

          <h2 className="mb-6 text-2xl font-semibold">
            You might also like
          </h2>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

            {recommendations.slice(0, 10).map((rec) => (
              <Link
                key={rec.id}
                to={`/movie/${rec.id}`}
                className="group overflow-hidden rounded-xl bg-[#232323] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >

                <div className="overflow-hidden">

                  <img
                    src={
                      rec.poster_path
                        ? `https://image.tmdb.org/t/p/w500${rec.poster_path}`
                        : "https://via.placeholder.com/500x750?text=No+Image"
                    }
                    alt={rec.title}
                    className="h-[280px] w-full object-cover transition duration-300 group-hover:scale-105"
                  />

                </div>

                <div className="p-4">

                  <h3 className="truncate text-base font-semibold text-white">
                    {rec.title}
                  </h3>

                  <div className="mt-2 flex items-center justify-between text-sm text-gray-400">

                    <span>
                      {rec.release_date?.slice(0, 4)}
                    </span>

                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>
      )}

    </div>
  );
};

export default Moviepage;