


export const useCreateParty = () => {

   const formData = new FormData()

   const createParty = async (data) => {
      try {
         formData.append("title", data.title)
         formData.append("author", data.author)
         formData.append("description", data.description)
         formData.append("budget", data.budget)
         formData.append("image", data.image.name)
         console.log(formData)
         const response = await fetch("https://nadastestert.onrender.com/api/parties", {
            method: "POST",
            body: formData
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