import React from "react";
import Link from "next/link";

export const SideBar: React.FC = () => {
    return (
        <article className="text-slategray flex flex-col gap-4 ml-20 ">
            <Link href={''} className="filters" >
                Front-End Development
            </Link>
            <Link href={''} className="filters" >
                Freelancing
            </Link>
            <Link href={''} className="filters" >
                Back-End Development
            </Link>
            <Link href={''} className="filters" >
                Social Media Marketing 
            </Link>
            <Link href={''} className="filters" >
                Content Creating
            </Link>
            <Link href={''} className="filters" >
                UX/UI Design
            </Link>
            <Link href={''} className="filters" >
                Mobile App Development
            </Link>
            <Link href={''} className="filters" >
                Cloud Computing
            </Link>
            <Link href={''} className="filters" >
                Graphic Design
            </Link>
            <Link href={''}  className="filters" >
                Video Editing
            </Link>
            <Link href={''}  className="filters" >
                Self Development
            </Link>
            <Link href={''}  className="filters" >
                Other
            </Link>
        </article>
    )
}