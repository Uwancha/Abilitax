import React from "react";
import Link from "next/link";
import Image from "next/image";

// Layout and components
import Layout from "./layout";
import Nav from "../components/Header";
import Footer from "../components/Footer";

// Creators photo
import creatorsPhoto from './1666710204004.jpeg'

const About: React.FC = () => {
    const headerStyle = { 
        backgroundColor: "#fff",
        position: 'fixed',
        width: '100%',
        top: 0,
        color: "cadetblue",
    
        padding: "1rem 15rem",
        boxShadow:  'rgba(50, 50, 93, 0.1) 0px 13px 27px -25px,rgba(0, 0, 0, 0.25) 0px 8px 16px -20px',
    
      }


    return (
        <Layout 
            title={"About Us"} 
            description={"Learn how AbiliTax helps users develop skills through curated resources and courses."}
        >
            <Nav sty={headerStyle} />
            <div className="about-home w-full">
                <section className="about w-3/5 mx-auto flex flex-col gap-16 mt-16 pt-10 pb-20 px-4" >
                    <h1 className="text-blackish text-center text-4xl font-bold mt-8" >About AbiliTax</h1>
                    <p >
                        AbiliTax is an online skills development platform addressing the growing
                        demand for training in web development, design, marketing and other careers
                        in our country.
                    </p>
                    <p>
                        With Internet resources scattered and often overwhelming for beginners,
                        our goal is to simplify the skills learning journey. AbiliTax curate only the
                        highest quality tutorials, courses and guides from across the web and
                        organize them taxonomically based on topic.
                    </p>
                    <p >
                        In addition to structured content library, AbiliTax produces original learning
                        resources through our blog and YouTube channel. Here you'll find helpful tips,
                        guides, and video explanations to supplement your skills growth.
                    </p>
                    <p >
                        By bringing together resources from across the Internet and creating new
                        content tailored primarily for our local market, AbiliTax aims to become
                        the premier hub for anyone seeking accessible skills training in our country.
                    </p>
                    <p >
                        Start expanding your abilities today by exploring our content or subscribing
                        to our YouTube channel for updates. We look forward to supporting you on
                        your learning journey!
                    </p>
                </section>

            </div>

            <div className="contact border border-t flex items-center justify-center gap-40 py-40">
                <div>
                    <Image
                        src={creatorsPhoto} alt={"creator's photo"} 
                        height={300}
                        className="rounded-md shadow-md hover:shadow-lg"
                    />
                </div> 
                <div className="flex flex-col text-slategray self-start py-20"> 
                    <h3 className="text-2xl font-bold mb-10">Wanna to contact us</h3>
                    <p>
                        Have additional questions? Reach out directly
                    </p>
                    <Link 
                        href="mailto:uwanchaani@gmail.com"
                        className="mt-4 border-b hover:border-none hover:text-gray-400 transition duration-500 ease-in-out"
                    >
                        Send us an email
                    </Link>
                </div>
            </div>

            <Footer />
        </Layout>
    )
}

export default About;