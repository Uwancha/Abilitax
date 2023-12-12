'use client'

import React, { Suspense, useEffect, useState } from 'react'
import { db } from '@/app/firebaseConfig'
import {doc, getDoc } from 'firebase/firestore'
import Link from 'next/link';
import Layout from './layout';

// Import date-fns to format date
import { format } from 'date-fns';
import Loading from '@/app/skills/loading';

async function getBlogDetails(id) {
  const docref = doc(db, 'blogs', id);

  try {
    const docSnapshot = await getDoc(docref)
    
    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      console.error('Blog does not exist');
      return null;
    }
    
  } catch (error) {
    console.log('An error has occured', error);
    return null;
  };
}

const RenderIntroduction = ({ intro }) => {
  return (
    <div key={intro.id} className='my-5 pl-5 sm:pl-10'>
      <p className='font-light'>{intro}</p>
    </div>
  );
}

const RenderContent = ({ content }) => {
  return (
    <div key={content.id} className='pl-5 sm:pl-10 my-5'>
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
    <div key={''} className='pl-5 sm:pl-10 my-5'>
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
        } catch {
          setLoading(true);
        }
      }
  
      getData();
  
    }, [id])

    if (loading) return (<p>Loading...</p>)

    let formatedDate;
    
    if (details?.createdat) {
      const dateFormat = 'MMM dd, yyyy'
      formatedDate = format(details?.createdat.toDate(), dateFormat)
    }

    const introductionElements = details?.introduction.map(intro => (
        <RenderIntroduction intro={intro} />
      ));
    

    
    const blogBody = details?.content.map(c => (
        <RenderContent content={c} />
      ));
    
    const  tipElement =  (
      <RenderTip tip={details?.tip} />
    );
    
    const conclusionElement = (
      <RenderConclusion conclusion={details?.conclusion}  />
    );
  
  
  return (
    <Layout
        title={'AbiliTax-Guide to become Full-Stack developer'}
        description={details?.summary}
    >
      <Suspense fallback={<Loading />}>
      <img
        src={details?.image} 
        alt={details?.title} 
        className='w-full sm:w-2/4 mt-10 mx-auto '
      />
      <div className='sm:w-2/4 mx-auto py-20 sm:px-5 bg-white rounded-lg text-xl '>
      <div className="blogCard-title mb-8 pl-5" >
          <img src={details?.authorImage} className="authorImage" alt="Author's image" />
          <div className="author-date" >
              <p className='text-blacklish sm:font-bold mb-.5' >{details?.author}</p>
              <p className='text-blacklish' >{formatedDate}</p>
          </div>
      </div>
        <h3 className='text-blacklish sm:text-2xl text-center font-bold mb-5 '>{details?.title}</h3>
      
        <section className='my-10 text-blacklish'>
          <div>
            <h5 className='mb-3 pl-5 sm:pl-10 font-bold'>Introduction</h5>
            {introductionElements}
          </div>
          {details?.content && <div className='my-10' >
            {blogBody}
          </div> }
          {details?.conclusion && <div className='my-10' >
            <h5  className='text-blacklish text-xl font-bold pl-5 sm:pl-10 mb-5 ' >Conclusion</h5>
            {conclusionElement}
          </div> }
          {details?.tip && <div className='mx-10 bg-whitesmoke text-slategray rounded-lg my-10' >
            {tipElement}
          </div> }

        </section>
      </div>
      </Suspense>
    </Layout>
  )
}
