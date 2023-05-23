document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
   
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var reason = document.getElementById("reason").value;
    
    if (firstName === "" || lastName === "" || email === "" || phoneNumber === "" || reason === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }
    
    
    alert("Formulario enviado. Nombre: " + firstName + " " + lastName + ", Correo electrónico: " + email);
    
    //  servidor o utiliza la API 
    var formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("reason", reason);
    
    fetch("url_de_tu_servidor_o_api", {
      method: "POST",
      body: formData
    })
    .then(function(response) {
     
    })
    .catch(function(error) {
     
    });
    
   
  