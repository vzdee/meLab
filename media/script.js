const form = document.getElementById('form');
const name = document.getElementById('name');
const last_name = document.getElementById('last-name');
const email = document.getElementById('email');
const tel = document.getElementById('tel');
const service = document.getElementById('service');
const comments = document.getElementById('comments');
const errorname = document.getElementById('error-name');
const errorlast = document.getElementById('error-lastname');
const errorcomm = document.getElementById('error-comm');
const errormail = document.getElementById('error-mail');
const errortel = document.getElementById('error-tel');
const errorservice = document.getElementById('error-service');

name.addEventListener('input', function(){
  if(name.value.trim()===""){
    errorname.textContent = "Please fill this field";
    errorname.classList.add("active");
  }else{
    errorname.textContent = "";
    errorname.classList.remove("active");
  }
})

last_name.addEventListener('input', function(){
  if(last_name.value.trim()===""){
    errorlast.textContent = "Please fill this field";
    errorlast.classList.add("active");
  }else{
    errorlast.textContent = "";
    errorlast.classList.remove("active");
  }
})

email.addEventListener('input', function(){
  if(email.value.trim()===""){
    errormail.textContent = "Please fill this field";
    errormail.classList.add("active");
  }else{
    errormail.textContent = "";
    errormail.classList.remove("active");
  }
})

tel.addEventListener('input', function(){
  if(tel.value.trim()===""){
    errortel.textContent = "Please fill this field";
    errortel.classList.add("active");
  }else{
    errortel.textContent ="";
    errortel.classList.remove("active");
  }
})

comments.addEventListener('input', function(){
  if(comments.value.trim()===""){
    errorcomm.textContent = "Please fill this field";
    errorcomm.classList.add("active");
  }else{
    errorcomm.textContent = "";
    errorcomm.classList.remove("active");
  }
})

form.addEventListener("submit", function(event){
  event.preventDefault();

  let valid = true;
  if(name.value.trim()==''){
    errorname.textContent = "Name is invalid";
    errorname.classList.add('active');
    name.focus();
    valid = false;
  }
  
  if(last_name.value.trim()===""){
    errorlast.textContent = "Last name is invalid";
    errorlast.classList.add('active');
    last_name.focus();
    valid = false;
  }

  if(email.value.trim()===""){
    errormail.textContent = "Email is invalid";
    errormail.classList.add("active");
    email.focus();
    valid = false;
  }

  if(tel.value.trim()===""){
    errortel.textContent = "Phone number is invalid";
    errortel.classList.add('active')
    tel.focus();
    valid = false;
  }

  if(service.value===""){
    errorservice.textContent = "Please selec a service";
    errorservice.classList.add("active")
    service.focus();
    valid=false;
  }

  if(comments.value.trim()===""){
    errorcomm.textContent = "Comments is empty";
    errorcomm.classList.add('active')
    comments.focus();
    valid = false;
  }

  if(!valid){
    return
  }
  

})


function Send_Message(){
  const botones = document.querySelectorAll(".btn1");
  botones.forEach(boton => {
    boton.addEventListener("click", e => {
      e.preventDefault();

      const paquete = boton.dataset.paquete;
      if (!paquete) return;

      const telefono = "529993596943";

      const mensaje = `Hola 👋 Me interesa el paquete ${paquete} de desarrollo web. ¿Podemos cotizar mi proyecto?`;

      const mensajeEncoded = encodeURIComponent(mensaje);
      const url = `https://wa.me/${telefono}?text=${mensajeEncoded}`;

      window.open(url, "_blank", "noopener");
    });
  });
}
