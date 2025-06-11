// src/App.jsx
import { useState } from "react";
import "./footer.css";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

function Hero() {
  const [movie, setMovie] = useState(null);
  const [query, setQuery] = useState("");

  const fetchMovie = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?t=${query}&apikey=${API_KEY}`
    );

    const data = await res.json();
    if (data.Response === "True") setMovie(data);
    else alert("Movie not found!");
  };

  return (
    <div className='text-white p-5'>
      <div className='max-w-xl mx-auto bg-black bg-opacity-70 p-6 rounded-lg shadow-lg mt-10'>
        <h1 className='text-3xl font-bold mb-4 text-center'>
          🎬 Movie Rating App
        </h1>
        <input
          type='text'
          placeholder='Enter movie name...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 border'
        />
        <button
          onClick={fetchMovie}
          className='mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded'
        >
          Search
        </button>

        {movie && (
          <div className='mt-6'>
            <h2 className='text-2xl font-bold'>
              {movie.Title} ({movie.Year})
            </h2>
            <p className='mt-2'>⭐ IMDb Rating: {movie.imdbRating}</p>
            <p className='mt-2 italic'>{movie.Plot}</p>
            <img
              src={movie.Poster}
              alt={movie.Title}
              className='mt-4 w-48 rounded'
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
