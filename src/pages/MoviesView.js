import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";
import altImg from "../assets/altImg.png";
import Header from "../components/Header";

export default function MoviesView() {
  const [movies, setMovies] = useState([]);

  const link = "https://moviesdatabase.p.rapidapi.com/titles";
  const options = {
    method: "GET",
    headers: {
      "content-type": "application/octet-stream",
      "X-RapidAPI-Key": "ecb31fc255msh38cd2e86e108507p1faa6ejsn3dba59adac7f",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const getMovies = async () => {
    try {
      const res = await fetch(link, options);
      const resJson = await res.json();
      console.log(resJson);
      setMovies(resJson);
    } catch (error) {
      console.log("error:", error);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className="grid grid-cols-12 gap-x-5 gap-y-5 p-2">
        {movies.results?.map((movie, i) => {
          return (
            <div
              key={movie.id}
              className="xl:col-span-2 md:col-span-3 sm:col-span-4 xs:col-span-6 2xs:col-span-12 w-full overflow-hidden rounded-lg"
              style={styles.container}
            >
              <MovieCard
                image={
                  movie.primaryImage?.url ? movie.primaryImage.url : altImg
                }
                title={movie.titleText?.text}
                data={movie}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

const styles = {
  container: {
    display: "flex",
  },
};
