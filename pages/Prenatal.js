import styles from '../styles/gestante.module.css'


function Prenatal() {
  return (
  
    <div className={styles.profissional}>

      <div className={styles.tituloCampo}>
        <h2>Dados Do profissional</h2>
      </div>

      <form className={styles.formGestante}>

        <input className={styles.inputProfissional}type="text" placeholder="Profissional" />

        <input className={styles.inputProfissional}type="text" placeholder="CBO" />

        <input className={styles.inputProfissional}type="text" placeholder="CNES" />

        <input className={styles.inputProfissional}type="text" placeholder="INE" />

        <input className={styles.inputProfissional}type="date" />
      </form>

      <div className={styles.tituloCampo}>
        <h2>Dados Do Paciente</h2>
      </div>

      <div className={styles.gestante}>

        <form className={styles.formGestante}>
          
          <input className={styles.inputProfissional}type="text" placeholder="CNS ou CPF" />

          <label className={styles.nomeCampo}>Dum</label><input className={styles.inputProfissional}type="date"/>

          <label className={styles.nomeCampo}>Data de Nascimento</label><input className={styles.inputProfissional}type="date" />
        </form>

      </div>

      <div className={styles.tituloCampo}>
        <h2>Sexo</h2>
      </div>

      <div className={styles.sexo}>
        <form className={styles.radioSexo}>
          <input type="radio"/><label className={styles.labelSexo}>Masculino</label>
          <input type="radio"/><label className={styles.labelSexo}>Feminino</label>
        </form>
      </div>

      

    </div>

  );
}

export default Prenatal;