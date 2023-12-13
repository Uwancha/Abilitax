import React, { Suspense } from "react";
import SkillDetails from "@/app/components/SkillDetails";
import Layout from "@/app/components/layoutSkillDetails";
import Loading from "../loading";


// Firebase configurations
import { db } from '../../firebaseConfig';
import { collection, doc, getDoc} from 'firebase/firestore';

async function getSkillDetails(id, db) {

  const collectionRef = collection(db, 'skills');
  const docRef = doc(collectionRef, id);

  const docSnapshot = await getDoc(docRef);
  try {
    if (docSnapshot.exists()) {
      console.log(docSnapshot.data())
      return docSnapshot.data();
    } else {
      console.error('Skill does not exist');
      return null;
    }
  
  } catch (error) {
    console.error('Error fetching skill details:', error);
    return null
  }
}

export default async function SkillDetailsPage({params}) {
  const skill = await getSkillDetails(params.id, db)

  return (
    <main>
      
      <div className='skill-details pt-20 '>
        <Layout metaTitle={'Skill details | Abilitax'}>
          <Suspense fallback={<Loading />} >
          <SkillDetails skill={skill} />
          </Suspense>
        </Layout>
      </div>
    </main>
  )
}
