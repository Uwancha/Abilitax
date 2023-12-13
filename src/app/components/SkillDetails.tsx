import React from 'react'
import Link from 'next/link';

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

export default function SkillDetails({skill}) {
    
    const resourceElements = skill?.resources.map(resource => (
      <RenderResource key={resource} resource={resource} /> 
    ) );
    const courseElements = skill?.courses.map(course => ( 
      <RenderResource key={course} resource={course} />
    ));
    const booksElements = skill?.books.map(book => ( 
      <RenderResource key={book} resource={book} />
    ));
    const ytChannels = skill?.youtube.map(yt => ( 
      <RenderResource key={yt} resource={yt} />
    ));
    
    const additionalElements = skill?.others.map(other => (
      <RenderResource key={other} resource={other} />
    )); 
  
  return (
      <div className='w-full mx-auto py-10 px-5 mt-10 mb-10 bg-white rounded-lg sm:w-2/4 '>
        <h2 className='text-blackish text-xl text-center font-bold mb-5 sm:text-2xl '>{skill.name}</h2>
      
        <section className='my-10 text-blackish'>
          <h3 className='text-blackish text-xl font-bold mb-10' >
            All you need to kick start your journey into the world of {skill.name}
          </h3>

          <div>{resourceElements}</div>
          {skill?.courses && <SkillSection title='Professional Certificates' elements={courseElements} />}
          {skill?.books && <SkillSection title='Books' elements={booksElements} />}
          {skill?.youtube && <SkillSection title='YouTube Channels' elements={ytChannels} /> }
          {skill?.others && <SkillSection title='Additional Resources' elements={additionalElements} />}

          {skill?.conclusion && (
            <div>
              <h5 className='text-blackish text-xl font-bold pl-5 mb-5 sm:pl-10 '>Conclusion</h5>
              <p className='text-blackish font-light pl-5 mb-3 sm:pl-10'>{skill?.conclusion}</p>
              <p className='text-blackish font-light pl-5 mb-3 sm:pl-10'>{skill?.conclusionmore}</p>
              <p className='text-blackish font-light pl-5 sm:pl-10'>{skill?.conclusionlast}</p>
            </div> 
          )}
        </section>
      </div>
  )
}
