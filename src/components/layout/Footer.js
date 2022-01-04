import styles from './Footer.module.css'

function Footer() {
    return (
      <footer className={styles.footer}>
        <p className={styles.copy_right}>
          <span>Agenda</span> &copy; 2021
        </p>
      </footer>
    );
  }
  
  export default Footer;