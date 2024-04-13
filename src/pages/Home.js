import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import NavBar from "../components/NavBar";

function Home() {
  const [movieList, setMovieList] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/movies')
    .then(res => res.json())
    .then(data => setMovieList(data))
  },[])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        {movieList.map(element => <MovieCard movie={element} key={element.id}/>)}
      </main>
    </>
  );
};

export default Home;
