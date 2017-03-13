/*function createPost() {
  alert("hola");

  var writePost = document.getElementById("publicacion");
  var printAllPost = document.getElementById("divPrintAllPost");
  var printPost = document.createElement('DIV');
  var parrafo = document.createElement('p');
  var eliminar = document.createElement('BUTTON');

  eliminar.innerHTML = "Eliminar"
  //texto.innerHTML = writePost.value;
  //var elim = document.getElementById("a");
  eliminar.addEventListener('click',function(e) {
    e.preventDefault();
    var postParent = e.target.parent; // Devuelve el padre
  });

  var printPosts = printPost.appendChild(parrafo);
  printPost.appendChild(eliminar);
  var printingPosts = document.printAllPost.appendChild(printPosts);
  //eliminar.appendChild(elim);

  if (writePost.value != "") {
    var publica = document.createTextNode("eli");
    texto.appendChild(publica);
  }

  //return printingPosts;
}
*/


//var resultado = document.getElementById('divPrintAllPost');
//resultado.appendChild(createPost("gian"));
document.getElementById("btnPublicar").addEventListener("click", function(){
  createPost();
});


var writePost = document.getElementById("publicacion");
var containsAllPost = document.getElementById("divPrintAllPost");
var arrPublic = [];
var arrFriends = [];
var arrPublicaciones = [];

//var containsAPost;

function createPost(){
//  var printAllPost = document.getElementById("divPrintAllPost");
  /*creando el párrafo*/
  var parrafo = document.createElement("P");
  var textParr = document.createTextNode(writePost.value);
  parrafo.appendChild(textParr);
  //document.body.appendChild(parrafo);

  /*Creando el botón Eliminar*/
  var btnDelete = document.createElement("BUTTON");
  var btnDeleteName = document.createTextNode("Eliminar");
  btnDelete.appendChild(btnDeleteName);
  //document.body.appendChild(btnDelete);

  /*Funcionalidad botón Eliminar*/
  btnDelete.addEventListener("click", function(event){
    event.preventDefault();
    //alert("hola");
    containsAllPost.removeChild(containsAPost);
    arrPublicaciones -= textParr.value;
  });

  /*Creando botón Editar*/
  var btnEdit = document.createElement("BUTTON");
  var btnEditName = document.createTextNode("Editar");
  btnEdit.appendChild(btnEditName);

  /*Funcionalidad del botón Editar*/

  /*Creando el contenedor de cada post*/
  var containsAPost = document.createElement("FIELDSET");
  containsAPost.appendChild(parrafo);
  containsAPost.appendChild(btnDelete);
  containsAPost.appendChild(btnEdit);
  containsAllPost.appendChild(containsAPost);

  arrPublicaciones += textParr.value;
  return arrPublicaciones.split("+");
//sconsole.log(arrPublicaciones);

  /*Seleccionando la privacidad*/

}
//console.log(arrPublicaciones);
