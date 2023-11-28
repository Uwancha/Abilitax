import React from 'react';
import Nav from '../components/Header';
import SkillsCategories from '../components/SkillCategories';
import Footer from '../components/Footer';

const Skills: React.FC = () => {
    return (
        <div className='skills pt-10'>
            <Nav />
           <SkillsCategories /> 
           <Footer />
        </div> 
    )
}

export default Skills;
