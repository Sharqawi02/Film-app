'use client';
import {FaTimes} from 'react-icons/fa';
import Movie  from '../Movies';

export default function MovieList({ movies, onRemove }) {
if (movies.length === 0) return <p>Inga filmer tillagda än.</p>;
return (
        <ul className="list-group">
    {movies.map((m, i) => (
        <Movie key={i} movie={m} index={i} onRemove={onRemove} />
    ))}
    </ul>
    // <ul className="list-group">
    // {movies.map((m, i) => (
    //     <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
    //     <span>{m.title} {'★'.repeat(m.rating)}</span>
    //     <button
    //         onClick={() => onRemove(i)}
    //         className="btn btn-link text-danger p-0"
    //         aria-label="Ta bort film"
    //     >
    //     <FaTimes className="text-danger" />
    //     </button>
    //     </li>
    // ))}
    // </ul>
);
}
