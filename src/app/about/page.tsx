import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Layout and components
import Layout from './layout';
import Nav from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
    return (
        <Layout >
            <Nav />
            <div className='w-full bg-default'>
                <section className='midnight sm:w-3/5 mx-auto flex flex-col gap-8 mt-10 pb-20 px-4' >
                    <h1 className='text-center text-3xl mt-4'>About Abilitax</h1>
                    <p className='sm:text-xl font-light'>
                        Abilitax is a platform where people get starter packs for their first or next carrer in varios discplines such web development, design, marketing and others.
                    </p>
                    <p className='sm:text-xl font-light'>
                        With Internet resources scattered and often overwhelming for beginners,
                        our goal is to simplify the skills learning journey. AbiliTax curate only the
                        highest quality tutorials, courses and guides from across the web and
                        organize them taxonomically based on topic.
                    </p>
                    <p className='sm:text-xl font-light' >
                        In addition to structured content library, AbiliTax produces original learning
                        resources through our blog and YouTube channel. Here you ll find helpful tips,
                        guides, and video explanations to supplement your skills growth.
                    </p>
            
                    <p className='sm:text-xl font-light' >
                        Start expanding your abilities today by exploring our content or subscribing
                        to our YouTube channel for updates. We look forward to supporting you on
                        your learning journey!
                    </p>
                </section>

            </div>

            <div className='bg-blackish border border-t flex flex-col-reverse px-5 sm:px-0 sm:items-center sm:justify-center
             sm:gap-40 sm:flex-row py-40'
            >
                <div>
                    <Image
                        src={'/1666710204004.jpeg'} alt={'creator photo'} 
                        width={300}
                        height={300}
                        className='rounded-md shadow-md hover:shadow-lg'
                    />
                </div> 
                <div id='contact' className='flex flex-col text-default self-start py-20'> 
                    <h3 className='text-2xl font-bold mb-10'>Want to contact us?</h3>
                    <p>
                        Have additional questions? Reach out directly
                    </p>
                    <Link 
                        href='mailto:uwanchaani@gmail.com'
                        className='mt-4 border-b hover:border-none hover:text-gray-400 transition duration-500 ease-in-out'
                    >
                        Send us an email
                    </Link>
                </div>
            </div>

            <Footer />
        </Layout>
    );
};

export default About;