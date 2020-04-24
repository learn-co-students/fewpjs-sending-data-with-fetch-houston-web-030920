// // Add your code here
// let formData  = {
//   dogName: "Bryon",
//   dogBreed: "Poodle"
// }
//
// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   }
//
//
// fetch("http://localhost:3000/dogs", configObj)
//   .then((response)=>{
//     return response.json()
//   })
//   .then((object)=>{
//     console.log(object)
//   })
//   .catch(function(error) {
//     alert("Bad things! Ragnarők!");
//     console.log(error.message);
//   }

let submitData = (name, email) => {
  return fetch( 'http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        email
      })
    })
    .then(  (response) =>{
      return response.json()
    })
    .then(  (object) =>{
      document.body.innerHTML = object["id"]
    })
    .catch(  (error) =>{
      document.body.innerHTML = error.message
    })
}
