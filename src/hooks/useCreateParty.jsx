


export const useCreateParty = () => {

   const formData = new FormData()

   const createParty = async (data) => {
      try {
         const partyFormData = Object.keys(data).forEach((key) => {
            formData.append(key, data[key])
         })
         const response = await fetch("https://nadastestert.onrender.com/api/parties", {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(partyFormData)
         })
      } catch (error) {
         console.log(error)
      }
   }

   return {
      createParty
   }

}