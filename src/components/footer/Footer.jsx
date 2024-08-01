import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 All Rights Reserved. <br />
        sayma.ahmadd@gmail.com
      </p>
    </section>
  );
}

export default Footer;
