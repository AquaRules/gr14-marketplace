import { CardList } from '../components/CardList';
import styles from './index.module.scss';

export function Index() {
  return (
    <div className={styles.page}>
        <CardList />
    </div>
  );
}

export default Index;
