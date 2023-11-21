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


export default function Home() {
  return (
    <main>
        <Nav />
      <div className="home">
            <article className="hero">
                <h1>
                 Home of curated resources for your first or next carrier!
                </h1>
            </article>

            <article className="article-about">
                <h2 className="text-3xl">We're Here For You</h2>
                <p>
                    We make the process of learning in-demand skills easy, providing the best curated resources and tips so that you don't have to waste time searching for resources!
                    Start your learning journey today!
                </p>
               
            </article>

            <article className="article-talents">
                <h3 className="text-slategray font-bold text-2xl text-center">Most Sought-After Talents</h3>
                
                <div className="talents">
                    <section className="skill-card py-5"> 
                        <h4 className="text-slategray font-bold text-xl pl-5">Software Engineering</h4>
                        <p className="text-slategray pl-5">A brief introduction about the skill...</p>
                        <Link href="" className="pl-5">Learn More</Link>
                    </section>
                    <section className="skill-card py-5" >
                        <h4 className="text-slategray font-bold text-xl pl-5">Data Science</h4>
                        <p className="text-slategray pl-5">A brief introduction about the skill...</p>
                        <Link href="" className="pl-5">Learn More</Link>
                    </section>
                    <section className="skill-card py-5" >
                        <h4 className="text-slategray font-bold text-xl pl-5">Cloud Computing</h4>
                        <p className="text-slategray pl-5">A brief introduction about the skill...</p>
                        <Link href="" className="pl-5">Learn More</Link>
                    </section>
                    <section className="skill-card py-5" >
                        <h4 className="text-slategray font-bold text-xl pl-5">UI/UX Design</h4>
                        <p className="text-slategray pl-5">A brief introduction about the skill...</p>
                        <Link href="" className="pl-5">Learn More</Link>
                    </section>
                    <section className="skill-card py-5" >
                        <h4 className="text-slategray font-bold text-xl pl-5">Video Editing</h4>
                        <p className="text-slategray pl-5">A brief introduction about the skill...</p>
                        <Link href="" className="pl-5">Learn More</Link>
                    </section>
                    <section className="skill-card py-5" >
                        <h4 className="text-slategray font-bold text-xl pl-5">Digital Marketing</h4>
                        <p className="text-slategray pl-5">A brief introduction about the skill...</p>
                        <Link href="" className="pl-5">Learn More</Link>
                    </section>
                </div>

            </article>

            <article className="article-blog">
                <h3>Some of the Best Tips for Your Journey</h3>
                
                <div className="featured-blogs">
                    <section className="blog-card py-5" >
                        <h4>What is a rabbit hole and how to escape it</h4>
                        <Image 
                          src={rabbitHoleImage}
                          width={40} alt={""}
                          quality={100}
                          className="blog-image"
                        />
                        <p className="pl-3">A brief introduction about the topic...</p>
                        <Link href={''}>Continue reading...</Link>  
                    </section>
                    <section className="blog-card py-5" >
                        <h4>What is a tutorial hell</h4>
                        <Image 
                          src={tutorailHellImage}
                          width={40} alt={""}
                          quality={100}
                          className="blog-image"
                        />
                        <p className="pl-3">A brief introduction about the topic...</p>
                        <Link href={''}>Continue reading...</Link>
                    </section>
                    <section className="blog-card py-5" >
                        <h4>Which skill Should I pick?</h4>
                        <Image 
                          src={pickSkillsImage}
                          width={40} alt={""}
                          quality={100}
                          className="blog-image"
                        />
                        <p className="pl-3">A brief introduction about the topic...</p>
                        <Link href={''}>Continue reading...</Link>
                    </section>
                    <section className="blog-card py-5" >
                        <h4>How to use AI as an aspiring Developer</h4>
                        <Image 
                          src={aiImage}
                          width={40} alt={""}
                          quality={100}
                          className="blog-image"
                        />
                        <p className="pl-3">A brief introduction about the topic...</p>
                        <Link href={''}>Continue reading...</Link>
                    </section>
                    <section className="blog-card py-5">
                        <h4>Will AI replace programmers?</h4>
                        <Image 
                          src={willAIImage}
                          width={40} alt={""}
                          quality={100}
                          className="blog-image"
                        />
                        <p className="pl-3">A brief introduction about the topic...</p>
                        <Link href={''}>Continue reading...</Link>
                    </section>
                    <section className="blog-card py-5">
                        <h4>5 best Project ideas for front-end developer</h4>
                        <Image 
                          src={projectIdeasImage}
                          width={40} alt={""}
                          quality={100}
                          className="blog-image"
                        />
                        <p className="pl-3">A brief introduction about the topic...</p>
                        <Link href={''}>Continue reading...</Link>
                    </section>
                </div>

            </article>
        </div>
    </main>
  )
}
