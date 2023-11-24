'use client'

import React, { useEffect, useState } from 'react'
import { db } from '@/app/firebaseConfig'
import {doc, onSnapshot } from 'firebase/firestore'
import Link from 'next/link';
//import Nav from '@/app/components/Header';

function getSkillDetails(id) {
  const docref = doc(db, 'skills', id);

  return new Promise((resolve) => {
    onSnapshot(docref, (doc) => {
      resolve(doc.data());
    });
  });
}

export default function SkillDetails({id}) {
    const [details, setSkillDetails] = useState<[]>()
    

    useEffect(() => {
      async function getData() {
        const data = await getSkillDetails(id);  
        setSkillDetails(data);
      }
  
      getData();
  
    }, [id])
   
    let resourceElements;
    let courseElements;

    if(details?.resources) {
      resourceElements = details.resources.map(resource => (
        <div key={resource.name} className='my-5'>
          <h3 className='text-center mb-3 font-bold'>{resource.name}</h3>
          <p>{resource.about}</p>
          <Link href={resource.website} className='link'>{resource.name}</Link>
        </div>
      ));
    }

    if(details?.courses) {
      courseElements = details.courses.map(course => (
        <div key={course.name} className='my-5'>
          <h3 className='text-center  mb-3  font-bold'>{course.name}</h3>
          <p>{course.about}</p>
          <Link href={course.website} className='link'>{course.name}</Link>
        </div>
      ));
    }
  
  return (
      <div className='w-2/4 mx-auto mt-20 py-10 px-5 bg-white rounded-lg shadow-lg'>
        <h3 className='text-slategray text-2xl text-center font-bold mb-5 '>{details?.name}</h3>
        <p className='text-slategray'>{details?.description}</p>
      
        <section className='my-10 text-slategray'>
          <p>
            Here I list what you need to kick start your journey into the world of {details?.name}
          </p>
          <div>{resourceElements}</div>
          <div>{courseElements}</div>
        </section>
      </div>
  )
}
