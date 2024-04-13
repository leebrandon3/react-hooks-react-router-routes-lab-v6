import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {

  const [directors, setDirectors] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/directors')
    .then(res => res.json())
    .then(data => setDirectors(data))
  },[])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {directors.map(element => {return (
        <article key={element.id}>
          <h2>{element.name}</h2>
          <ul>
            {element['movies'].map(movie => <li key={movie}>{movie}</li>)}
          </ul>
        </article>
        )})}
      </main>
    </>
  );
};

export default Directors;
