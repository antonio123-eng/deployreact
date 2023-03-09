import React from 'react'
import { useParties } from "../../hooks/useParties"

const Parties = () => {


  const { dados } = useParties()
  const url = "https://nadastestert.onrender.com/files/parties/"

  return (
    <div>
      {dados && dados.map((dado) => (
       <div>
          <img src={url+dado.image} alt="" />
          {console.log(dado.image)}
       </div>
      ))}
    </div>
  )
}

export default Parties