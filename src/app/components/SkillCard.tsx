import React from "react";
import Link from "next/link";

const SkillCard = ({skill}) => {
    return (
        <div className="flex flex-col gap-4 p-4 rounded-lg shadow-lg hover:shadow">
            <h4 className="text-slategray font-bold">{skill.name}</h4>
            <p className="text-slategray">{skill.description}</p>
            <Link href={`/skills/${skill.id}`} className='link'>See Full Details</Link>
        </div>
    );
};

export default SkillCard;