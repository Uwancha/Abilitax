'use client'

import React, { useEffect, useState } from 'react'
import { db } from '@/app/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'
import Link from 'next/link';

async function getSkillDetails(id) {
  const docref = doc(db, 'skills', id);

  try {
    const docSnapshot = await getDoc(docref)
    if (docSnapshot.exists()) {
      console.log(docSnapshot.data())
      return docSnapshot.data();
    } else {
      console.error('Skill does not exist');
      return null;
    }
  
  } catch (error) {
    console.error('Error fetching skill details:', error);
    return null
  }
}

const RenderResource = ({ resource }) => {
  return (
    <div key={resource.name} className='my-5 pl-5 sm:pl-10'>
      <h5 className='text-xl font-light mb-5'>{resource.name}</h5>
      <p className=' mb-5'>{resource.about}</p>
      <Link href={resource.website || resource.link} className='link'>
        View Resource
      </Link>
    </div>
  );
}

const SkillSection = ({ title, elements }) => {
  return (
    <div className='my-10'>
      <h5 className='text-blackish font-bold pl-5 text-xl sm:pl-10'>{title}</h5>
      {elements}
    </div>
  );
}

export default function SkillDetails({id}) {
    const [details, setSkillDetails] = useState<{}>()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
      async function getData() {
        try {
          const data = await getSkillDetails(id);
          setSkillDetails(data);
        } catch {
          setLoading(true)
        }
      }
  
      getData();
  
    }, [id])

    if (loading) {
      return <p>Loading...</p>;
    }
    
    const resourceElements = details?.resources.map(resource => (
      <RenderResource key={resource} resource={resource} /> 
    ) );
    const courseElements = details?.courses.map(course => ( 
      <RenderResource key={course} resource={course} />
    ));
    const booksElements = details?.books.map(book => ( 
      <RenderResource key={book} resource={book} />
    ));
    const ytChannels = details?.youtube.map(yt => ( 
      <RenderResource key={yt} resource={yt} />
    ));
    
    const additionalElements = details?.others.map(other => (
      <RenderResource key={other} resource={other} />
    )); 
  
  return (
      <div className='w-full mx-auto py-10 px-5 mt-10 mb-10 bg-white rounded-lg sm:w-2/4 '>
        <h2 className='text-blackish text-xl text-center font-bold mb-5 sm:text-2xl '>{name}</h2>
      
        <section className='my-10 text-blackish'>
          <h3 className='text-blackish text-xl font-bold mb-10' >
            All you need to kick start your journey into the world of {name}
          </h3>

          <div>{resourceElements}</div>
          {details?.courses && <SkillSection title='Professional Certificates' elements={courseElements} />}
          {details?.books && <SkillSection title='Books' elements={booksElements} />}
          {details?.youtube && <SkillSection title='YouTube Channels' elements={ytChannels} /> }
          {details?.others && <SkillSection title='Additional Resources' elements={additionalElements} />}

          {details?.conclusion && (
            <div>
              <h5 className='text-blackish text-xl font-bold pl-5 mb-5 sm:pl-10 '>Conclusion</h5>
              <p className='text-blackish font-light pl-5 mb-3 sm:pl-10'>{details?.conclusion}</p>
              <p className='text-blackish font-light pl-5 mb-3 sm:pl-10'>{details?.conclusionmore}</p>
              <p className='text-blackish font-light pl-5 sm:pl-10'>{details?.conclusionlast}</p>
            </div> 
          )}
        </section>
      </div>
  )
}
