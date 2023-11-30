import Image from "next/image";
import Link from "next/link";

//Image assets
import rabbitHoleImage from "../../public//man-1204925_640.jpg";
import tutorailHellImage from "../../public/man-7412527_640.png"
import willAIImage from "../../public/artificial-intelligence-3382507_640.jpg";
import aiImage from "../../public/artificial-intelligence-6767502_640.jpg";
import pickSkillsImage from "../../public/cartoon-3082809_640.png";
import projectIdeasImage from "../../public/website-3374825_640.jpg"
import Nav from "./components/Header";
import Footer from "./components/Footer";
import Layout from "./components/layoutHome";


export default function Home() {
  return (
    <main>
    <Layout metaTitle={'dfkndkfjkdfdf'} >
      <div className="home">
            <article className="hero">
                <h1 className="text-2xl font-bold mt-60 pl-60">
                 Collections of curated resources for your first or next carrier!
                </h1>

                <article className="article-about text-xl mt-10 pl-60">
                    <h2>
                        Often learning new skill is not frustrating but picking the right resources!
                    </h2>
                    <h2 className="mt-4">
                        We've collections best curaated resources to kick start your learning journey so you don't have to waste time searching them!
                    </h2>

                    <Link
                        href="/skills"
                        className="w-3/4 mr-auto text-center text-white mt-20 py-4
                        text-xl bg-green border border-green-626 rounded-full shadow-md 
                        hover:bg-white hover:text-slategray 
                        hover:border hover:border-green-626
                        transition duration-500 ease-in-out"
                    >
                        Explore
                    </Link>
                </article>
            </article>

            <article className="article-talents">
                <h3 className="text-slategray font-bold text-2xl text-center">Most Sought-After Talents</h3>
                
                <div className="talents">
                    <section className="skill-card py-5"> 
                        <h4 className="text-slategray font-bold text-xl pl-5">Software Engineering</h4>
                        <p className="text-slategray pl-5">A brief introduction about the skill...</p>
                        <Link href="" className="link pl-5">Learn More</Link>
                    </section>
                    <section className="skill-card py-5" >
                        <h4 className="text-slategray font-bold text-xl pl-5">Data Science</h4>
                        <p className="text-slategray pl-5">A brief introduction about the skill...</p>
                        <Link href="" className="link pl-5">Learn More</Link>
                    </section>
                    <section className="skill-card py-5" >
                        <h4 className="text-slategray font-bold text-xl pl-5">Cloud Computing</h4>
                        <p className="text-slategray pl-5">A brief introduction about the skill...</p>
                        <Link href="" className="link pl-5">Learn More</Link>
                    </section>
                    <section className="skill-card py-5" >
                        <h4 className="text-slategray font-bold text-xl pl-5">UI/UX Design</h4>
                        <p className="text-slategray pl-5">A brief introduction about the skill...</p>
                        <Link href="" className="link pl-5">Learn More</Link>
                    </section>
                    <section className="skill-card py-5" >
                        <h4 className="text-slategray font-bold text-xl pl-5">Video Editing</h4>
                        <p className="text-slategray pl-5">A brief introduction about the skill...</p>
                        <Link href="" className="link pl-5">Learn More</Link>
                    </section>
                    <section className="skill-card py-5" >
                        <h4 className="text-slategray font-bold text-xl pl-5">Digital Marketing</h4>
                        <p className="text-slategray pl-5">A brief introduction about the skill...</p>
                        <Link href="" className="link pl-5">Learn More</Link>
                    </section>
                </div>

            </article>

            <article className="article-blog">
                <h4 className="text-slategray text-center font-bold text-2xl" >Some of the Best Tips for Your Journey</h4>
                
                <div className="featured-blogs">
                    <section className="blog-card py-5" >
                        <h4 className="text-slategray font-bold text-xl" >What is a rabbit hole and how to escape it</h4>
                        <Image 
                          src={rabbitHoleImage}
                          width={40} alt={""}
                          quality={100}
                          className="blog-image"
                        />
                        <p className="text-slategray pl-3">A brief introduction about the topic...</p>
                        <Link href={''} className="link mr-auto pl-3" >Continue reading...</Link>  
                    </section>
                    <section className="blog-card py-5" >
                        <h4 className="text-slategray font-bold text-xl " >What is a tutorial hell</h4>
                        <Image 
                          src={tutorailHellImage}
                          width={40} alt={""}
                          quality={100}
                          className="blog-image"
                        />
                        <p className="text-slategray pl-3">A brief introduction about the topic...</p>
                        <Link href={''} className="link mr-auto pl-3" >Continue reading...</Link>
                    </section>
                    <section className="blog-card py-5" >
                        <h4 className="text-slategray font-bold text-xl " >Which skill Should I pick?</h4>
                        <Image 
                          src={pickSkillsImage}
                          width={40} alt={""}
                          quality={100}
                          className="blog-image"
                        />
                        <p className="text-slategray pl-3">A brief introduction about the topic...</p>
                        <Link href={''} className="link mr-auto pl-3" >Continue reading...</Link>
                    </section>
                    <section className="blog-card py-5" >
                        <h4 className="text-slategray font-bold text-xl " >How to use AI as an aspiring Developer</h4>
                        <Image 
                          src={aiImage}
                          width={40} alt={""}
                          quality={100}
                          className="blog-image"
                        />
                        <p className="text-slategray pl-3">A brief introduction about the topic...</p>
                        <Link href={''} className="link mr-auto pl-3" >Continue reading...</Link>
                    </section>
                    <section className="blog-card py-5">
                        <h4 className="text-slategray font-bold text-xl "  >Will AI replace programmers?</h4>
                        <Image 
                          src={willAIImage}
                          width={40} alt={""}
                          quality={100}
                          className="blog-image"
                        />
                        <p className="text-slategray pl-3">A brief introduction about the topic...</p>
                        <Link href={''} className="link mr-auto pl-3" >Continue reading...</Link>
                    </section>
                    <section className="blog-card py-5">
                        <h4 className="text-slategray font-bold text-xl" >5 best Project ideas for front-end developer</h4>
                        <Image 
                          src={projectIdeasImage}
                          width={40} alt={""}
                          quality={100}
                          className="blog-image"
                        />
                        <p className="text-slategray pl-3">A brief introduction about the topic...</p>
                        <Link href={''} className="link mr-auto pl-3" >Continue reading...</Link>
                    </section>
                </div>

            </article>
        </div>
        </Layout>
    </main>
  )
}
