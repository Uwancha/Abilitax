import React from "react";
import Link from "next/link";

// Define interfaces
interface Skill {
  id: string;
  name: string;
  description: string;
};
  
interface SkillCardProps {
  skill: Skill;
};

const SkillCard: React.FC<SkillCardProps> = ({skill}) => {
  return (
    <div className="flex flex-col gap-8 rounded-lg shadow-lg hover:shadow">
      <h4 className="font-bold text-center">{skill.name}</h4>
      <p className="font-light">{skill.description}</p>
      <Link href={`/skills/${skill.id}`} className='lime text-center cursor-pointer'>See Full Details</Link>
    </div>
  );
};

export default SkillCard;