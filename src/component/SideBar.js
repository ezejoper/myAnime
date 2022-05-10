//barra Lateral
import React from 'react';

function SideBar( { topAnime } ) {
  return (
    <aside>
        <nav>
        <h3> Top Anime </h3>
        {topAnime.map(anime=> (
          <a href={anime.url} 
          target="_blank" 
          rel='noreffer'
          key= {anime.mal_id}>
          { anime.title }
          </a>

        ))}
        </nav>
    </aside>
  )
}

export default SideBar