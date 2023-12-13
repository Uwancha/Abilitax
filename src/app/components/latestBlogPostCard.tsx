import React from 'react'
import Link from 'next/link';

// Define interfaces

interface LatestBlogCardProps {
  post: {
    authorImage: string;
    author: string;
    title: string;
    summary: string;
    readmin: string;
    id: string;
  };
}

const LatestBlogCard: React.FC<LatestBlogCardProps> = ({post}) => {

  return (
    <section
    className='w-full mx-auto p-6
    rounded-lg bg-white text-blackish
    shadow-md' >

      <h2 className='text-blacklish font-bold mb-2
      sm:text-xl'>{post.title}</h2>
      <p className='text-blacklish font-light my-6'>{post.summary.slice(0, 50)}</p>
      <div className='cta mt-4'>
        <p className='text-blacklish'>{post.readmin}</p>
        <Link href={`blog/${post.id}`} 
          className='hover:text-slategray'
        >
          Read Article
        </Link>
      </div>
    </section>
  )
}

export default LatestBlogCard;
