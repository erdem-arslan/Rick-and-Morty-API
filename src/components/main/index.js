import React from 'react';
import { Card } from '@/components';

export default function Main({ characters, filterStatus }) {
  const filteredCharacters = characters.filter(character => {
    const matchesStatus = (
      (filterStatus.alive && character.status.toLowerCase() === 'alive') ||
      (filterStatus.dead && character.status.toLowerCase() === 'dead') ||
      (filterStatus.unknown && character.status.toLowerCase() === 'unknown') ||
      (!filterStatus.alive && !filterStatus.dead && !filterStatus.unknown)
    );

    const matchesLocation = filterStatus.location ? character.location.name.toLowerCase().includes(filterStatus.location.toLowerCase()) : true;

    return matchesStatus && matchesLocation;
  });

  return (
    <div className='pt-16'>
      <h1 className='mb-8 text-3xl font-semibold'>Rick and Morty Characters</h1>
      <div className='grid grid-cols-2 grid-rows-2 gap-x-2.5 gap-y-2'>
        {filteredCharacters.map((character) => (
          <div key={character.id}>
            <Card
              image={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
              location={character.location.name}
              origin={character.origin.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
