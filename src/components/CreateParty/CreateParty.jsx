import React, { useState } from 'react'
import { useCreateParty } from '../../hooks/useCreateParty'

const CreateParty = () => {

  const [formulario, setFormulario] = useState({
    title: "",
    author: "",
    description: "",
    budget: ""
  })
  const [image, setImage] = useState("")

  const { createParty } = useCreateParty()

  const handleSubmit = (e) => {
    e.preventDefault()

    const party = {
      ...formulario,
      image
    }
    console.log(party)

    createParty(party)
    
  }

  const handleChange = (e) => {
    setFormulario({...formulario, [e.target.name]: e.target.value})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Titulo</span>
          <input type="text" value={formulario.title} name="title" onChange={handleChange}/>
        </label>
        <label>
          <span>Autor</span>
          <input type="text" value={formulario.author} name="author" onChange={handleChange}/>
        </label>
        <label>
          <span>Descrição</span>
        <input type="text" value={formulario.description} name="description" onChange={handleChange}/>
        </label>
        <label>
          <span>Orçamento</span>
          <input type="text" value={formulario.budget} name="budget" onChange={handleChange}/>
        </label>
        <label>
          <span>Imagem</span>
          <input type="file" value={image} onChange={(e) => setImage(e.target.files[0])}/>
        </label>
        <button>Cadastrar</button>
      </form>
    </div>
  )
}

export default CreateParty