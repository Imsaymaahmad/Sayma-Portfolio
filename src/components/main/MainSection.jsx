import React, { Component } from 'react'
import styles from './MainStyles.module.css'
import mainImg from '../../assets/Sayma.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
// import Resume from '../../assets/Sayma-Resume.pdf'
import { useTheme } from '../../theme/ThemeContext'


function MainSection() {

    const {theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id='main' className={styles.container}>
         <div className={styles.modeContainer}>
            <img className={styles.main} src={mainImg} alt="Profile Picture" />
            <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" 
            onClick={toggleTheme} />
         </div>

         <div className={styles.info}>
            {/* <h1>SAYMA AHMAD</h1> */}
            <p className={styles.description}>Hey there, I am <b>Sayma Ahmad.</b> <br />An Aspiring Software Developer. Passionate and driven individual. </p>
            <span id='span'>
                <a href="https://x.com/Sayma_ahmadd" target='_blank'>
                    <img src={twitterIcon} alt="Twitter Icon" />
                </a>
                <a href="https://github.com/Imsaymaahmad" target='_blank'>
                    <img src={githubIcon} alt="Github Icon" />
                </a>
                <a href="https://www.linkedin.com/in/sayma-ahmad/" target='_blank'>
                    <img src={linkedinIcon} alt="Linkedin Icon" />
                </a>
            </span>
           
            <a href="#" download>
                <button className='hover'>Contact</button>
            </a>
         </div>
    </section>
  );
}

export default MainSection