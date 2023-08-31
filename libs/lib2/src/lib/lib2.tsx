import { Lib1 } from '@test/lib1';
import styles from './lib2.module.scss';

/* eslint-disable-next-line */
export interface Lib2Props {}

export function Lib2(props: Lib2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Lib2!</h1>
      <Lib1 />
    </div>
  );
}

export default Lib2;
