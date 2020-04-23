// Add your code here

function submitData(name,email){
return fetch('http://localhost:3000/users', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify({
    name: name,
    email: email
  })
})
.then(function(response){
    return response.json();
})
.then(function(obj){
    console.log(obj)
    document.body.innerHTML= obj.id
})
.catch(function(error){
   alert("error!");
   console.log(error.message)
   document.body.innerHTML= error.message

});
}

submitData("Steve","steve@steve.com")