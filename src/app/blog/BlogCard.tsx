import React from 'react'
import Link from 'next/link';

// Import date-fns to format date
import { format } from 'date-fns';

const BlogCard = ({post}) => {

  // Format date
  const dateFormat = 'MMM dd, yyyy'
  const formatedDate = format(post.createdat.toDate(), dateFormat)

  return (
    <section className="blogCard" >
      <div className="blogCard-title  mb-4" >
          <img src={''} className="authorImage" alt="Author's image" />
          <div className="author-date" >
              <p className='text-slategray font-bold mb-.5' >{post.author}</p>
              <p className='text-slategray' >{formatedDate}</p>
          </div>
      </div>
      <h2 className='text-slategray text-xl font-bold mb-2'>{post.title}</h2>
      <p className='text-slategray'>{post.summary}</p>
      <div className="cta mt-4">
        <p className='text-slategray'>{post.readmin}</p>
        <Link href="" 
          className='hover:text-slategray'
        >
          Read Article
        </Link>
      </div>
    </section>
  )
}

export default BlogCard;
