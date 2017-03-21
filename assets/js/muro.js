var writePost = document.getElementById("publicacion");
var containsAllPost = document.getElementById("divPrintAllPost");
var selectPrivacy = document.getElementById("selectPrivacy");

var arrAmigos = [];
var arrPublico = [];

function CreatingPost(){
  this.arrContainsAllPost = [];
  this.createAPost =  function(){
                        /*creando el contenedor de cada post*/
                        var containsAPost = document.createElement("FIELDSET");
                        /*creando e párrafo*/
                        var paragraph = document.createElement("P");
                        paragraph.appendChild(document.createTextNode(writePost.value));
                        /*creando botón Editar*/
                        var btnEdit = document.createElement("BUTTON");
                        btnEdit.appendChild(document.createTextNode("Editar"));

                        var createTextarea = document.createElement("TEXTAREA");
                        var space = document.createElement("BR");

                        btnEdit.addEventListener("click", function(event){
                          event.preventDefault();
                          if(event.target.firstChild.nodeValue === "Editar"){
                            event.target.innerHTML = "Guardar";
                            var textToEdit = paragraph.innerHTML;
                            createTextarea.value = textToEdit;
                            event.target.parentNode.insertBefore(createTextarea,event.target);
                            event.target.parentNode.insertBefore(space,event.target);
                            event.target.parentNode.removeChild(paragraph);
                            console.log(event.target.parentNode);
                            console.log(textToEdit);
                            console.log(event.target.parentNode.insertBefore(space,event.target));
                          }else if(event.target.firstChild.nodeValue === "Guardar"){
                            event.target.innerHTML = "Editar";
                            var textToNewParagraph = createTextarea.value;
                            console.log(textToNewParagraph);
                            paragraph.innerHTML = textToNewParagraph;
                            event.target.parentNode.insertBefore(paragraph, event.target);
                            event.target.parentNode.removeChild(createTextarea);
                            event.target.parentNode.removeChild(space);
                          }
                        })
                        /*creando botón Eliminar*/
                        var btnRemove = document.createElement("BUTTON");
                        var btnRemoveName = document.createTextNode("Eliminar");
                        btnRemove.appendChild(btnRemoveName);
                        btnRemove.addEventListener("click", this.btnDelete);

                        containsAPost.appendChild(paragraph);
                        containsAPost.appendChild(btnEdit);
                        containsAPost.appendChild(btnRemove);
                        containsAllPost.appendChild(containsAPost);
                        return containsAPost;
                      }

  this.btnDelete = function(event){
                      var textPar = event.target.parentNode.getElementsByTagName("p")[0].innerHTML;
                      console.log(textPar);
                      if(arrAmigos){
                        containsAllPost.removeChild(event.target.parentNode.getElementsByTagName("FIELDSET")[arrAmigos.indexOf(textPar)]);
                        arrAmigos.splice(arrAmigos.indexOf(textPar), 1);
                      }else if (arrPublico) {
                        containsAllPost.removeChild(containsAllPost.getElementsByTagName("FIELDSET")[arrPublico.indexOf(textPar)]);
                        arrPublico.splice(arrPublico.indexOf(textPar), 1);
                      }
                      console.log(event.target.parentNode.getElementsByTagName("p")[0].innerHTML);
                  }
}

window.addEventListener("load",function(){
var printPostCreated = new CreatingPost();

function printingAPost(){
  printPostCreated.createAPost();
  console.log(printPostCreated.arrContainsAllPost);
  //arrContainsAllPost.push(printPostCreated);
  (selectPrivacy.value == "amigos")? arrAmigos.push(writePost.value): arrPublico.push(writePost.value);
  writePost.value= "";
  writePost.focus();
}

document.getElementById("btnPublicar").addEventListener("click", function(event){
event.preventDefault();
printingAPost();
});
})
