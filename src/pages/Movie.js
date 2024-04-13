import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [currentMovie, setCurrentMovie] = useState({
    id: '',
    title: '',
    time: 0,
    genres: []
  })
  const params = useParams()
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${params.id}`)
    .then(res => res.json())
    .then(data => setCurrentMovie(data))
  },[])

  function Genre({genre}){
    return <span>{genre}</span>
  }

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{currentMovie.title}</h1>
        <p>{currentMovie.time}</p>
        {currentMovie['genres'].map(element => <Genre key={element} genre={element}/>)}
      </main>
    </>
  );
};

export default Movie;
