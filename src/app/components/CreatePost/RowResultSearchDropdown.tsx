import { AlbumElement, Artist, TracksItem } from '@/app/Types/SearchSpotyfy';
import Image from 'next/image'
import React from 'react'

interface Props {
    item: AlbumElement | TracksItem;
  }


const getArtistNames = (artist:Artist[]) => {
  let result = ''
  for (let index = 0; index < artist.length; index++) {
    if (index <= 3) {
      result = result  + artist[index].name
      if (index< artist.length-1) {
        result = result + ', '
      }
    }
  }
  if (artist.length > 3) {
    result = result + '...'
  }
  return result
}

export const RowResultSearchDropdown = ({item}:Props) => {
  const imageUrl = 'album_type' in item ? item.images[0].url : item.album.images[0].url;
  
  return (
    <div key={item.id} className='p-2 hover:bg-neutral-700 flex gap-2'>
        <Image src={imageUrl} alt='' width={50} height={50}/>
        <div>
          <p>{item.name}</p>
          <p className='text-xs'>{getArtistNames(item.artists)}</p>
        </div>

    </div>
  )
}
