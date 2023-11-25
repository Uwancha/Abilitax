'use client'

import React, { useEffect, useState } from 'react'
import { db } from '@/app/firebaseConfig'
import {doc, onSnapshot } from 'firebase/firestore'
import Link from 'next/link';

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
    let books;
    let ytChannels;
    let additionalElements

    if(details?.resources) {
      resourceElements = details.resources.map(resource => (
        <div key={resource.name} className='my-5'>
          <h3 className='text-slategray text-2xl font-bold mb-5'>{resource.name}</h3>
          <p className='pl-10' >{resource.about}</p>
          <Link href={resource.website} className='link pl-10' >{resource.name}</Link>
        </div>
      ));
    }

    if(details?.courses) {
      courseElements = details.courses.map(course => (
        <div key={course.name} className='pl-10 my-5'>
          <h3 className='mb-3  font-bold'>{course.name}</h3>
          <p>{course.about}</p>
          <Link href={course.website} className='link'>{course.name}</Link>
        </div>
      ));
    }

    if(details?.books) {
      books = details.books.map(book => (
        <div key={book.name} className='pl-10 my-5'>
          <h3 className='mb-3  font-bold'>{book.name}</h3>
          <p>{book.about}</p>
          <Link href={book.link} className='link'>{book.name}</Link>
        </div>
      ));
    }

    if(details?.youtube) {
      ytChannels = details.youtube.map(yt => (
        <div key={yt.name} className='pl-10 my-5'>
          <h3 className='mb-3  font-bold'>{yt.name}</h3>
          <p>{yt.about}</p>
          <Link href={yt.link} className='link'>{yt.name}</Link>
        </div>
      ));
    }

    if(details?.others) {
      additionalElements = details.others.map(other => (
        <div key={other.name} className='pl-10 my-5 '>
          <h3 className='mb-3  font-bold'>{other.name}</h3>
          <p>{other.about}</p>
          <Link href={other.website} className='link'>{other.name}</Link>
        </div>
      ));
    }
  
  return (
      <div className='w-2/4 mx-auto mt-20 py-10 px-5 bg-white rounded-lg shadow-lg'>
        <h3 className='text-slategray text-2xl text-center font-bold mb-5 '>{details?.name}</h3>
        <p className='text-slategray'>{details?.description}</p>
      
        <section className='my-10 text-slategray'>
          <h5 className='text-slategray font-bold' >
            Here I list what you need to kick start your journey into the world of {details?.name}
          </h5>
          <div>{resourceElements}</div>
          <div className='my-10' >
            <h2 className='text-slategray text-2xl font-bold' >Professional Certificates</h2>
            {courseElements}
          </div>
          <div className='my-10' >
            <h2  className='text-slategray text-2xl font-bold mb-5 ' >Books</h2>
            {books}
          </div>
          <div className='my-10' >
            <h2  className='text-slategray text-2xl font-bold mb-5 ' >YouTube Channels</h2>
            {ytChannels}
          </div>

          <div className='my-10' >
            <h2  className='text-slategray text-2xl font-bold mb-5 ' >Additional Resources</h2>
            {additionalElements}
          </div>
        </section>
      </div>
  )
}
