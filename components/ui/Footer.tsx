import styles from '../../styles/Home.module.css';

export default function Footer(): JSX.Element {
  return (
  <footer className={styles.footer}>&copy; StubbyDigits, {new Date().getFullYear()}</footer>
  );
};
