import SkillsCategories from '../components/SkillCategories';
import Layout from '../components/layoutSkills';
import Footer from '../components/Footer';
import Nav from '../components/Header';

const Skills: React.FC = () => {
    return (
        <>
            <Nav />
            <div className='bg-default pt-20'>
                <Layout>
                    <SkillsCategories /> 
                </Layout>
                <Footer />
            </div> 
        </>
    );
};

export default Skills;
