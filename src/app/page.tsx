import { Person } from '@/components/Person';
import { peopleList } from '../data/peopleList'

const Page = () => {

  const chemists = peopleList.filter(person => person.profession === 'chemist');

  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo</h1>
      <h3>Algum outro texto</h3>
      {chemists.length > 0 &&
        <>
          <h3>Lista de químicos:</h3>
          {chemists.map(person => 
          <li key={person.id}>{person.name}</li>
          )}
        </>
      }
    </div>

  )
};

export default Page;
