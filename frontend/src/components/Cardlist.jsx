import React, { useEffect, useRef, useState } from "react";
import Card from "../assets/Card.jpg";
import { Link } from "react-router-dom";

const Cardlist = ({ title, category }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NThiNWYyYjNlZTUxODEwNzk4YTc5YTFiMTE0ZTdhNiIsIm5iZiI6MTc4NzI5MzI1NS4wNDQ5OTk4LCJzdWIiOiI2YTg3ZWU0NzkwMThiMzRjOTk1Y2Q5YjciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iJDOSoQfG0_v7WT_5n3rqRaEK_EverRmqiXij-UtW8o",
    },
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      options
    )
      .then((res) => res.json())
      .then((res) => {
        console.log("Movie List:", res);
        setData(res.results || []);
      })
      .catch((err) => console.error(err));
  }, [category]);

  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const distance = (x - startX.current) * 2;

    sliderRef.current.scrollLeft = scrollLeft.current - distance;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <section className="w-full bg-gray-950 px-0 py-8 sm:px-6 md:px-10">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          {title}
        </h2>

        <p className="mb-6 mt-1 text-sm text-gray-400">
          Check out the latest upcoming movies
        </p>

        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          className={`flex gap-4 overflow-x-auto scrollbar-hide ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            scrollbarWidth: "none",
            userSelect: "none",
          }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="w-[250px] flex-shrink-0 overflow-hidden sm:w-[280px] md:w-[300px]"
            >
              <Link
                to={`/movie/${item.id}`}
                onClick={() =>
                  console.log("Clicked Movie ID:", item.id)
                }
              >
                <img
                  src={
                    item.backdrop_path
                      ? `https://image.tmdb.org/t/p/w500${item.backdrop_path}`
                      : Card
                  }
                  alt={item.title}
                  draggable="false"
                  className="h-56 w-full object-cover sm:h-60"
                />

                <div className="p-4 sm:p-5">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cardlist;