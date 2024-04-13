import {Link} from 'react-router-dom';

function MovieCard({movie}) {
  return (
    <article>
        {/* What should go here? */}
        <Link to={`/movie/${movie.id}`}><h2>{movie.title}</h2></Link>
    </article>
  );
};

export default MovieCard;