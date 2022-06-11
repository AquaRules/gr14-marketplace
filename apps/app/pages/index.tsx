import Image from 'next/image';
import { CardList } from '../components/CardList';
import { Navbar } from '../components/Navbar';
import styles from './index.module.scss';

export function Index() {
  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        <Navbar />
        <CardList />
      </div>
      <div className={styles.bg}>
        <Image
          src="/bg.svg"
          alt="background"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Index;
