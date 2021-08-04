import Aside from './Aside';
import styles from './styles.module.css';

type Props = { children: React.ReactNode };

export default function Container({ children }: Props) {
  return (
    <div className={`learn-bar ${styles['learn-bar']}`}>
      <Aside />
      {children}
    </div>
  );
}
