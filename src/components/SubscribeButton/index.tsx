import styles from './styles.module.scss';

interface Subscribeprops {
  priceId: string;
}
export function SubscribeButton({ priceId }: Subscribeprops) {
  return (
    <button type="button" className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
