import { useEffect, useState } from "react"


export const useParties = () => {

   const [dados, setDados] = useState()

   const fetchData = async() => {
      const response = await fetch("https://nadastestert.onrender.com/api/parties")
      const data = await response.json()
      setDados(data)
   }

   return {
      dados,
      fetchData
   }

}