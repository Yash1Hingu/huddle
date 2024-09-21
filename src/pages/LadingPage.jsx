import FeturesSection from '../components/LadingPage/FeturesSection';
import FooterSection from '../components/LadingPage/FooterSection';
import HeroSection from '../components/LadingPage/HeroSection';
import Layout from '../layouts/Layout';
import classes from './LadingPage.module.css';

function LadingPage() {
    return (<div className='overflow-hidden'>
        <Layout
        >
            <HeroSection />
        </Layout>
        <FeturesSection />
        <FooterSection />
    </div>
    )
}

export default LadingPage
