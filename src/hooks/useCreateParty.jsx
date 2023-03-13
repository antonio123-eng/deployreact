
export const useCreateParty = () => {

   const createParty = async (formData) => {
      try {
         const response = await fetch("https://nadastestert.onrender.com/api/parties", {
            method: "POST",
            headers: {
               "Conten-Type": "multipart/form-data"
            },
            body: formData
         })
         console.log(response)
      } catch (error) {
         console.log("Error " + error)
      }
   }

   return {
      createParty
   }

}