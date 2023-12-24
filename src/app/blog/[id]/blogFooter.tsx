import Image from "next/image";
import Link from "next/link";

// Social icons and photo 
import linkedinIcon from "../../../../public/linkedin-original.svg";
import instagramIcon from "../../../../public/instagram.svg";
import githubIcon from "../../../../public/github.svg";
import myphoto from "../../../../public/myPhoto.jpeg";



export default function BlogFooter() {
  return (
    <div className="w-full sm:w-1/2 flex flex-col gap-6 bg-white mx-auto mt-10 p-10 rounded-lg">
        <section className="flex flex-col gap-10">
            <div className="flex items-center gap-5">
                <Image
                    src={myphoto}
                    width={50}
                    height={50}
                    alt={"link to LinkedIn"}
                    className="rounded-full"
                />
                <p className="text-xl">Sitota Alemu</p>
            </div>
            <p className="mb-5 text-xl font-light">Full-Stack Developer with a passion for continuous learning and improvement. Creator and maintainer of Abilitax. Enthusiastic about sharing knowledge and experiences.</p>
        </section>
        <section className="flex flex-col py-5 px-2 bg-whitesmoke rounded-md">
            <p className="mb-5 text-xl  font-light">Let&apos;s connect</p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link href={'https://www.linkedin.com/in/sitota'}
                    className="flex items-center hover:opacity-50
                    sm:gap-1"
                >
                    <p className="font-light" >LinkedIn</p>
                    <Image
                        src={linkedinIcon}
                        width={20}
                        alt={"link to LinkedIn"}
                        className="ml-auto mr-4 sm:ml-0 rounded-full"
                    />
                </Link>
                <Link href={'https://instagram.com/sitota_a?igshid=MzMyNGUyNmU2YQ=='}
                    className="flex items-center hover:opacity-50
                    sm:gap-1"
                >
                    <p className="font-light" >Instagram</p>
                    <Image
                        src={instagramIcon}
                        width={20}
                        alt={"link to instagram"}
                        className="ml-auto mr-4 sm:ml-0 rounded-full"
                    />
                </Link>
                <Link href={'https://t.me/abilitax'}
                    className="flex items-center hover:opacity-50
                    sm:gap-1"
                >
                    <p className="font-light" >GitHub</p>
                    <Image
                        src={githubIcon}
                        width={20}
                        alt={"link to github"}
                        className="ml-auto mr-4 sm:ml-0 rounded-full"
                    />
                </Link>
            </div>
        </section>
        <p className="mt-5 text-xl font-normal">Always Thriving to Learn:</p>
        <p className="mb-5 text-xl font-light">&quot;I love sharing. I share what I learned, and I learn more through sharing.&quot;</p>
    </div>
  )
}
