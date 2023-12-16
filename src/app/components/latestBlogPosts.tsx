'use client'

import React, { useEffect, useState } from 'react';
import { collection, getDocs} from 'firebase/firestore';
import { db } from '../firebaseConfig';

// Components
import LatestBlogCard from './latestBlogPostCard';

// Define interfaces 

interface LatestBlogPost {
 authorImage: string;
 author: string;
 title: string;
 summary: string;
 readmin: string;
 id: string;
}


const LatestBlogPosts: React.FC = () => {
  const [posts, setPosts] = useState<LatestBlogPost[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = collection(db, 'blogs');
        const docs = await getDocs(docRef);
        
        const blogs: LatestBlogPost[]  = [];

        docs.forEach((doc) => {
          const data = doc.data();

          if (data.category === 'latest') {
            const blog: LatestBlogPost = {
              id: doc.id,
              authorImage: data.authorImage,
              author: data.author,
              title: data.title,
              summary: data.summary,
              readmin: data.readmin,
            };

            blogs.push(blog);
          }
        }
        );

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
    <div className='w-full mb-10'>
      <div className='w-full px-4 flex flex-col gap-10 mx-auto
       sm:w-2/4 sm:px-0'>
        {posts?.map(post => (
            <LatestBlogCard post = {post} key={post.id} />
      ) ) } 
      </div>
    </div>
  );
};

export default LatestBlogPosts;
