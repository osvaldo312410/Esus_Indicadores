import fundoHome from '../img/fundoHome.jpeg'
import styles from '../components/fundoHome.module.css'

function Home() {
  return (
    <div className={styles.fdHome}>
      <img src={fundoHome} alt="fundoHome" />
    </div>
  );
}

export default Home;
