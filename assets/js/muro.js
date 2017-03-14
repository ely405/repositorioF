window.addEventListener("load",function(){
  var writePost = document.getElementById("publicacion");
  var containsAllPost = document.getElementById("divPrintAllPost");

  function CreatingPost(){
    this.containsAllPost=[];

    this.countPost = 0;

    this.createAPost =  function(){
                          /*creando e párrafo*/
                          var paragraph = document.createElement("P");
                          var textParagraph = document.createTextNode(writePost.value);
                          paragraph.appendChild(textParagraph);
                          /*creando botón Eliminar*/
                          var btnRemove = document.createElement("BUTTON");
                          var btnRemoveName = document.createTextNode("Eliminar");
                          btnRemove.appendChild(btnRemoveName);
                          btnRemove.setAttribute("name", "btnDelete");
                          /*creando botón Editar*/
                          var btnEdit = document.createElement("BUTTON");
                          var btnEditName = document.createTextNode("Editar");
                          btnEdit.appendChild(btnEditName);
                          btnEdit.setAttribute("name", "btnEditPost");
                          /*creando el contenedor de cada post*/
                          var containsAPost = document.createElement("FIELDSET");
                          containsAPost.appendChild(paragraph);
                          containsAPost.appendChild(btnRemove);
                          containsAPost.appendChild(btnEdit);
                          containsAllPost.appendChild(containsAPost);

                          }



var printPostCreated = new CreatingPost();

document.getElementById("btnPublicar").addEventListener("click", function(event){
  event.preventDefault();
  printPostCreated.containsAPost();
}
