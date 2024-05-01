import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

// Define interfaces
interface Resource {
  name: string;
  about: string;
  website: string;
  link: string;
};

interface Skill {
  name: string;
  resources: Resource[];
  courses: Resource[];
  books: Resource[];
  youtube: Resource[];
  others: Resource[];
  conclusion: string;
  conclusionmore: string;
  conclusionlast: string;
};

interface RenderResourceProps {
  resource: Resource;
};

interface SkillSectionProps {
  title: string;
  elements: React.ReactNode;
};

interface SkillDetailsProps {
  skill: Skill;
};

const RenderResource: React.FC<RenderResourceProps> = ({ resource }) => {
  return (
    <div className='my-8 pl-5 sm:pl-10'>
      <h5 className='text-xl font-light mb-5'>{resource.name}</h5>
      <p className='mb-5'>{resource.about}</p>
      <Link href={resource.website || resource.link} className='lime cursor-pointer'>
        View Resource &gt;&gt;
      </Link>
    </div>
  );
};

const SkillSection: React.FC<SkillSectionProps> = ({ title, elements }) => {
  return (
    <div className='my-12 lg:mx-8 bg_midnight text-default py-8 rounded'>
      <h5 className='font-bold pl-5 text-xl lg:text-center'>{title}</h5>
      {elements}
    </div>
  );
};

const SkillDetails: React.FC<SkillDetailsProps> = ({skill}) => {
    
  const resourceElements = skill.resources?.map(resource => (
    <RenderResource key={resource.name} resource={resource} /> 
  ) );

  const courseElements = skill.courses?.map(course => ( 
    <RenderResource key={course.name} resource={course} />
  ));

  const booksElements = skill.books && skill.books.map(book => ( 
    <RenderResource key={book.name} resource={book} />
  ));

  const ytChannels = skill.youtube?.map(yt => ( 
    <RenderResource key={yt.name} resource={yt} />
  ));
    
  const additionalElements = skill.others?.map(other => (
    <RenderResource key={other.name} resource={other} />
  )); 
  
  return (
    <div className='w-full mx-auto py-10 px-5 mb-10 bg-white rounded-lg sm:w-2/4 '
    >
      
      <h1 className='text-xl mb-8 sm:text-2xl font-bold text-center' >
        Starter packs | {skill.name}
      </h1> 

      <section className='mb-10'>
        <div className='midnight lg:mx-8 py-8 bg-whitesmoke rounded'>
          {resourceElements}
        </div>
          
        { skill?.courses && 
          <SkillSection title='Professional Certificates' elements={courseElements} />
        }

        { skill?.books && 
          <SkillSection title='Books' elements={booksElements} />
        }

        { skill?.youtube && 
          <SkillSection title='YouTube Channels' elements={ytChannels} /> 
        }

        { skill?.others && 
          <SkillSection title='Additional Resources' elements={additionalElements} />
        }

        <div className='my-12 lg:mx-8 bg-whitesmoke midnight py-8 rounded flex flex-col gap-8 
          pl-5 lg:text-center'
        > 
          <p className='font-bold sm:text-xl'>Should need further help or mentorship?</p>
          <p className=''>Don&apos;t hesitate to reach out!</p>
          <div className="flex sm:justify-center flex-row
            gap-2 sm:gap-4"
          >
            <Link href={'https://www.linkedin.com/in/sitota'}
              className="bg-default px-2 py-1 flex items-center hover:opacity-50 gap-1"
            >
              <p className="font-light" >LinkedIn</p>
              <Image
                src={'/linkedin-original.svg'}
                width={20}
                height={20}
                alt={"link to LinkedIn"}
                className="rounded-full"
              />
            </Link>
          
            <Link href={'https://instagram.com/sitota_a?igshid=MzMyNGUyNmU2YQ=='}
              className="bg-default px-2 py-1 flex items-center hover:opacity-50 gap-1"
            >
              <p className="font-light" >Instagram</p>
              <Image
                src={'/instagram.svg'}
                width={20}
                height={20}
                alt={"link to instagram"}
                className="rounded-full"
               />
            </Link>

            <Link href={'https://t.me/D_esila'}
              className="bg-default px-2 py-1 flex items-center hover:opacity-50 gap-1"
            >
              <p className="font-light">Telegram</p>
              <Image
                src={'/telegram.png'}
                width={20}
                height={20}
                alt={"link to Telegram"}
                className="rounded-full"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillDetails;