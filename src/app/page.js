"use client"
import { useState, useEffect } from 'react';
import { Header, Sidebar, Main } from '@/components';

export default function Home() {
  const [filterStatus, setFilterStatus] = useState({
    alive: false,
    dead: false,
    unknown: false,
    location: '',
  });

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://rickandmortyapi.com/api/character');
      const data = await res.json();
      const randomCharacters = data.results.sort(() => 0.5 - Math.random()).slice(0, 10);
      setCharacters(randomCharacters);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className='grid grid-cols-8 gap-x-2.5 w-full px-16 '>
        <div className='col-start-1 col-end-3 mt-16 fixed w-1/4 '>
          <Sidebar setFilterStatus={setFilterStatus} />
        </div>
        <div className='col-start-3 col-end-12 mt-16 ml-16 mb-20 '>
          <Main characters={characters} filterStatus={filterStatus} />
        </div>
      </div>
    </div>
  );
}
