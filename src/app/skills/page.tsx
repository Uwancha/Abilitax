import React from 'react';
import Nav from '../components/Header';
import SkillsCategories from '../components/SkillCategories';

const Skills: React.FC = () => {
    

    return (
        <div className='skills h-screen py-10 background-gray'>
            <Nav />
           <SkillsCategories /> 
        </div>  
    )
}

export default Skills;
