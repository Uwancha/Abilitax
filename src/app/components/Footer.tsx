import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {

    return (
        <footer className="bg-whitesmoke midnight flex flex-col gap-16 py-16 px-8
        sm:flex-row lg:gap-32 lg:justify-center border-t border-blue-400">
            <div >
                <Link href='/' className="flex items-center justify-start mb-6 ml-auto hover:opacity-50" >
                    <Image src={'/logo-.png'} alt="logo"  width={100} height={150} priority />
                    <h2 className="mb-2 text-2xl font-semi-bold" style={{marginLeft:'-20px'}}>Abilitax</h2>
                </Link>
                <h5 className="px-2 border-b border-black font-semi-bold">Abilitax, starter pack for your first or next career!</h5>
            </div>

            <section className="flex flex-col pl-8 sm:pl-0 ">
                <h4 className="mb-5 text-xl text-blackish font-semi-bold">Social Links</h4>
                <Link href={'https://www.linkedin.com/in/sitota'}
                    className="w-2/4 flex items-center justify-start mb-4 hover:opacity-50
                    sm:w-full sm:gap-4 sm:justify-between text-sm"
                >
                    <p>LinkedIn</p>
                    <Image 
                        src={'/linkedin-original.svg'}
                        width={20} 
                        height={20}
                        alt={"link to LinkedIn"}
                        className="ml-auto"
                    />
                </Link>
                <Link href={'https://www.tiktok.com/@uwancha_?_t=8i4EEQfkwa6&_r=1'} 
                    className="w-2/4 flex items-center justify-start mb-4 hover:opacity-50
                    sm:w-full sm:gap-4 sm:justify-between text-sm"
                >
                    <p>TikTok</p>
                    <Image 
                        src={'/tiktok.svg'} 
                        width={20} 
                        height={20}
                        alt={"link to TikTok"} 
                        className="ml-auto"
                    />
                </Link>
                <Link href={'https://instagram.com/sitota_a?igshid=MzMyNGUyNmU2YQ=='} 
                    className="w-2/4 flex items-center justify-start mb-4 hover:opacity-50
                    sm:w-full sm:gap-4 sm:justify-between text-sm"
                >
                    <p>Instagram</p>
                    <Image 
                        src={'/instagram.svg'} 
                        width={20} 
                        height={20}
                        alt={"link to instagram"}
                        className="ml-auto"
                    />
                </Link>
                <Link href={'https://t.me/abilitax'} 
                    className="w-2/4 flex items-center justify-start mb-4 hover:opacity-50
                    sm:w-full sm:gap-4 sm:justify-between text-sm"
                >
                    <p>Telegram</p>
                    <Image 
                        src={'/telegram.png'} 
                        width={20} 
                        height={20}
                        alt={"link to instagram"}
                        className="ml-auto"
                    />
                </Link>
            </section>
            
            <div className="flex flex-col pl-8 sm:pl-0">
                <h4 className="mb-5 text-xl text-blackish font-semi-bold">About Us</h4>
                <Link href="/about" className="mb-3 text-sm hover:opacity-50">About</Link>
                <Link href="/blog" className="mb-3 text-sm hover:opacity-50">Blog</Link>
                <Link href="/about#contact" className="mb-3 text-sm hover:opacity-50">Contact</Link>
            </div>
                
            <div className="flex flex-col pl-8 sm:pl-0">
                <h4 className="mb-5 text-xl text-blackish font-semi-bold">Guides</h4>
                <Link href="https://www.youtube.com/channel/UCdPLGussDH7auaCYrc05M3Q" className="mb-3 text-sm hover:opacity-50">YouTube Channel</Link>
                <Link href="/blog" className="mb-3 text-sm hover:opacity-50">Blog</Link>
            </div>  
        </footer>
    );
};

export default Footer;