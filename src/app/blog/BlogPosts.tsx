'use client'

import React, { useEffect, useState } from 'react';
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../firebaseConfig';

// Components
import BlogCard from './BlogCard';

// Define interfaces

interface BlogPost {
   createdat: {
    toDate: () => Date;
  };
  authorImage: string;
  author: string;
  title: string;
  summary: string;
  readmin: string;
  id: string;
}

const BlogPosts: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = collection(db, 'blogs');
        const docs = await getDocs(docRef);
        
        const blogs: BlogPost[]  = [];

        docs.forEach((doc) =>{
          const data = doc.data();
          const blog: BlogPost = {
            id: doc.id,
            createdat: data.createdat,
            authorImage: data.authorImage,
            author: data.author,
            title: data.title,
            summary: data.summary,
            readmin: data.readmin,
          };
          blogs.push(blog);
        });

        if (blogs.length) {
          setPosts(blogs)
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mb-10'>
      <div className="posts w-full sm:w-2/4 sm:mx-auto">{posts?.map(post => (
            <BlogCard post = {post} key={post.id} />
      ) ) } 
      </div>
    </div>
  );
};

export default BlogPosts;
