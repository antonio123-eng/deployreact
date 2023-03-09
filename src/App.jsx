import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateParty from "./components/CreateParty/CreateParty"
import Parties from "./components/Parties/Parties"
import { useParties } from "./hooks/useParties"

function App() {

  const { dados } = useParties()

  return (
    <div className="App">
      <CreateParty />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Parties />} />
          <Route path="/add" element={<CreateParty />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
