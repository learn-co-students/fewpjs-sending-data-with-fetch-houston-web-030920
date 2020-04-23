// fetch("http://localhost:3000/dogs", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })
// })

// let formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// }

// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// }

// fetch("http://localhost:3000/dogs", configObj)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(object){
//         console.log(object)
//     })

function submitData(name, email){
    return fetch('http://localhost:3000/users', {
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
    .then(function(response){
        return response.json();
    })
    .then(function(response){
        document.body.append(response.id)
    })
    .catch(function(error){
        document.body.append(error.message)
    })
}


