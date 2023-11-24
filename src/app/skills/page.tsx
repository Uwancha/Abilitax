import React from 'react';
import Nav from '../components/Header';
import SkillsCategories from '../components/SkillCategories';

const Skills: React.FC = () => {
    return (
        <div className='skills pt-10'>
            <Nav />
           <SkillsCategories /> 
        </div> 
    )
}

export default Skills;
