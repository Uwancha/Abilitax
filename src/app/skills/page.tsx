import SkillsCategories from '../components/SkillCategories';
import Layout from '../components/layoutSkills';

const Skills: React.FC = () => {
    return (
        <div className='bg-default pt-20'>
            <Layout>
                <SkillsCategories /> 
            </Layout>
        </div> 
    );
};

export default Skills;
