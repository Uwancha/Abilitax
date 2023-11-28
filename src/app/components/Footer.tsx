import React from "react";
import Image from "next/image";
import Link from "next/link";

import tikokIcon from "../../../public/tiktok.svg";
import linkedinIcon from "../../../public/linkedin-original.svg";
import twitterIcon from "../../../public/twitter_3670151.png";
import instagramIcon from "../../../public/instagram.svg";

const Footer: React.FC = () => {

    return (
        <footer className="footer text-slategray flex justify-center gap-20 py-10 border-t">
                <div >
                    <h2 className="mb-2 text-xl font-bold">MerekVerse</h2>
                    <p>MerekVerse provides curated resources <br />
                     for those who want to learn in demand skills</p>
                </div>

                <section className="footer-icons flex flex-col">
                    <h4 className="mb-5 text-xl  font-bold">Social Links</h4>
                    <div className="flex justify-between items-center mb-4">
                        <p>LinkedIn</p>
                        <Image 
                            src={linkedinIcon}
                            width={20} 
                            alt={"link to LinkedIn"}
                        />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p>TikTok</p>
                        <Image 
                            src={tikokIcon} 
                            width={20} 
                            alt={"link to TikTok"} 
                        />
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <p>Twitter</p>
                        <Image 
                            src={twitterIcon} 
                            width={20} 
                            alt={"link to Twitter"} 
                        />
                    </div>
                    <div className="flex justify-between items-center gap-4 mb-4">
                        <p>Instagram</p>
                        <Image 
                            src={instagramIcon} 
                            width={20} 
                            alt={"link to instagram"}
                        />
                    </div>
                </section>
            
                <div className="flex flex-col">
                    <h4 className="mb-5 text-xl font-bold">About Us</h4>
                    <Link href="" className="mb-3">About</Link>
                    <Link href="" className="mb-3">Blog</Link>
                    <Link href="" className="mb-3">Contact</Link>
                </div>
                
                <div className="flex flex-col">
                    <h4 className="mb-5 text-xl font-bold">Guides</h4>
                    <Link href="" className="mb-3">Mentorship</Link>
                    <Link href="" className="mb-3">YouTube Channel</Link>
                    <Link href="" className="mb-3">Blog</Link>
                </div>  
        </footer>

    )
}

export default Footer;