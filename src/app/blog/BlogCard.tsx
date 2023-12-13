import React from 'react'
import Link from 'next/link';

// Import date-fns to format date
import { format } from 'date-fns';

// Define interfaces

interface BlogCardProps {
  post: {
    createdat: {
      toDate: () => Date;
    };
    authorImage: string;
    author: string;
    title: string;
    summary: string;
    readmin: string;
    id: string;
  };
}

const BlogCard: React.FC<BlogCardProps> = ({post}) => {

  // Format date
  const dateFormat = 'MMM dd, yyyy'
  const formatedDate = format(post.createdat.toDate(), dateFormat)

  return (
    <section className="blogCard p-4 mb-5" >
      <div className="blogCard-title  mb-4" >
          <img src={post.authorImage} className="authorImage" alt="Author's image" />
          <div className="author-date" >
              <p className='text-blacklish font-bold mb-.5' >{post.author}</p>
              <p className='text-blacklish' >{formatedDate}</p>
          </div>
      </div>
      <h2 className='text-blacklish pl-3 sm:text-xl sm:pl-3 font-bold mb-2'>{post.title}</h2>
      <p className='text-blacklish p-3'>{post.summary}</p>
      <div className="cta mt-4">
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

export default BlogCard;
