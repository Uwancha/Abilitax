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
};

const BlogCard: React.FC<BlogCardProps> = ({post}) => {
  // Format date
  const dateFormat = 'MMM dd, yyyy'
  const formatedDate = format(post.createdat.toDate(), dateFormat)

  return (
    <section className="flex flex-col px-8 py-8 mb-5 rounded midnight bg-default" >
      <div className="flex gap-2 items-center mb-6" >
          <img src={post.authorImage} className="authorImage" alt="Author's image" />
          <div>
            <p className='font-bold mb-.5' >{post.author}</p>
            <p>{formatedDate}</p>
          </div>
      </div>
      <h2 className='pl-3 sm:text-xl sm:pl-3 font-bold mb-2'>{post.title}</h2>
      <p className='p-3'>{post.summary}</p>
      <div className="flex gap-8 pl-2 mt-4">
        <p className='text-blacklish'>{post.readmin}</p>
        <Link href={`blog/${post.id}`} 
          className='lime hover:text-slategray'
        >
          Read Article
        </Link>
      </div>
    </section>
  );
};

export default BlogCard;
