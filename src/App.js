import {useState, useEffect} from 'react';
import Header from "./component/Header";
import SideBar from './component/SideBar';
import MainContent from './component/MainContent';


function App() {
  const [animeList,setAnimeList]=useState([]);
  const [topAnime,setTopAnime]=useState([]);
  const[search,setSearch]=useState("");

  const getTopAnime= async() =>{
    const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
    .then(res => res.json());
    
    setTopAnime(temp.top.slice(0,5));
  }

  const HandleSearch =e => {
    e.preventDefault();

    FetchAnime(search);
  }

  const FetchAnime=async(query)=>{
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
    .then(res=> res.json())

    setAnimeList(temp.results);
  }
  useEffect(()=>{
    getTopAnime();
    
  },[]);
  console.log(topAnime);
  //al usar useEffect
//El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por
// inicio hasta fin (fin no incluido). 
//El array original no se modificará.
  return (
    <div className="App">
      <Header />
      <div className="content-wrap">      
        <SideBar topAnime={topAnime} />
        <MainContent
          HandleSearch={HandleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}/> 
      </div>
    </div>
  );
}

export default App;
