import React, { Suspense } from 'react'
import Details from './blogDetails';
import Nav from '@/app/components/Header';
import Loading from '@/app/skills/loading';


// Firebase configuration
import { db } from '@/app/firebaseConfig';
import { collection, doc, getDoc} from 'firebase/firestore';

// Define interfaces

interface Content {
  subtitle: string;
  body: string;
}

interface Post {
  createdat: {
    toDate: () => Date;
  };
  introduction: string[];
  content: Content[];
  tip: string;
  conclusion: string;
  image: string;
  title: string;
  authorImage: string;
  author: string;
}

async function getBlogDetails(id: string): Promise<Post | null> {
  
  const collectionRef = collection(db, 'blogs');
  const docRef = doc(collectionRef, id);

  const docSnapshot = await getDoc(docRef);
  try {
    
    if (docSnapshot.exists()) {
      return docSnapshot.data() as Post;
    } else {
      console.error('Blog does not exist');
      return null;
    }
    
  } catch (error) {
    console.log('An error has occured', error);
    return null;
  };
}

interface BlogDetailsPageProps {
  params: { id: string };
}


export default async function BlogDetail({params}: BlogDetailsPageProps) {
  const post = await getBlogDetails(params.id)
  console.log(post)

  return (
    <>
    <Nav/>
      <div className='bg-whitesmoke'>
        <Suspense fallback={<Loading />} >
        {post !== null ? (
              <Details post={post}  />
            ) : (
              <p>Loading...</p>
            )}
        </Suspense>
      </div>
    </>
  )
}