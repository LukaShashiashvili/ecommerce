import Main from '../components/mainStyle/main';
import { NavLink } from '../components/navLink/navLink';
import { Services } from '../home/content/contentSections/services/services';
import Footer from '../home/footer/footer';
import Header from '../home/header/header';
import styles from './about.module.css';
import { InfoAbout } from './infoAbout/infoAbout';
import { OurStory } from './ourStory/ourStory';
import { Staff } from './staff/staff';

export default function About(){
    return(
        <Main clName={styles.main}>
            <Header></Header>
            <NavLink title={'about'}></NavLink>
            <OurStory></OurStory>
            <InfoAbout></InfoAbout>
            <Staff></Staff>
            <Services></Services>
            <Footer></Footer>
        </Main>
        
    )
}