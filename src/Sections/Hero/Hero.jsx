import styles from './HeroStyles.module.css';
import profilePic from '../../assets/crop profile.jpg'

const Hero = () => {
    return <section id='hero'>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={profilePic} alt="" />
        </div>
    </section>
};

export default Hero;