import React, { Suspense } from 'react';
import SkillsCategories from '../components/SkillCategories';
import Layout from '../components/layoutSkills';
import Loading  from './loading';

const Skills: React.FC = () => {
    return (
        <div className='skills pt-20'>
            <Layout>
            <Suspense fallback={<Loading />}>
            <SkillsCategories /> 
            </Suspense>
            </Layout>
        </div> 
    )
}

export default Skills;
