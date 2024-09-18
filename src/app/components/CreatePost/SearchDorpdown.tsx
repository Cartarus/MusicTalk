"use client";
import React, { useState } from 'react'
import SearchBarSpotify from './SearchBarSpotify';
import { ResponseSpotyfySearch } from '@/app/Types/SearchSpotyfy';
import axios from 'axios';
import { RowResultSearchDropdown } from './RowResultSearchDropdown';

const initialStateResults = {albums: {
    href: '',
    items: [],
    limit: 0,
    next: '',
    offset: 0,
    previous: null,
    total: 0
  },
  tracks: {
    href: '',
    items: [],
    limit: 0,
    next: '',
    offset: 0,
    previous: null,
    total: 0
  }}

export const SearchDorpdown = () => {

    const [results, setResults] = useState<ResponseSpotyfySearch>(initialStateResults);

    const handleSearch = async (query:string) => {
        try {
            console.log(query)
            if (  query.length <= 2) {
                return setResults(initialStateResults)
            }
            const response = await axios.get('/api/spotify/search', {
                params: { query }
            });
            setResults(response.data);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };
    return (
        <div className="container mx-auto px-2 relative">
            <div className="w-3/5">
                <SearchBarSpotify onSearch={handleSearch} />
            </div>
            <div className={`${ results === initialStateResults && 'hidden'} absolute left-2  bg-neutral-900 rounded-md p-2 w-3/5`}>
                {results.albums?.items.map(album => (
                    
                    <RowResultSearchDropdown item={album} key={album.id}/>
                ))}
                {results.tracks?.items.map(album => (
                    <RowResultSearchDropdown item={album} key={album.id}/>
                ))}
            </div>
        </div>
      );
}
