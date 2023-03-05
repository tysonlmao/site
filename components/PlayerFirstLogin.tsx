import styles from "../styles/Stats.module.css"

export default function networkLevel({ firstLogin }: { firstLogin: number}) {
  const firstLoginEpochTime = firstLogin;
  const firstLoginDate = new Date(firstLoginEpochTime);
  const res = firstLoginDate.getFullYear();
  
  return <h3>Joined in <span className={styles.statvalue}>{res}</span></h3>
}
