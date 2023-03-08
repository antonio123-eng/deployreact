


export const useCreateParty = () => {

   const formData = new FormData()

   const createParty = async (data) => {
      try {
         const partyFormData = Object.keys(data).forEach((key) => {
            console.log("Chave: " + key)
            console.log("valor: " + data[key])
            formData.append(key, data[key])
         })
         console.log(data)
         console.log(partyFormData)
         const response = await fetch("https://nadastestert.onrender.com/api/parties", {
            method: "POST",
            body: partyFormData
         })
         console.log(response)
      } catch (error) {
         console.log(error)
      }
   }

   return {
      createParty
   }

}