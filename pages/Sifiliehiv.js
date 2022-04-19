import styles from '../styles/gestante.module.css'

function Sifilisehiv() {
    return (
      <div className={styles.profissional}>
      <form className={styles.formGestante}>

        <input className={styles.inputProfissional}type="text" placeholder="Profissional" />
        <input className={styles.inputProfissional}type="text" placeholder="CBO" />
        <input className={styles.inputProfissional}type="text" placeholder="CNES" />
        <input className={styles.inputProfissional}type="text" placeholder="INE" />
        <input className={styles.inputProfissional}type="date" />
      </form>

      <div className={styles.gestante}>
        <form className={styles.formGestante}>
        <input className={styles.inputProfissional}type="text" placeholder="Paciente" />
          <input className={styles.inputProfissional}type="text" placeholder="CNS" />
          <input className={styles.inputProfissional}type="text" placeholder="CPF" />
          Dum <input className={styles.inputProfissional}type="date"/>
          <input className={styles.inputProfissional}type="date" />
        </form>
      </div>

    </div>
    );
  }
  
  export default Sifilisehiv;