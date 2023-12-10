'use client'

import React, { useEffect, useState } from 'react'
import { db } from '@/app/firebaseConfig'
import {doc, onSnapshot } from 'firebase/firestore'
import Link from 'next/link';
import Layout from './layout';

// Import date-fns to format date
import { format } from 'date-fns';

async function getBlogDetails(id) {
  const docref = doc(db, 'blogs', id);

  try {
    const onSnapshot = await onSnapshot(docref)
      return onSnapshot.data();
    
  } catch (error) {
    console.log('An error has occured', error);
    return null;
  };
}

const RenderIntroduction = ({ intro }) => {
  return (
    <div key={intro.id} className='my-5 pl-10'>
      <p className='font-light'>{intro}</p>
    </div>
  );
}

const RenderContent = ({ content }) => {
  return (
    <div key={content.id} className='pl-10 my-5'>
      <h5 className='mb-3 font-bold'>{content.subtitle}</h5>
      <p className='font-light'>{content.body}</p>
    </div>
  );
}

const RenderTip = ({ tip }) => {
  return (
    <div key={''} className='p-4 my-5'>
      <p>{tip}</p>
    </div>
  );
}

const RenderConclusion = ({ conclusion }) => {
  return (
    <div key={''} className='pl-10 my-5'>
      <p className='font-light'>{conclusion}</p>
    </div>
  );
}

export default function Details({id}) {
    const [details, setBlogDetails] = useState<[]>()
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
      async function getData() {
        try {
          const data = await getBlogDetails(id);  
          setBlogDetails(data);
        } finally {
          setLoading(true);
        }
      }
  
      getData();
  
    }, [id])

    if (loading) return (<p>Loading...</p>)

    const { author, authorImage, createdat, content,conclusion,
      image, introduction, summary, title, tip, readmin
    } = details;
    
    
    const dateFormat = 'MMM dd, yyyy'
    const formatedDate = format(createdat.toDate(), dateFormat)


    
    const introductionElements = introduction.map(intro => (
        <RenderIntroduction intro={intro} />
      ));
    

    
    const blogBody = content.map(c => (
        <RenderContent content={c} />
      ));
    
    const  tipElement =  (
      <RenderTip tip={tip} />
    );
    
    const conclusionElement = (
      <RenderConclusion conclusion={conclusion}  />
    );
  
  
  return (
    <Layout
        title={'AbiliTax-Guide to become Full-Stack developer'}
        description={summary}
    >
      <img
        src={image} 
        alt={title} 
        className='w-2/4 mt-10 mx-auto '
      />
      <div className='w-2/4 mx-auto py-10 px-5 bg-white rounded-lg text-xl '>
      <div className="blogCard-title mb-8" >
          <img src={authorImage} className="authorImage" alt="Author's image" />
          <div className="author-date" >
              <p className='text-blacklish font-bold mb-.5' >{author}</p>
              <p className='text-blacklish' >{formatedDate}</p>
          </div>
      </div>
        <h3 className='text-blacklish text-2xl text-center font-bold mb-5 '>{title}</h3>
      
        <section className='my-10 text-blacklish'>
          <div>
            <h5 className='mb-3 pl-10 font-bold'>Introduction</h5>
            {introductionElements}
          </div>
          {content && <div className='my-10' >
            {blogBody}
          </div> }
          {conclusion && <div className='my-10' >
            <h5  className='text-blacklish text-xl font-bold pl-10 mb-5 ' >Conclusion</h5>
            {conclusionElement}
          </div> }
          {tip && <div className='mx-10 bg-whitesmoke text-slategray rounded-lg my-10' >
            {tipElement}
          </div> }

        </section>
      </div>
    </Layout>
  )
}
