import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Movie from "./components/Movie";

function App() {
  const [moviesData, setMoviesData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=7c2f9a9ceaed1741a8d40c10cbf12962&language=en-US&page=1"
    );
    const movies = await data.json();
    setMoviesData(movies.results);
    setFiltered(movies.results);
    console.log(movies.results);
  };

  return (
    <div className="App">
      <Filter
        popularMovies={moviesData}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <div className="popular-movies">
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
