'use client'

import React, { useEffect, useState } from 'react';
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../firebaseConfig';

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

        const skills: Skill[]  = [];

        docs.forEach((doc) => {
          skills.push({
            name: doc.id,
            ...doc.data(),
            data: [],
            description: '',
            resources: '',
            categories: undefined
          });
        });

        console.log(skills)

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
    <div>
      <div>{data?.map(d => (
          <article key={d.name}>
            <h1>{d.name}</h1>
            <p>{d.description}</p>
          </article>
      ) ) } 
      </div>
    </div>
  );
};

export default SkillsCategories;
