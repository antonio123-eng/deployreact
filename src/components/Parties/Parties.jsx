import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useParties } from "../../hooks/useParties"
import styles from  './Parties.module.css'

const Parties = () => {


  const { dados, fetchData } = useParties()

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={styles.partiesContainerBg}>
      {dados && dados.map((dado) => (
        <div key={dado._id} className={styles.partiesContainer}>
          <img className={styles.fotos} src={`https://nadastestert.onrender.com/files/parties/${dado.image.filename}`} alt="" />
          <h1>{dado.title}</h1>
          <Link to={`party/${dado._id}`}>Detalhes</Link>
        </div>
      ))}
    </div>
  )
}

export default Parties