import { collection, getDocs} from 'firebase/firestore';
import { db } from '../firebaseConfig';
import SkillCard from './SkillCard';

// Define interface
interface Skill {
  id: string;
  name: string;
  description: string;
};

const fetchData = async () => {
  try {
    const docRef = collection(db, 'skills');
    const docs = await getDocs(docRef);
    
    const skills: Skill[]  = [];

    docs.forEach((doc) => {
      const data =  doc.data()
      const skill: Skill = {
        name: data.name,
        description: data.description,
        id: doc.id,
      }
      skills.push(skill)
    });

    if (skills.length) {
      return skills;
    } else {
      console.log('No such document!');
      return null;
    };
  } catch (error) {
    throw Error;
  };
};

const SkillsCategories = async () => {
  const data = await fetchData();

  return (
    <div className='mb-24'>
      <div className='flex flex-col gap-16'>
        {data?.map(d => (
          <article className='bg_midnight text-default flex flex-col px-8 py-8 gap-1 mx-4 sm:mx-auto sm:w-3/4 lg:w-1/2 rounded' key={d.name}>
            <SkillCard skill={d} />
          </article>
        ) ) } 

      {data === null && 
        <div className='w-full lg:w-1/2 mx-auto text-center flex flex-col gap-8 my-24'>
          <p className='midnight text-xl'>Network problem occurred.</p>
          <p className='lime'>Please refresh the page!</p>
        </div>
      }
      </div>
    </div>
  );
};

export default SkillsCategories;
