import { BrowserRouter, Route, Routes } from "react-router-dom"
import CreateParty from "./components/CreateParty/CreateParty"
import Parties from "./components/Parties/Parties"
import Party from "./components/Party/Party"
import Header from "./components/Header/Header"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Parties />} />
          <Route path="/createparty" element={<CreateParty />} />
          <Route path="/party/:id" element={<Party />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
