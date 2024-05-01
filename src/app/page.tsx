import Image from 'next/image';
import Link from 'next/link';

// Layout component
import Layout from './components/layoutHome';

// components
import Nav from './components/Header';

export default function Home() {
  return (
    <main>
        <Layout > 
        <div>
            <header className='w-full h-screen text-default flex flex-col gap-16 bg_midnight pt-8'>
                <Nav />
                <div className='flex flex-col gap-16 items-center'>
                    <h1 className='text-xl font-bold mt-20 sm:text-3xl '
                    >
                        Collections of curated resources!
                    </h1>
                    <Link
                        href='/skills'
                        className='text-center text-white py-4 px-8
                        text-xl  border border-green-626 rounded-full shadow-md
                        hover:bg-white hover:text-slategray
                        hover:border hover:border-blackish
                        transition duration-1000 ease-in-out'
                    >
                        Browse Resources
                    </Link>
                </div>
            </header>

            <article id='talents' className='w-full flex flex-col gap-16 bg-default px-8 py-24'>
                <h3 className='midnight font-bold text-2xl lg:text-3xl text-center mb-8'>Most Sought-After Talents</h3>
                
                <div className='w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16'>
                    <section className='skill-card midnight pb-5 hover:shadow hover:scale-105 transition duration-500 ease-in-out' > 
                        <Image src={'/web-development-.png'} className='w-full ' width={100} height={100} alt='' quality={100} priority unoptimized />
                        <h4 className='font-bold text-xl pl-5 mt-5 mb-2'>Web Development</h4>
                        <p className='font-light pl-5 mb-5'>Web development involves building and maintaining websites. Developers are responsible for the front-end (visual design) and back-end (functionality) aspects using technologies like HTML, CSS, JavaScript, PHP, Python, etc.</p>
                        <Link href='/skills/qiLrR0J8w9H0N5l3q7um' className='link pl-5 mt-auto'>Learn More</Link>
                    </section>
                    <section className='skill-card midnight pb-5 hover:shadow hover:scale-105 transition duration-500 ease-in-out' >
                    <Image src={'/Data-Science-.png'} className='w-full ' width={100} height={100} alt='' quality={100} priority unoptimized />
                        <h4 className='font-bold text-xl pl-5'>Data Science</h4>
                        <p className='font-light pl-5'>Data scientists analyze structured and unstructured data to discover hidden patterns, build predictive models and gain useful insights.</p>
                        <Link href='/skills/aG8wdlTi0BCyOi0iGWar' className='link pl-5 mt-auto'>Learn More</Link>
                    </section>
                    <section className='skill-card midnight pb-5 hover:shadow hover:scale-105 transition duration-500 ease-in-out' >
                    <Image src={'/cloud-computing-.png'} className='w-full ' width={100} height={100} alt='' quality={100} priority unoptimized />
                        <h4 className='font-bold text-xl pl-5'>Cloud Computing</h4>
                        <p className='font-light pl-5'>Cloud computing allows users to access technology-enabled services like storage, databases, analytics, networking, software, etc. Cloud professionals apply technical, engineering and architectural skills to deploy, manage, secure and optimize cloud computing systems.</p>
                        <Link href='/skills/BVwJPrtgDEuZA1i3Nwdl' className='link pl-5 mt-auto'>Learn More</Link>
                    </section>
                    <section className='skill-card midnight pb-5 hover:shadow hover:scale-105 transition duration-500 ease-in-out' >
                    <Image src={'/UX-UI-Design.png'} className='w-full ' width={100} height={100} alt='' quality={100} priority unoptimized />
                        <h4 className='font-bold text-xl pl-5'>UI/UX Design</h4>
                        <p className='font-light pl-5'>UI/UX designers plan and build intuitive, attractive user experiences across digital platforms. They apply principles of human-computer interaction and usability.</p>
                        <Link href='/skills/gAuIqxghNT2xeB3jA5he' className='link pl-5 mt-auto'>Learn More</Link>
                    </section>
                    <section className='skill-card midnight pb-5 hover:shadow hover:scale-105 transition duration-500 ease-in-out' >
                    <Image src={'/video-editing.jpg'} className='w-full ' width={100} height={100} alt='' quality={100} priority unoptimized />
                        <h4 className='font-bold text-xl pl-5'>Video Editing</h4>
                        <p className='font-light pl-5'>Video editors cut and assemble media like footage, audio, graphics and visual effects to craft compelling stories or messages for various platforms.</p>
                        <Link href='/skills/i4XqhRH4B6hPNhPqKD7N' className='link pl-5 mt-auto'>Learn More</Link>
                    </section>
                    <section className='skill-card midnight pb-5 hover:shadow hover:scale-105 transition duration-500 ease-in-out' >
                    <Image src={'/Content-marketing.png'} className='w-full ' width={100} height={100} alt='' quality={100} priority unoptimized />
                        <h4 className='font-bold text-xl pl-5'>Content Creation</h4>
                        <p className='font-light pl-5'>Content creation is the process of researching, writing, editing, and publishing various types of content for digital platforms like websites, blogs, social media, etc.</p>
                        <Link href='/skills/EGDWNVURqnXoGn8Axut3' className='link pl-5 mt-auto'>Learn More</Link>
                    </section>
                </div>

                <Link
                    href='/skills'
                    className='w-2/4 mx-auto text-center text-white mt-10 mb-10 py-4
                    text-xl bg-blackish border border-green-626 rounded-full shadow-md 
                    hover:bg-white hover:text-slategray 
                    hover:border hover:border-blackish
                    transition duration-500 ease-in-out
                    sm:w-1/4'
                >
                    Explore More
                </Link>

            </article>

            <article className='flex flex-col items-center gap-8 bg-blackish py-24'>
                <h4 className='text-default font-bold text-xl'>Wanna Read Some Tips?</h4>

                <Link href={'/blog'} className='midnight text-sm bg-default px-8 py-1 rounded-lg hover:bg-black/60 hover:text-default
                    transition duration-1000 ease-in-out'>
                    Visit Blog
                </Link>
            </article>
        </div>
        </Layout>
    </main>
  );
};