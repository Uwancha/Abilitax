import React from "react";
import Nav from "@/app/components/Header";
import SkillDetails from "@/app/components/SkillDetails";

export default function SkillDetailsPage({params}) {
  const id = params.id;

  return (
    <main>
      <div className='skill-details pt-10 pb-10'>
        <Nav />
        <SkillDetails id={id} />
      </div>
    </main>
  )
}
