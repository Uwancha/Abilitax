import React, { Suspense } from "react";
import Nav from "@/app/components/Header";
import SkillDetails from "@/app/components/SkillDetails";
import Footer from "@/app/components/Footer";
import Layout from "@/app/components/layoutSkillDetails";
import Loading from "../loading";

function SkillDetailsPage(params: { id: string; }) {
  const id = params.id;

  return (
    <main>
      
      <div className='skill-details pt-20 '>
        <Layout metaTitle={'gjdgjfgkjfgkj'}>
          <Suspense fallback={<Loading />} >
          <SkillDetails id={id} />
          </Suspense>
        </Layout>
      </div>
    </main>
  )
}

export { SkillDetailsPage }
