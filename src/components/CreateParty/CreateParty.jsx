import React, { useState } from 'react'
import { useCreateParty } from '../../hooks/useCreateParty'
import styles from "./CreateParty.module.css"

const CreateParty = () => {

  // const [title, setTitle] = useState("")
  // const [author, setAuthor] = useState("")
  // const [description, setDescription] = useState("")
  // const [budget, setBudget] = useState(0)
  const [image, setImage] = useState("")
  const [formulario, setFormulario] = useState({
    title: "",
    author: "",
    description: "",
    budget: "",
  })

  const { createParty } = useCreateParty()

  const handleSubmit = (e) => {
    e.preventDefault()

    const party = {
      ...formulario,
      image: image
    }

    const formData = new FormData()
    const partyFormData = Object.keys(party).forEach((key) => {
      formData.append(key, party[key])
    })
    formData.append("party", partyFormData)

    createParty(formData)
    
  }

  const handleChange = (e) => {
    setFormulario({...formulario, [e.target.name]: e.target.value})
  }

  const changeImage = (e) => {
    const imagem = e.target.files[0]
    setImage(imagem)
  }

  return (
    <div className={styles.container}>
      <h1>Criar Festa</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className={styles.form}>
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
          <input type="file" onChange={changeImage} accept="image/*"/>
        </label>
        <button>Cadastrar</button>
      </form>
    </div>
  )
}

export default CreateParty