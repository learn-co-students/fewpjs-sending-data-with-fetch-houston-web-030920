function submitData(name,email){
    return fetch('http://localhost:3000/users',{
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        "Accept": 'application/json'
    },
    body: JSON.stringify({
        name: name,
        email: email
    })
    })
    .then(function(response){
        return response.json()
    })
    .then(function(x){
    document.body.innerHTML = x.id
    })
    .catch(function(error) {
        alert("Bad things! Ragnarők!");
        document.body.innerHTML = error.message;
      });
}
  
submitData("Faizah","faizah1992@gmail.com")