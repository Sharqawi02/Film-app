'use client';
import {useState} from 'react';
import MovieList from './components/MovieList';

export default function Home() {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')
  const [rating, setRating] = useState(0)


  const handleSubmit = (e) => {
  e.preventDefault();
  if (!title === '' || rating === 0) {
    alert('Ange titel och betyg');
    return;
  }
  const newMovie = {
    title: title,
    rating: rating
  }
  setMovies([...movies, newMovie])
  setTitle('')
  setRating(0)
  };;
  const handleDelete = (index) => {setMovies(movies.filter((_, i) => i !== index))}
  const sortAlpha = () => setMovies([...movies].sort((a,b) => a.title.localeCompare(b.title)));
  const sortRating = () => setMovies([...movies].sort((a,b) => b.rating - a.rating));

  return (
      <>
      <h1>Min filmlista</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label className="form-label">Titel:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label className="form-label">Betyg:</label>
          <select
            className="form-select"
            value={rating}
            onChange={e => setRating(e.target.value)}
          >
            <option value="0">Välj...</option>
            {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>
        <button type="submit" className="btn btn-success">Spara film</button>
      </form>

      <div className="mb-3">
        <button onClick={sortAlpha}   className="btn btn-secondary btn-sm me-2">A–Ö</button>
        <button onClick={sortRating} className="btn btn-secondary btn-sm">Efter betyg</button>
      </div>

      <MovieList movies={movies} onRemove={handleDelete} />
    </>
  );


}

