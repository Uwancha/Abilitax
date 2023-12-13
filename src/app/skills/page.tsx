import React, { Suspense } from 'react';
import SkillsCategories from '../components/SkillCategories';
import Layout from '../components/layoutSkills';
import Loading  from './loading';
import Footer from '../components/Footer';
import Nav from '../components/Header';

const Skills: React.FC = () => {
    return (
        <>
        <Nav />
        <div className='skills pt-20'>
            <Layout>
            <Suspense fallback={<Loading />}>
            <SkillsCategories /> 
            </Suspense>
            </Layout>
            <Footer />
        </div> 
        </>
    )
}

export default Skills;
