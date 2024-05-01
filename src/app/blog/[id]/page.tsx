import Details from './blogDetails';
import Nav from '@/app/components/Header';

// Firebase configuration
import { db } from '@/app/firebaseConfig';
import { collection, doc, getDoc} from 'firebase/firestore';

// Define interfaces
interface Content {
  subtitle: string;
  body: string;
};

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
};

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
    };
    
  } catch (error) {
    console.log('An error has occured', error);
    return null;
  };
};

interface BlogDetailsPageProps {
  params: { id: string };
};

export default async function BlogDetail({params}: BlogDetailsPageProps) {
  const post = await getBlogDetails(params.id);

  return (
    <>
      <Nav/>
      <div className='bg-whitesmoke'>
        {post !== null ? (
          <Details post={post} />
        ) 
        : 
        (
          <div className='flex flex-col gap-8 my-24'>
            <p className='midnight text-xl'>Network problem occurred</p>
            <p className='lime text-xl'>Please refresh the page!</p>
          </div>
        )}  
      </div>
    </>
  );
};