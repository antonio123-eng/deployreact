import { useEffect, useState } from "react"
import CreateParty from "./components/CreateParty/CreateParty"

function App() {

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

  return (
    <div className="App">
      <h2>Tudo OK!</h2>
      <CreateParty />
      {dados && dados.map((dado) => (
       <div>
          <h1>{dado.title}</h1>
          <p>R$ {dado.budget}</p>
          <p>{dado.description}</p>
       </div>
      ))}
    </div>
  )
}

export default App
