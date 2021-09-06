
export async function fetchSuper(id) {

   const res = await fetch('https://superheroapi.com/api/10226206302529619/1')
   
   return(res.json())
  

}
