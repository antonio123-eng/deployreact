import React from 'react'
import { useParams } from 'react-router-dom'
import {useParty} from '../../hooks/useParty'
import styles from './Party.module.css'


const Party = () => {
  const { id } = useParams()
  const { dados } = useParty(id)
  const url = "https://nadastestert.onrender.com/files/parties/"

  return (
    <div>
      {dados && 
        <div className={styles.container}>
          <div>
            <img src={url+dados.image} alt="" />
          </div>
          <div className={styles.content}>
            <h1>{dados.title}</h1>
            <span>R$ {dados.budget}</span>
          </div>
          <div className={styles.actions}>
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        </div>
      }
    </div>
  )
}

export default Party