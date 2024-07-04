import styles from './HeroStyles.module.css';
import profilePic from '../../assets/crop profile.jpg'
import { FaLinkedin, FaRegMoon } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { IoMdSunny } from 'react-icons/io';
import { useTheme } from '../../assets/Common/ThemeContext';

const Hero = () => {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? <IoMdSunny /> : <FaRegMoon />;

    return (
        <section id='hero' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={profilePic} alt="Azizul Rabby Chowdhury" />
                <div onClick={toggleTheme}>
                    {themeIcon}
                </div>
            </div>
            <div className={styles.info}>
                <h1>
                    Azizul Rabby
                    <br />
                    Chowdhury
                </h1>
                <h2>Web Developer</h2>
                <span>
                    <a href="https://www.linkedin.com/feed/" target='_blank' rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                    <a href="https://github.com/AnasCoding1986" target='_blank' rel="noopener noreferrer">
                        <AiFillGithub />
                    </a>
                </span>
                <p>
                    I am a passionate web developer dedicated to crafting dynamic and engaging websites.
                </p>
                <a href="https://docs.google.com/document/d/1Jz0-LcfJ2FM94pch0b0eDSF2qzmaalF2YoT6bHbqzkg/edit?usp=drive_link" target='_blank' rel="noopener noreferrer" download>
                    <button className={styles.hover}>Resume</button>
                </a>
            </div>
        </section>
    );
};

export default Hero;






