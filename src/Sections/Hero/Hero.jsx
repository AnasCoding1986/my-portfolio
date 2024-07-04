import styles from './HeroStyles.module.css';
import profilePic from '../../assets/crop profile.jpg'
import { MdWbSunny } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { useTheme } from '../../assets/Common/ThemeContext';

const Hero = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={profilePic} alt="" />
                <MdWbSunny onClick={toggleTheme}/>
            </div>
            <div className={styles.info}>
                <h1>
                    Azizul Rabby
                    <br />
                    Chowdhury
                </h1>
                <h2>Web Developer</h2>
                <span>
                    <a href="https://www.linkedin.com/feed/" target='_blank'>
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/AnasCoding1986" target='_blank'>
                        <AiFillGithub />
                    </a>
                </span>
                <p>
                    I am a passionate web developer dedicated to crafting dynamic and engaging websites
                </p>
                <a href="https://docs.google.com/document/d/1Jz0-LcfJ2FM94pch0b0eDSF2qzmaalF2YoT6bHbqzkg/edit?usp=drive_link" target='_blank' download>
                    <button className='hover'>Resume</button>
                </a>
            </div>
        </section>
    )
};

export default Hero;