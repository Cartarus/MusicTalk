"use client";
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBarSpotify = ({ onSearch }:SearchBarProps) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        if (newQuery) {
          onSearch(newQuery); // Llamar a la búsqueda mientras se escribe
        }else {
            onSearch(''); // Opcional: Hacer búsqueda vacía cuando se borra el texto
        }
      };

    return (
    <form  className=' relative' >
        <input className='bg-gray-600 border border-gray-300 rounded-lg outline-none focus:border-blue-400  w-full p-2' placeholder='Buscar canciones, álbumes o artistas...'
        value={query}
        onChange={handleInputChange}/>
        <button className='absolute right-1  top-1/2 transform -translate-y-1/2  bg-blue-500 p-2 rounded-lg  ' type='button'>
        {/* absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 p-2 rounded-lg */}
        <FaSearch className='text-white' />
      </button>
    </form>
    );
};

export default SearchBarSpotify;
