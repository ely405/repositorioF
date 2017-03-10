/*
function ingresa(){
  var formulario = document.getElementById("formLogin");
	var dato = formulario[0];

	if (dato.value=="login"){
		alert("Enviando el formulario");
		formulario.submit();
		return true;
	}else {
		alert("No se envía el formulario");
		return false;
	}
}
*/

var pass = document.getElementById("inpPassword");
var user = document.getElementById("inpEmail");

function validaIngresoDatos(){
  var error = document.getElementsByName("error");
  var regExpEmail = /\w+@[a-z]+\.+[a-z]/;

  (regExpEmail.test(user.value) == false)? error[0].innerHTML = "Ingresa correo válido" : error[0].innerHTML = "";
  if(/\S{6}$/.test(pass.value) == false){
    error[1].innerHTML = "Ingresa usuario válido";
    pass.focus();
  }else{
    error[1].innerHTML = "";
  }

  //ingresa();
}

var arrListLogin =  [ {user: "lilo@mail.com", password: "abc456d"},
                      {user: "pepe-25@mail.com", password: "abc123d"},
                      {user: "kiko_3@mail.com", password: "abc098d"},
                    ]
console.log(arrListLogin);
function usuariosValidos(){
    var ingresa = document.getElementById("formLogin");
    var noIngresa = document.getElementById("userIncorrect");
    arrListLogin.forEach(function(e){
      return (user.value == e.user && pass.value == e.password)? formLogin.action="muro.html" : "";
             //(user.value != e.user && pass.value != e.password)? noIngresa.innerHTML = "Usuario o contraseña incorrecta": "";
    })
}

document.getElementById("login").addEventListener("click", function(){
  validaIngresoDatos();
  usuariosValidos();
});

function redirecciona(){
  if(valida()){
    document.getElementById("aMuro").href = "muro.html";
  }
}

/*
function loginUser(user, password){
  this.user = user;
  this.password = password;
  this.validaPass = validaPass();
}
*/
