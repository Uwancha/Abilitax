import React from "react";
import Image from "next/image";
import Link from "next/link";

import tikokIcon from "../../../public/tiktok.svg";
import linkedinIcon from "../../../public/linkedin-original.svg";
import instagramIcon from "../../../public/instagram.svg";
import telegramIcon from "../../../public/telegram.png";

const Footer: React.FC = () => {

    return (
        <footer className="footer text-blackish flex justify-center gap-20 py-10">
                <div >
                    <Link href='/' className="flex items-center justify-start mb-6 ml-auto hover:opacity-50" >
                        <Image src={'/logo-.png'} alt="logo"  width={100} height={150} priority />
                        <h2 className="abilitax mb-2 text-silver text-3xl font-bold" style={{marginLeft:'-20px'}}>Abilitax</h2>
                    </Link>
                    <h5 className="font-light">AbiliTax curate only the highest quality curriculums, tutorials, courses <br /> 
                    and guides from across the web and organize them taxonomically.</h5>
                </div>

                <section className="footer-icons flex flex-col">
                    <h4 className="mb-5 text-xl  font-light">Social Links</h4>
                    <Link href={'https://www.linkedin.com/in/sitota'} className="flex justify-between items-center mb-4 hover:opacity-50">
                        <p className="font-light" >LinkedIn</p>
                        <Image 
                            src={linkedinIcon}
                            width={20} 
                            alt={"link to LinkedIn"}
                            className=""
                        />
                    </Link>
                    <Link href={'https://www.tiktok.com/@uwancha_?_t=8i4EEQfkwa6&_r=1'} className="flex justify-between items-center mb-4 hover:opacity-50">
                        <p className="font-light" >TikTok</p>
                        <Image 
                            src={tikokIcon} 
                            width={20} 
                            alt={"link to TikTok"} 
                            className=""
                        />
                    </Link>
                    <Link href={'https://instagram.com/sitota_a?igshid=MzMyNGUyNmU2YQ=='} className="flex justify-between items-center gap-4 mb-4 hover:opacity-50">
                        <p className="font-light" >Instagram</p>
                        <Image 
                            src={instagramIcon} 
                            width={20} 
                            alt={"link to instagram"}
                            className=""
                        />
                    </Link>
                    <Link href={'https://t.me/abilitax'} className="flex justify-between items-center gap-4 mb-4 hover:opacity-50">
                        <p className="font-light" >Telegram</p>
                        <Image 
                            src={telegramIcon} 
                            width={20} 
                            alt={"link to instagram"}
                            className=""
                        />
                    </Link>

                </section>
            
                <div className="flex flex-col">
                    <h4 className="mb-5 text-xl font-light">About Us</h4>
                    <Link href="/about" className="mb-3 font-light hover:opacity-50">About</Link>
                    <Link href="/blog" className="mb-3 font-light hover:opacity-50">Blog</Link>
                    <Link href="/about#contact" className="mb-3 font-light hover:opacity-50">Contact</Link>
                </div>
                
                <div className="flex flex-col">
                    <h4 className="mb-5 text-xl font-light">Guides</h4>
                    <Link href="https://www.youtube.com/channel/UCdPLGussDH7auaCYrc05M3Q" className="mb-3 font-light hover:opacity-50">YouTube Channel</Link>
                    <Link href="/blog" className="mb-3 font-light hover:opacity-50">Blog</Link>
                </div>  
        </footer>

    )
}

export default Footer;