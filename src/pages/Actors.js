import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/actors')
    .then(res => res.json())
    .then(data => setActors(data))
  },[])
  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
        {actors.map(element => {return (
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

export default Actors;
