import React, { useEffect, useState } from "react";
import Herobg from "../assets/hero.jpg.jpg";
import { Bookmark, Play } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [movie, setMovie] = useState(null);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NThiNWYyYjNlZTUxODEwNzk4YTc5YTFiMTE0ZTdhNiIsIm5iZiI6MTc4NzI5MzI1NS4wNDQ5OTk4LCJzdWIiOiI2YTg3ZWU0NzkwMThiMzRjOTk1Y2Q5YjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iJDOSoQfG0_v7WT_5n3rqRaEK_EverRmqiXij-UtW8o",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.results && res.results.length > 0) {
          const randomIndex = Math.floor(Math.random() * res.results.length);
          setMovie(res.results[randomIndex]);
        }
      })
      .catch((err) => console.error(err));
  }, []);
  if(!movie){
    return <p>loading..</p>
  }

  return (
    <div className="relative w-full overflow-hidden rounded-2xl text-white">
      {/* Hero Image */}
      {movie && (
        <img
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
          alt={movie.title}
          className="h-[420px] w-full object-cover object-[center_15%] sm:h-[480px] lg:h-[520px]"
        />
      )}

      {/* Dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent"></div>

      {/* Buttons */}
      <div className="absolute bottom-8 left-6 flex gap-3 sm:left-10">
        <button className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-100">
          <Bookmark size={17} strokeWidth={2} />
          Save for later
        </button>
        <Link to={`/movie/${movie.id}`}>
        <button className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-red-700">
          <Play size={17} strokeWidth={2} fill="currentColor" />
          Watch Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;