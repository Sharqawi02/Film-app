'use client';
import Movie from '../Movies';

export default function MovieList({ movies, onRemove }) {
if (movies.length === 0) return <p>Inga filmer tillagda än.</p>;
return (
        <ul className="list-group">
    {movies.map((m, i) => (
        <Movie key={i} movie={m} index={i} onRemove={onRemove} />
    ))}
    </ul>
);
}
