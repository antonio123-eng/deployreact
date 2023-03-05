import { useEffect, useState } from "react"

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
      {dados && dados.map((dado) => (
       <div>
          <h1>{dado.title}</h1>
          <p>{dado.budget}</p>
       </div>
      ))}
    </div>
  )
}

export default App
