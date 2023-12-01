'use client'

import React, { useEffect, useState } from 'react';
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../firebaseConfig';
import SkillCard from './SkillCard';

interface Skill {
  categories: any;
  name: string
  data: []
  resources: string
  description: string
}


const SkillsCategories: React.FC = () => {
  const [data, setData] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = collection(db, 'skills');
        const docs = await getDocs(docRef);
        console.log(docs)
        const skills: Skill[]  = [];

        docs.forEach((doc) => {
          skills.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        if (skills.length) {
          setData(skills)
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <div className='mb-10'>
      <div>{data?.map(d => (
          <article className='bg-white flex flex-col gap-1 mb-5 mx-auto w-1/2 ' key={d.name}>
            <SkillCard skill={d} />
          </article>
      ) ) } 
      </div>
    </div>
  );
};

export default SkillsCategories;
