import styles from './ObsItem.module.css'

const ObsItem = () => {
  const cart = []
  const openObs = ''
  const openCart = false

  function closeObsBox() {}

  function saveObs() {}

  return (
    <div className={styles.bgObs}>
      <div className={styles.areaObs}>
        <button className={styles.btnClose} onClick={closeObsBox}>
          x
        </button>
        <h3>Adicionar observação</h3>
        <textarea type="text" onChange={e => setObs(e.target.value)} />
        <div className={styles.btnsObs}>
          <button onClick={closeObsBox}>Cancelar</button>
          <button onClick={saveObs}>Salvar</button>
        </div>
      </div>
    </div>
  )
}

export default ObsItem
