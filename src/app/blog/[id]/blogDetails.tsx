'use client'

import React, { useEffect, useState } from 'react'
import { db } from '@/app/firebaseConfig'
import {doc, onSnapshot } from 'firebase/firestore'
import Link from 'next/link';
import Layout from './layout';

// Import date-fns to format date
import { format } from 'date-fns';

function getBlogDetails(id) {
  const docref = doc(db, 'blogs', id);

  return new Promise((resolve) => {
    onSnapshot(docref, (doc) => {
      resolve(doc.data());
    });
  });
}

export default function Details({id}) {
    const [details, setBlogDetails] = useState<[]>()
  

    useEffect(() => {
      async function getData() {
        const data = await getBlogDetails(id);  
        setBlogDetails(data);
      }
  
      getData();
  
    }, [id])

    console.log(details)

    let formatedDate;
   
    let introduction;
    let blogBody;
    let conclusionElement;
    let tip;

    if (details?.createdat?) {
      const dateFormat = 'MMM dd, yyyy'
      formatedDate = format(details?.createdat.toDate(), dateFormat)
    }

    if(details?.introduction) {
      introduction = details.introduction.map(intro => (
        <div key={intro.id} className='my-5 pl-10'>
          <p >{intro}</p>
        </div>
      ));
    }

    if(details?.content) {
      blogBody = details.content.map(c => (
        <div key={c.id} className='pl-10 my-5'>
          <h5 className='mb-3  font-bold'>{c.subtitle}</h5>
          <p>{c.body}</p>
        </div>
      ));
    }

    
    if(details?.tip) {
      tip =  (
        <div key={''} className='p-4 my-5'>
          <p>{details?.tip}</p>
        </div>
      );
    }

    if(details?.conclusion) {
        conclusionElement = (
        <div key={''} className='pl-10 my-5 '>
          <p>{details?.conclusion}</p>
        </div>
      );
    }
  
  return (
    <Layout
        title={'AbiliTax-Guide to become Full-Stack developer'}
        description={details?.summary}
    >
      <img
        src={details?.image} 
        alt={''} 
        className='w-2/4 mt-10 mx-auto '
      />
      <div className='w-2/4 mx-auto py-10 px-5 bg-white rounded-lg text-xl '>
      <div className="blogCard-title mb-8" >
          <img src={details?.authorImage} className="authorImage" alt="Author's image" />
          <div className="author-date" >
              <p className='text-blacklish font-bold mb-.5' >{details?.author}</p>
              <p className='text-blacklish' >{formatedDate}</p>
          </div>
      </div>
        <h3 className='text-blacklish text-2xl text-center font-bold mb-5 '>{details?.title}</h3>
      
        <section className='my-10 text-blacklish'>
          <div>
            <h5 className='mb-3 pl-10 font-bold'>Introduction</h5>
            {introduction}
          </div>
          {details?.content && <div className='my-10' >
            {blogBody}
          </div> }
          {details?.conclusion && <div className='my-10' >
            <h5  className='text-blacklish text-xl font-bold pl-10 mb-5 ' >Conclusion</h5>
            {conclusionElement}
          </div> }
          {details?.tip && <div className='mx-10 bg-whitesmoke text-slategray rounded-lg my-10' >
            {tip}
          </div> }

        </section>
      </div>
    </Layout>
  )
}
