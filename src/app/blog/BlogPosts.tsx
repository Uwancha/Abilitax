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
};

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
      return blogs;
    } else {
      console.log('No such document!');
      return null;
    };
  } catch (error) {
    throw Error;
  };
};

const BlogPosts = async () => {
  const posts = await fetchData();

  return (
    <div className='mb-10'>
      <div className="flex flex-col gap-2 w-full sm:w-2/4 sm:mx-auto">
        {posts?.map(post => (
        <BlogCard post = {post} key={post.id} />
        ) ) } 

      {posts === null && 
        <div className='flex flex-col gap-8 my-24'>
          <p className='midnight text-xl'>Network problem occurred</p>
          <p className='lime text-xl'>Please refresh the page!</p>
        </div>
      }
      </div>
    </div>
  );
};

export default BlogPosts;
