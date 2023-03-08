import React, { useState } from 'react'
import { useCreateParty } from '../../hooks/useCreateParty'

const CreateParty = () => {

  const [formulario, setFormulario] = useState({
    title: "",
    author: "",
    description: "",
    budget: 0
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

  const changeImage = (e) => {
    const imagem = e.target.files[0]
    setImage(imagem)
  }

  return (
    <div>
      <form encType="multipart/form-data" onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
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
          <input type="number" value={formulario.budget} name="budget" onChange={handleChange}/>
        </label>
        <label>
          <span>Imagem</span>
          <input type="file" onChange={changeImage}/>
        </label>
        <button>Cadastrar</button>
      </form>
    </div>
  )
}

export default CreateParty