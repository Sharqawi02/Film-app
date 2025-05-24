'use client';
import {FaTimes} from 'react-icons/fa';

export default function Movie({movie, index, onRemove }){
    return (
        <li className="list-group-item d-flex justify-content-between">
    <span>
        {movie.title} {'★'.repeat(movie.rating)}
    </span>
    <button
        onClick={() => onRemove(index)}
        className="btn btn-link text-danger p-0"
        aria-label="Ta bort film"
    >
        <FaTimes />
    </button>
    </li>


    )
}
