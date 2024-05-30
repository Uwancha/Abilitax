import React, { Suspense } from "react";
import SkillDetails from "@/app/components/SkillDetails";
import Layout from "@/app/components/layoutSkillDetails";
import Loading from "../loading";

// Firebase configurations
import { db } from '../../firebaseConfig';
import { collection, doc, getDoc} from 'firebase/firestore';

// Define interfaces

interface Resource {
  name: string;
  about: string;
  website: string;
  link: string;
}

interface Skill {
  name: string;
  resources: Resource[];
  courses: Resource[];
  books: Resource[];
  youtube: Resource[];
  others: Resource[];
  conclusion: string;
  conclusionmore: string;
  conclusionlast: string;
}

async function getSkillDetails(id: string): Promise<Skill | null>  {

  const collectionRef = collection(db, 'skills');
  const docRef = doc(collectionRef, id);

  const docSnapshot = await getDoc(docRef);
  try {
    if (docSnapshot.exists()) {
      return docSnapshot.data() as Skill;
    } else {
      console.error('Skill does not exist');
      return null;
    }
  } catch (error) {
    throw Error;
  };
};

export default async function SkillDetailsPage({ params } : {params: { id: string }}) {
  const skill = await getSkillDetails(params.id)

  return (
    <div className='skill-details sm:py-10'>
      <Layout metaTitle={'Skill details | Abilitax'}>
        <Suspense fallback={<Loading />} >
          { skill !== null && 
            <SkillDetails skill={skill} />
          }
        </Suspense>
      </Layout>
    </div>
  )
};
