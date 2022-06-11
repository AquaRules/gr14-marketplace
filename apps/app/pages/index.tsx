import { Navbar } from '../components/Navbar';
import styles from './index.module.scss';

export function Index() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <Navbar/>
      </div>
    </div>
  );
}

export default Index;
