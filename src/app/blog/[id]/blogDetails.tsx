import Layout from './layout';

// Import date-fns to format date
import { format } from 'date-fns';
import BlogFooter from './blogFooter';

// Define Interfaces
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

interface DetailsProps {
  post: Post;
};

const RenderIntroduction = ({intro}: {intro:string} ) => {
  return (
    <div className='my-5 pl-5 sm:pl-10'>
      <p className='font-light'>{intro}</p>
    </div>
  );
};

interface RenderContentProps {
  content: Content;
};

const RenderContent: React.FC<RenderContentProps> = ({ content }) => {
  return (
    <div className='pl-5 sm:pl-10 my-5'>
      <h5 className='mb-3 font-bold'>{content.subtitle}</h5>
      <p className='font-light'>{content.body}</p>
    </div>
  );
};

const RenderTip = ({ tip }: {tip: string}) => {
  return (
    <div className='p-4 my-5'>
      <p>{tip}</p>
    </div>
  );
};

const RenderConclusion = ({ conclusion }: {conclusion: string}) => {
  return (
    <div className='pl-5 sm:pl-10 my-5'>
      <p className='font-light'>{conclusion}</p>
    </div>
  );
};

const Details: React.FC<DetailsProps> = ({post}) => {  
  // Format date with date-fns library
  let formatedDate;
  if (post.createdat) {
    const dateFormat = 'MMM dd, yyyy'
    formatedDate = format(post.createdat.toDate(), dateFormat)
  };

  // Render a posts subcomponents
  const introductionElements = post.introduction?.map((intro, index) => (
    <RenderIntroduction key={index} intro={intro} />
  ));
    
  const blogBody = post.content?.map((c, index) => (
    <RenderContent key={index} content={c} />
  ));
    
  const  tipElement =  (
    <RenderTip tip={post.tip} />
  );
    
  const conclusionElement = (
    <RenderConclusion conclusion={post.conclusion}  />
  );
  
  return (
    <Layout
    >
      <img
        src={post.image} 
        alt={post.title} 
        className='w-full sm:w-2/4 mx-auto'
      />
      <div className='sm:w-2/4 mx-auto py-20 sm:px-5 midnight bg-default rounded-lg text-xl '>
        <div className="mb-8 pl-5 flex items-center gap-4" >
          <img src={post.authorImage} className="authorImage" alt="Author's image" />
          <div>
            <p className='sm:font-semi-bold mb-.5' >{post.author}</p>
            <p>{formatedDate}</p>
          </div>
        </div>
        <h3 className='sm:text-xl text-center font-bold mb-5 '>{post.title}</h3>
      
        <section className='my-10 midnight'>
          <div>
            <h5 className='mb-3 pl-5 sm:pl-10 font-bold'>Introduction</h5>
            {introductionElements}
          </div>
          {post.content && (
            <div className='my-10' >
            {blogBody}
          </div> ) }
          {post.conclusion && (
            <div className='my-10' >
            <h5  className='text-xl font-bold pl-5 sm:pl-10 mb-5 ' >Conclusion</h5>
            {conclusionElement}
          </div> ) }
          {post.tip && (
            <div className='mx-10 bg-whitesmoke rounded-lg my-10' >
            {tipElement}
          </div> ) }

        </section>
      </div>
      <BlogFooter />
    </Layout>
  );
};

export default Details;