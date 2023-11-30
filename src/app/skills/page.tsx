import React from 'react';
import SkillsCategories from '../components/SkillCategories';
import Layout from '../components/layoutSkills';

const Skills: React.FC = () => {
    return (
        <div className='skills pt-20'>
            <Layout metaTitle={'Collections of best resources to learn in demand skills'}>
            <SkillsCategories /> 
            </Layout>
        </div> 
    )
}

export default Skills;
