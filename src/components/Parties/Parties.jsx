import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useParties } from "../../hooks/useParties"
import styles from  './Parties.module.css'

const Parties = () => {


  const { dados, fetchData } = useParties()

  useEffect(() => {
    fetchData()
  }, [])

  const cu = new FileReader()
  const t = (valor) => {
    cu.readAsDataURL(valor)
  }

  return (
    <div className={styles.partiesContainerBg}>
      {dados && dados.map((dado) => (
        <div key={dado._id} className={styles.partiesContainer}>
          <img className={styles.fotos} src={`${dado.image}`} alt="" />
          <h1>{dado.title}</h1>
          {console.log(dado.image)}
          <Link to={`party/${dado._id}`}>Detalhes</Link>
        </div>
      ))}
    </div>
  )
}

export default Parties