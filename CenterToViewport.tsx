import styles from './ctv.module.css';

export const CenterToViewport = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.centeredToViewport}>
      <div className={styles.contentWrapper}>{children}</div>
    </div>
  );
};
