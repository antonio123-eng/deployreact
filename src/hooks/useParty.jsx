import { useEffect, useState } from "react"

export const useParties = () => {

   const [dados, setDados] = useState()

   const fetchData = async() => {
      const response = await fetch("https://nadastestert.onrender.com/api/parties")
      console.log(response)
      const data = await response.json()
      console.log(data)
      setDados(data)
   }

   useEffect(() => {
      fetchData()
   }, [])

   return {
      dados
   }

}