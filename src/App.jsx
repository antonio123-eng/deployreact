import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateParty from "./components/CreateParty/CreateParty"
import Parties from "./components/Parties/Parties"

function App() {

  return (
    <div className="App">
      <CreateParty />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Parties />} />
          <Route path="/add" element={<CreateParty />} />
          <Route path="/party/:id" element={<CreateParty />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
