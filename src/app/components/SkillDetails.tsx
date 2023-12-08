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
        <div key={resource.name} className='my-5 pl-10'>
          <h5 className='text-xl font-light mb-5'>{resource.name}</h5>
          <p className='pl-10' >{resource.about}</p>
          <Link href={resource.website} className='link' >View Resource</Link>
        </div>
      ));
    }

    if(details?.courses) {
      courseElements = details.courses.map(course => (
        <div key={course.name} className='pl-10 my-5'>
          <h5 className='mb-3  font-light'>{course.name}</h5>
          <p>{course.about}</p>
          <Link href={course.website} className='link'>View Resource</Link>
        </div>
      ));
    }

    if(details?.books) {
      books = details.books.map(book => (
        <div key={book.name} className='pl-10 my-5'>
          <h5 className='mb-3  font-light'>{book.name}</h5>
          <p>{book.about}</p>
          <Link href={book.link} className='link'>Link to Book</Link>
        </div>
      ));
    }

    if(details?.youtube) {
      ytChannels = details.youtube.map(yt => (
        <div key={yt.name} className='pl-10 my-5'>
          <h5 className='mb-3  font-light'>{yt.name}</h5>
          <p>{yt.about}</p>
          <Link href={yt.link} className='link'>Link to Channel</Link>
        </div>
      ));
    }

    if(details?.others) {
      additionalElements = details.others.map(other => (
        <div key={other.name} className='pl-10 my-5 '>
          <h5 className='mb-3  font-light'>{other.name}</h5>
          <p>{other.about}</p>
          <Link href={other.website} className='link'>View Resource</Link>
        </div>
      ));
    }
  
  return (
      <div className='w-2/4 mx-auto py-20 px-5 bg-white '>
        <h2 className='text-blackish text-2xl text-center font-bold mb-5 '>{details?.name}</h2>
      
        <section className='my-10 text-blackish'>
          <h3 className='text-blackish text-xl font-bold mb-10' >
            All you need to kick start your journey into the world of {details?.name}
          </h3>
          <div>{resourceElements}</div>
          {details?.courses && <div className='my-10' >
            <h5 className='text-blackish font-bold pl-10 text-xl ' >Professional Certificates</h5>
            {courseElements}
          </div> }
          {details?.books && <div className='my-10' >
            <h5  className='text-blackish text-xl pl-10 font-bold mb-5 ' >Books</h5>
            {books}
          </div> }
          {details?.youtube && <div className='my-10' >
            <h5  className='text-blackish text-xl pl-10 font-bold mb-5 ' >YouTube Channels</h5>
            {ytChannels}
          </div> }

          {details?.others &&<div className='my-10' >
            <h5  className='text-blackish text-xl font-bold pl-10 mb-5 ' >Additional Resources</h5>
            {additionalElements}
          </div> }

          {details?.conclusion && <div>
            <h5 className='text-blackish text-xl font-bold pl-10 mb-5 '>Conclusion</h5>
            <p className='text-blackish font-light pl-10 mb-3'>{details?.conclusion}</p>
            <p className='text-blackish font-light pl-10  mb-3'>{details?.conclusionmore}</p>
            <p className='text-blackish font-light pl-10'>{details?.conclusionlast}</p>
          </div> }
        </section>
      </div>
  )
}
