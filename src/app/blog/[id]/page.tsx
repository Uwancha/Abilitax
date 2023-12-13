import React, { Suspense } from 'react'
import Details from './blogDetails';
import Nav from '@/app/components/Header';
import Loading from '@/app/skills/loading';


// Firebase configuration
import { db } from '@/app/firebaseConfig';
import { collection, doc, getDoc} from 'firebase/firestore';


async function getBlogDetails(id, db) {
  
  const collectionRef = collection(db, 'blogs');
  const docRef = doc(collectionRef, id);

  const docSnapshot = await getDoc(docRef);
  try {
    
    if (docSnapshot.exists()) {
      return docSnapshot.data();
    } else {
      console.error('Blog does not exist');
      return null;
    }
    
  } catch (error) {
    console.log('An error has occured', error);
    return null;
  };
}


export default async function BlogDetail({params}) {
  const post = await getBlogDetails(params.id, db)
  console.log(post)

  const headerStyle = { 
    backgroundColor: "#fff",
    position: 'fixed',
    width: '100%',
    top: 0,
    color: "slategray",
    boxShadow:  'rgba(50, 50, 93, 0.1) 0px 13px 27px -25px,rgba(0, 0, 0, 0.25) 0px 8px 16px -20px',

  }

  return (
    <div className='bg-whitesmoke py-10'>
      <Nav sty={headerStyle} />
      <Suspense fallback={<Loading />} >
      <Details post={post}  />
      </Suspense>
    </div>
  )
}