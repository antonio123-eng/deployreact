
export const useCreateParty = () => {

   const createParty = async (formData) => {
      try {
         const response = await fetch("http://nadastestert.onrender.com/api/parties", {
            method: "POST",
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