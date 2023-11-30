import React from "react";
import Nav from "@/app/components/Header";
import SkillDetails from "@/app/components/SkillDetails";
import Footer from "@/app/components/Footer";
import Layout from "@/app/components/layoutSkillDetails";

export default function SkillDetailsPage({params}) {
  const id = params.id;

  return (
    <main>
      
      <div className='skill-details pt-10 '>
        <Layout metaTitle={'gjdgjfgkjfgkj'}>
          <SkillDetails id={id} />
        </Layout>
      </div>
    </main>
  )
}
