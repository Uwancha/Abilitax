'use client'

import React, { useEffect, useState } from 'react';
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../firebaseConfig';

// Components
import BlogCard from './BlogCard';

interface Blog {
  title: string
  data: []
  blog: string
  description: string
}


const BlogPosts: React.FC = () => {
  const [posts, setPosts] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = collection(db, 'blogs');
        const docs = await getDocs(docRef);
        console.log(docs)
        const blogs: Blog[]  = [];

        docs.forEach((doc) => blogs.push({
            id: doc.id,
            ...doc.data(),
        }));

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
  console.log(posts);

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
